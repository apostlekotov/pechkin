import { Request, Response, NextFunction } from 'express';
import client from './db';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(500).json({ success: false, error: 'No token provided' });
	}

	try {
		if (token !== (await client.get(req.body?.cid))) {
			return res
				.status(400)
				.json({ success: false, error: 'Token is not valid' });
		}
	} catch (err) {
		return res
			.status(500)
			.json({ success: false, error: err.message || 'Server Error' });
	}

	return next();
};
