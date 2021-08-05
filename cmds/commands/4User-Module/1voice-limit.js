const Discord = require("discord.js")

module.exports = {
    commands: ['max', 'limit'],
    minArgs: 1,
    callback: async (message, arguments, text) => {
        let {
            channel
          } = message.member.voice;
          if (!channel) return message.reply(new Discord.MessageEmbed()
            .setColor('#f00808')
            .setTitle(":x: You have to be in a VoiceChannel, for this Command")
            .setFooter("Studyium-Bot")
          )
            if (!arguments[0]) return message.reply(
              new Discord.MessageEmbed()
              .setColor('#f00808')
              .setFooter("Studyium-Bot")
              .setTitle(":x: You have to include the limit you want to set to")
            );
            if (isNaN(arguments[0])) return message.reply(
              new Discord.MessageEmbed()
              .setColor('#f00808')
              .setFooter("Studyium-Bot")
              .setTitle(":x: You have to include the limit you want to set to | It MUST be a **Number**")
            );
            let userlimit = Number(arguments[0]);
            if (userlimit > 99 || userlimit < 0) return message.reply(
              new Discord.MessageEmbed()
              .setColor('#f00808')
              .setFooter("Studyium-Bot")
              .setTitle(":x: Your included Number is not in the valid Range (`0` - `99`)")
            );
            channel.setUserLimit(userlimit).then(vc => {
              return message.reply(new Discord.MessageEmbed()
                .setColor('#09aaf5')
                .setTitle(`✅ Set User-limit to \`${vc.userLimit}\``)
                .setFooter("Studyium-Bot")
              )
            })

    },
}