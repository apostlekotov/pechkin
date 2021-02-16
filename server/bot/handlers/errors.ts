import bot from '..';
import messages from '../messages';
import { Message } from 'node-telegram-bot-api';

export const defaultReply = (msg: Message) => {
	const cid = msg.chat.id;
	if (!msg.text?.includes('/')) {
		bot.sendMessage(cid, messages.default_reply, { parse_mode: 'Markdown' });
	}
};

export const error = (error: any) => {
	console.log(error);
};
