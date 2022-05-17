import { isEmpty } from 'lodash';
import { docClient } from '../db';

export class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  scan() {
    return docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();
  }

  fetch(query = {}) {
    if (isEmpty(query)) {
      return this.scan();
    }

    return docClient
      .query({
        TableName: this.tableName,
        ...query,
      })
      .promise();
  }

  fetchByKey(key) {
    return docClient
      .get({
        TableName: this.tableName,
        Key: {
          ...key,
        },
      })
      .promise();
  }

  create(params) {
    return docClient
      .put({
        TableName: this.tableName,
        Item: {
          createdAt: params.createdAt || new Date().getTime(),
          updatedAt: params.updatedAt || new Date().getTime(),
          ...params,
        },
      })
      .promise();
  }

  update(key, params) {
    const { updatedAt: _, ...rest } = params;
    const paramKeys = Object.keys(rest);

    return docClient
      .update({
        TableName: this.tableName,
        Key: {
          ...key,
        },
        ReturnValues: 'ALL_NEW',
        UpdateExpression: `SET ${paramKeys
          .map((_, index) => `#field${index} = :value${index}`)
          .join(', ')}, #updatedAt = :updatedAt`,
        ExpressionAttributeNames: paramKeys.reduce(
          (acc, key, index) => ({ ...acc, [`#field${index}`]: key }),
          { '#updatedAt': 'updatedAt' }
        ),
        ExpressionAttributeValues: paramKeys.reduce(
          (acc, key, index) => ({ ...acc, [`:value${index}`]: params[key] }),
          { ':updatedAt': new Date().getTime() }
        ),
      })
      .promise();
  }

  delete(key) {
    return docClient
      .delete({
        TableName: this.tableName,
        Key: {
          ...key,
        },
      })
      .promise();
  }

  keys() {
    return {
      PK: this.pk(),
      SK: this.sk(),
    };
  }
}
