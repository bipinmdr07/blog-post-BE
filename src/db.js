import path from 'path';
import AWS from 'aws-sdk';
import dm from 'dynamodb-migrations';

import config from './config';

const dbConfig = config.dynamoDB;
const migrationPath = path.join(__dirname, '../migration/migrations');

const dynamodb = {
  raw: new AWS.DynamoDB(dbConfig),
  doc: new AWS.DynamoDB.DocumentClient(dbConfig),
};

dm.init(dynamodb, migrationPath);

export default dm;
