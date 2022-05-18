import { createClient } from 'redis';
import logger from 'utils/logger';
import config from './config';

const redisClient = createClient(config.redis.port);
redisClient.connect();

redisClient.on('connect', () => {
  logger.info('Redis client connected');
});

export default redisClient;
