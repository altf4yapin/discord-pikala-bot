const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
const moment = require('moment');

var prefix = ayarlar.prefix;

exports.run = function(prefix, message) {
message.channel.bulkDelete(20);
message.channel.send("20 mesaj sildim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
