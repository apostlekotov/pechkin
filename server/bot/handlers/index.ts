import TelegramBot from 'node-telegram-bot-api';
import { welcome, help, documents } from './commands';
import { defaultReply, error } from './errors';

export default function (bot: TelegramBot) {
	bot.onText(/\/start/, welcome);
	bot.onText(/\/help/, help);
	bot.onText(/\/documents/, documents);
	bot.on('text', defaultReply);
	bot.on('error', error);
}
