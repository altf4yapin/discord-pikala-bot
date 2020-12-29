const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const {Client, MessageEmbed} = require('discord.js');
const fs = require('fs');
const moment = require('moment');

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Alperen tarafından kodlanıyor!', { type: 'PLAYING' })
  .then(presence => console.log('Durum ---> ${presence.activities[0].name} oldu.'))
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykümeselam, Hoşgeldin!');
   }

   if (msg.content.toLowerCase() === 'selam') {
     msg.reply('Aleykümeselam, Hoşgeldin!');
    }

    if (msg.content.toLowerCase() === 'merhaba') {
      msg.reply('Aleykümeselam, Hoşgeldin!');
     }

     if (msg.content.toLowerCase() === 'naber') {
       msg.channel.send('İyidir valla. Alperenin başına dert çıkartıyorum, kodlarda hata veriyorum öyle sen?');
      }


      if (msg.content.toLowerCase() === prefix + 'yardim') {
        const kanal = new MessageEmbed()

        .setTitle('Pikala Bot Yardım')
        .setDescription('Yardım Komutları Aşağıdaki Gibidir')
        .setAuthor('Pikala Bot')
        .setColor("RANDOM")
        .setThumbnail('https://archive-media-1.nyafuu.org/vp/image/1593/23/1593238333873.gif')
        .addField(':heart_eyes:  ', 'Komutlar Şunlardır')
        .addField('/avatar', 'Avatarı Büyültür')
 .addField('/emojiyazı', 'Mesajınızı emoji haline getirir')
 .addField('/kick', 'İstediğiniz kişiyi sunucudan atar.')
 .addField('/öneri', 'bot hakkındaki önerilerinizi bot sahiplerine ulaştırır')
 .addField('/ping', 'Botun pingini gösterir')

 .addField('/servericon', 'Serverin iconunu gösterir')
 .addField('/stresçarkı', 'Sizin için bir stres çarkı çevirir')
 .addField('/temizle', 'Belirtilen miktarda mesaj siler')
 .addField('/unban', 'İstediğiniz kişinin banını kaldırır.')
 .addField('/woodie', 'Woodie the Lumberjack hakkında bilgi verir')
 .addField('/yardim', 'Tüm komutları gösterir.')
 .addField('/yaz', 'İstediğiniz şeyi bota yazdırır')
 .addField('/yazıtura', 'Yazı-Tura atar.')








        ;
        msg.channel.send(kanal);
       }





     if (!msg.content.startsWith(prefix)) {
       return;
     }

     if (msg.content.toLowerCase() === prefix + 'sahip') {
       msg.reply('Anam Ayça Babam Alperen, Abimde Eray. Gerisini bende bilmirem.');
      }





    });



client.login('NzkyNzAzOTM0NDQ3MzUzODk3.X-hlEQ.r46Aub7nVstMsVWL0CDk0dghIo4');
