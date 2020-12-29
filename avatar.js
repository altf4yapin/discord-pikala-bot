const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


exports.run = function(prefix, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.author.avatarURL)

    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatarım'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};
