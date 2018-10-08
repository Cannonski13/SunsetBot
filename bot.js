const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!updates') {
    	message.reply('commands can be found here: https://docs.google.com/document/d/1N9rm2l-dF305MAUNLJp80HhokmWhZ-1dQ2xbm-CMv_s/edit?usp=sharing')  
                     
 
  	}
});
client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('If you are needing help join the support server here: https://discord.gg/zw8Yzhf') 
  	}
});
client.on('message', message => {
    if (message.content === '!addme') {
    	message.reply('You can add me here: https://discordapp.com/api/oauth2/authorize?client_id=497951381819359233&permissions=0&scope=bot');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
