const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const {Client, MessageEmbed} = require('discord.js');
const fs = require('fs');
const moment = require('moment');

var prefix = ayarlar.prefix;


const cevaplar = [
	"YAZI-TURA:__TURA__**",
	"YAZI-TURA:__YAZI__**"
];

exports.run = function(prefix, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "YAZI-TURA:__YAZI__**") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg")
		message.channel.send(embedyazı);

	} else if (cevap === "YAZI-TURA:__TURA__**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg")
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
