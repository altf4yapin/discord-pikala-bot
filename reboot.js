const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


exports.run = function(prefix, message) {

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
