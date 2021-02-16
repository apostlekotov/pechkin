export default {
	welcome:
		"Hi there, I'm your local postman, Pechkin ✉️\nI will deliver you letters from your contact forms\nHere is my [site](https://pechkin.app/), you can read the documentation there 📄",
	default_reply:
		"When you don't know what to write about, write about the weather or / commands.",
	help:
		"Knock Knock\nWho's there?\nIt's me, postman Pechkin! I deliver letters and only can hear / commands",
	documents: (cid: number, token: any) =>
		`Your docUments:\n📬 Mailbox number: \`${cid}\`,\n🍪 Token: \`${token}\`\nStore it in a safe place!`,
	error: 'Oopsie, something gone wrong',
};
