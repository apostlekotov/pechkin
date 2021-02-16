import nodemailer from 'nodemailer';

type OptionsType = {
	email: string;
	subject: string;
	text: string;
};

export const sendGmail = async (options: OptionsType) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const { email, subject, text } = options;

	const message = {
		from: `Postman Pechkin <${process.env.EMAIL}>`,
		to: email,
		subject: subject,
		text: text,
		html: text,
	};

	await transporter.sendMail(message);

	// console.log('Mail has been sent: %s'.green, info.messageId);
};
