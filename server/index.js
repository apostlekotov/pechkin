require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const colors = require('colors');

const routes = require('./routes');

(async () => {
	const app = express();

	const bot = require('./bot');

	app.use(bodyParser.json());
	app.use(cors());
	app.use(compression());

	const limiter = rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 10000,
	});

	app.use(limiter);

	routes(app);

	app.listen(process.env.PORT, () => {
		console.log(
			`🚀Server started on ${process.env.NODE_ENV} made on port ${process.env.PORT}`
				.yellow.bold
		);
	});
})().catch((err) => console.log(`Error ${err.message}`.red));
