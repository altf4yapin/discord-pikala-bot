const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const {Client, MessageEmbed} = require('discord.js');
const fs = require('fs');
const moment = require('moment');

var prefix = ayarlar.prefix;

exports.run = (prefix, message, array) => {
let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam İçin Herhangi Bir Şey Yazmalısın.');
mesaj.delete();
message.channel.send(mesaj);
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['say', 'sar', 'sat', 'söle', 'söyle', 'sögle', 'yav', 'yaz', 'yazdır', 'yazdırü'],
permLevel: 0 //Herkes Kullanabilir //permLevel: 2 Sadece Adminler //premLevel: 4 sadece kurucular
};

exports.help = {
name: 'yaz',
description: 'Ne İstersen Bot Onu Yazar',
usage: 'yaz [Yazdırmak İstediğin Şey]'
};
