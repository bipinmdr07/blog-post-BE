import * as pkg from '../package.json';

const config = {
  node_env: process.env.NODE_ENV || 'development',
  app: {
    name: process.env.APP_NAME || pkg.name,
    version: process.env.APP_VERSION || pkg.version,
    port: process.env.APP_PORT || '4000',
    host: process.env.APP_HOST || '0.0.0.0',
  },
  githubOauth: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    oauthURL: process.env.GITHUB_OAUTH_URL,
  },
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  dynamoDB: {
    tableName: process.env.TABLE_NAME,
    region: process.env.AWS_REGION,
    endpoint: process.env.DYNAMO_DB_ENDPOINT,
  },
};

export default config;
