import TelegramBot from 'node-telegram-bot-api';
import handlers from './handlers';

const bot = new TelegramBot(process.env.TOKEN as string, { polling: true });

handlers(bot);

export default bot;
