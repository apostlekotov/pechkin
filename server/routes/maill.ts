import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { sendGmail } from '../utils/sendIt';

// @desc      Send message to telegram bot
// @route     POST /mail/send
// @access    Public
export const sendLetter: RequestHandler = async (req, res) => {
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

	const { email, subject, text } = req.body;

	try {
		await sendGmail({ email, subject, text });
	} catch (err) {
		console.error(err.message);
		return res
			.status(500)
			.json({ success: false, error: err.message || 'Server Error' });
	}

	return res
		.status(200)
		.json({ success: true, data: 'Your message has been sent' });
};
