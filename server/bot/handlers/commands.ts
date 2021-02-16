import bot from '../';
import messages from '../messages';
import { Message } from 'node-telegram-bot-api';
import { getToken } from '../../utils/chatIdToken';

export const welcome = async (msg: Message) => {
	const cid = msg.chat.id;

	bot.sendMessage(cid, messages.welcome, { parse_mode: 'Markdown' });
	bot.sendMessage(cid, messages.documents(cid, await getToken(cid)), {
		parse_mode: 'Markdown',
	});
};

export const help = (msg: Message) => {
	const cid = msg.chat.id;
	bot.sendMessage(cid, messages.help, { parse_mode: 'Markdown' });
};

export const documents = async (msg: Message) => {
	const cid = msg.chat.id;
	bot.sendMessage(cid, messages.documents(cid, await getToken(cid)), {
		parse_mode: 'Markdown',
	});
};
