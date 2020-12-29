const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


exports.run = function(prefix, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "459698010473889813";
	var channelID = "696896592917168202";

	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **;öneri <mesaj>**");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};
