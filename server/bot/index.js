const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
	const cid = msg.chat.id;

	bot.sendMessage(cid, 'Yo');
});

module.exports = {
	bot,
};
