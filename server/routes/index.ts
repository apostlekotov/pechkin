import 'colorts/lib/string';

import { sendMail } from './sendMail';
import { sendMessage } from './sendMessage';

export default function (app: any) {
	app.post('/mail/send', sendMail);
	app.post('/telegram/send', sendMessage);
}
