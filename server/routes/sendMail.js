const { sendIt } = require('../utils/sendIt');

// @desc      Send message to telegram bot
// @route     POST /api/mail
// @access    Public
exports.sendMail = async (req, res) => {
	const { email, subject, text } = req.body;

	try {
		await sendIt({ email, subject, text });
		res.status(200).json({ success: true, data: 'Your message has been sent' });
	} catch (err) {
		console.error(`${err}`.red);
		res.status(500).json({ success: false, error: err.message });
	}
};
