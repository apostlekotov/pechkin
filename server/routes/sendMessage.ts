import Bot from '../bot';

// @desc      Send message to telegram bot
// @route     POST /api/telegram/send
// @access    Public
export const sendMessage = async (req, res) => {
	const { cid, message } = req.body;

	try {
		await Bot.sendMessage(cid, message, { parse_mode: 'HTML' });
		res.status(200).json({ success: true, data: 'Your message has been sent' });
	} catch (err) {
		if (err.message.includes('chat not found')) {
			res.status(400).json({ success: false, error: 'Chat not found' });
			return;
		}

		console.error(`${err}`.red);
		res.status(500).json({ success: false, error: err.message });
	}
};
