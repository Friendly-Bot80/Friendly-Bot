module.exports = {
  commands: ['ticket', 'support'],
  minArgs: 0,
  expectedArgs: '<message>',
  callback: async (message, arguments, text) => {
    let guild = "780879327263719424"

        message.reply(
          'Your ticket channel has been created please check the moderators category.'
        )
        
    const name = message.author.username
    let role = message.guild.roles.cache.find(role => role.name === "@everyone");
    let mods = message.guild.roles.cache.find(role => role.name === "Mod");
      message.guild.channels
      .create(name, {
        type: 'text'
      })
      .then((channel) => {
        console.log(channel)
        const category = '818764038317015080'
        channel.setParent(category).then(async (settedParent) => {
          settedParent.updateOverwrite(role, {
              "VIEW_CHANNEL": false,
              "READ_MESSAGES": false, "SEND_MESSAGES": false,
              "ATTACH_FILES": false, "CONNECT": false,
              "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false
          });
          settedParent.updateOverwrite(message.author, {
            "VIEW_CHANNEL": true,
            "READ_MESSAGES": true, "SEND_MESSAGES": true,
            "ATTACH_FILES": true, "CONNECT": true,
            "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
        });
        settedParent.updateOverwrite(mods, {
          "VIEW_CHANNEL": true,
          "READ_MESSAGES": true, "SEND_MESSAGES": true,
          "ATTACH_FILES": true, "CONNECT": true,
          "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true
      });
       const discord = require('discord.js')
      var Ticketembed = new discord.MessageEmbed()
      .setColor('#e7b90b')
      .setTitle(`Hi, ${name}. To close write **!close @${name}**)`)

  settedParent.send(Ticketembed)
      })
    })
    
  },
}