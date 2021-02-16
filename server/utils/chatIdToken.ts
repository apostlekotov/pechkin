import client from './db';
import { v4 as uuidv4 } from 'uuid';

export const getToken = async (cid: number) => {
	const key = cid.toString();

	const token = await client.get(key);

	if (!token) {
		const newToken = uuidv4();
		await client.set(key, newToken);
		return newToken;
	}

	return token;
};

export const delToken = async (cid: number) => {
	const key = cid.toString();
	await client.del(key);
};
