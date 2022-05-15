import { docClient } from '../db';

export class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  fetch(query = {}) {
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

  keys() {
    return {
      PK: this.pk(),
      SK: this.sk(),
    };
  }
}
