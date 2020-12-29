const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

const fs = require('fs');
const moment = require('moment');

var prefix = ayarlar.prefix;


exports.run = async (prefix , msg) => {
    let dönme = await msg.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${msg.author.tag} bir stres çarkı çevirdi!`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${msg.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.`
            }
        });
    }, 5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stresçarkı',
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarki'
};
