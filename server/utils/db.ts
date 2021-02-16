import Redis from 'ioredis';

const client = new Redis(process.env.REDISCLIENT_URL as string);

export default client;
