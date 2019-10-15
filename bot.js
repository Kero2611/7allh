const Discord = require("discord.js");
const myid = ['543533832679194631']

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.login ("NTQzNTMzODMyNjc5MTk0NjMx.XaX4qg.nN0OMXatoJ9aRlYBINUnYbnrZLY")
