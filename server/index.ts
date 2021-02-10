import 'colorts/lib/string';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import routes from './routes';

(async () => {
	const app = express();

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
