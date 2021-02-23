import 'colorts/lib/string';
import { auth } from '../utils/auth';
import { check } from 'express-validator';

import { sendLetter } from './maill';
import { sendTelegramLetter } from './telegram';

export default function (app: any) {
	app.post(
		'/mail/send',
		check('email').isEmail().withMessage('Email is not valid').normalizeEmail(),
		check('subject').not().isEmpty().withMessage('Subject cannot be empty'),
		check('text')
			.not()
			.isEmpty()
			.withMessage('Letter body cannot be empty')
			.trim()
			.escape(),
		sendLetter
	);
	app.post(
		'/telegram/send',
		[auth],
		check('cid')
			.not()
			.isEmpty()
			.isNumeric()
			.withMessage('Chat id is not valid'),
		check('message')
			.not()
			.isEmpty()
			.withMessage('Message cannot be empty or longer than 4096 characters')
			.trim()
			.isLength({ max: 4096 }),
		sendTelegramLetter
	);
}
