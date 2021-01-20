const { sendMail } = require('./sendMail');
const { sendMessage } = require('./sendMessage');

module.exports = (app) => {
	app.post('/api/mail', sendMail);
	app.post('/api/telegram', sendMessage);
};
