import 'dotenv/config';
import path from 'path';
import AWS from 'aws-sdk';

import dm from 'dynamodb-migrations';

import config from './config';

const dbConfig = config.dynamoDB;
const migrationPath = path.join(__dirname, '../migration/migrations');

export const dynamoDB = new AWS.DynamoDB(dbConfig);
export const docClient = new AWS.DynamoDB.DocumentClient(dbConfig);

const dynamodb = {
  raw: dynamoDB,
  doc: docClient,
};

dm.init(dynamodb, migrationPath);

export default dm;
