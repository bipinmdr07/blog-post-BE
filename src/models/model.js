import { docClient } from '../db';

/**
 * Base class that is extended by domain models.
 */
class Model {
  /**
   * The contructor method creates model for services.
   *
   * @param {String} tableName
   */
  constructor(tableName) {
    this.tableName = tableName;
  }

  /**
   * This method fetches all the items from database.
   *
   * @returns {Promise}
   */
  fetchAllItems() {
    return docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();
  }

  /**
   * This method fetch the document by provided key.
   *
   * @param {Object} key
   * @returns {Promise}
   */
  fetchByKey(key) {
    return docClient
      .get({
        TableName: this.tableName,
        Key: { ...key },
      })
      .promise();
  }

  /**
   * This method fetch the documents by provided query params.
   *
   * @param {Object} params
   * @returns {Promise}
   */
  query(params) {
    return docClient
      .query({
        TableName: this.tableName,
        ...params,
      })
      .promise();
  }

  /**
   * This method creates the document in the table.
   *
   * @param {Object} params
   * @returns {Promise}
   */
  create(params) {
    return docClient
      .put({
        TableName: this.tableName,
        Item: {
          createdAt: params.createdAt ? params.createdAt : new Date().getTime(),
          updatedAt: params.updatedAt ? params.updatedAt : new Date().getTime(),
          ...params,
        },
      })
      .promise();
  }

  /**
   * This method updates the document with the provided object.
   *
   * Note: Need to send all attributes.
   *
   * @param {Object} params
   * @returns {Promise}
   */
  update(params) {
    return this.create({ ...params, updatedAt: new Date().getTime() });
  }

  /**
   * This method deletes the document by key.
   *
   * @param {Object} key
   * @returns {Promise}
   */
  delete(key) {
    return docClient
      .delete({
        TableName: this.tableName,
        Key: { ...key },
      })
      .promise();
  }
}

export default Model;
