const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


exports.run = function(prefix, message) {

    message.channel.send("Pingim **" + client.ping + "** ms!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
