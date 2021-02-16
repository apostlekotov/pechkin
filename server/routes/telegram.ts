import bot from '../bot';
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { delToken } from '../utils/chatIdToken';

// @desc      Send message to telegram bot
// @route     POST /telegram/send
// @access    Public
export const sendTelegramLetter: RequestHandler = async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			error: errors
				.array()
				.map((err) => err.msg)
				.join(', '),
		});
	}

	const { cid, message } = req.body;

	try {
		await bot.sendMessage(cid, message, { parse_mode: 'HTML' });
	} catch (err) {
		if (err.message.includes('not found') || err.message.includes('blocked')) {
			delToken(cid);
			return res
				.status(400)
				.json({ success: false, error: `Chat not found with the id ${cid}` });
		}

		console.error(err.message);

		return res
			.status(500)
			.json({ success: false, error: err.message || 'Server Error' });
	}

	return res
		.status(200)
		.json({ success: true, data: 'Your message has been sent' });
};
