const warnSchema = require('../../../models/1warn-schema')

module.exports = {
  commands: 'warn',
  minArgs: 2,
  expectedArgs: "<Target user's @> <reason>",
  callback: async (message, arguments) => {
    const target = message.mentions.users.first()

    var person = message.guild.member(message.mentions.users.first());

    message.delete()
    if (!target) {
      message.reply('Please specify someone to warn.')
      return
    }

    arguments.shift()

    const guildId = message.guild.id
    const userId = target.id
    const reason = arguments.join(' ')
   
    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }
   
      await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
      
    message.channel.send(`${"<@" + person.user.id + ">"}, a moderator is awkwardly staring at you.. 👀 
    **Please behave according to the rules!**`)

},
permissions: ['BAN_MEMBERS'],
requiredRoles: []
  
}