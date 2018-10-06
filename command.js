const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
    commandPrefix: prefix
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Botcode'
);
