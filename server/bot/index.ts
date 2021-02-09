import TelegramBot from 'node-telegram-bot-api';
import messages from './messages';

const Bot = new TelegramBot(process.env.TOKEN as string, { polling: true });

Bot.onText(/\/start/, (msg) => {
	const cid = msg.chat.id;

	Bot.sendMessage(cid, messages.start(cid));
});

export default Bot;
