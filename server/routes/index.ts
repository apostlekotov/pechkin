import { sendMail } from './sendMail';
import { sendMessage } from './sendMessage';

export default function (app) {
	app.post('/api/mail/send', sendMail);
	app.post('/api/telegram/send', sendMessage);
}
