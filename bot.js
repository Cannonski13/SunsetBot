const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready",() => {
  client.user.setGame(prefix + "!ping");
  console.log("SunsetBot is ready for use")  
});

const prefix = "!" //this is the bots prefix
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix + 'ping') {
    	message.reply(prefix + "Pong");
  	}
});

client.on('message', message => {
    if (message.content === 'addme') {
    	message.reply('You can add me here: https://discordapp.com/api/oauth2/authorize?client_id=497951381819359233&permissions=0&scope=bot');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
