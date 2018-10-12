const Eris = require('eris');
const bot = new Eris(process.env.BOT_TOKEN);

bot.on('ready', () => {
	console.log('Connected');
	bot.editStatus('online', {name: 'Version 1.0.1', type :0})
});

bot.on('messageCreate', msg => {
	const usedby = `Command ${msg.content} used by ${msg.member.username}#${msg.member.discriminator} (${msg.member.id})`;

	if (msg.author.bot) return;

bot.createMessage(msg.channel.id, 
`!addme - You can add me here: https://discordapp.com/api/oauth2/authorize?client_id=497951381819359233&permissions=0&scope=bot
!updates - A list of updates will be available soon
!help - If you are needing help then join the support server here: https://discord.gg/zw8Yzhf 
!commands - Join the support server for the full list of commands `)

});

bot.connect();
