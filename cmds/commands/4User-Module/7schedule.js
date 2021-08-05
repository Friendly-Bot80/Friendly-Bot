module.exports =  {
    commands: ['schedule'],
    minArgs: 1,
    expectedArgs: '<!schedule "your schedule.">',
    permissionError: 'You do not have the required permission to run this command',

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');

const { guild, author } = message

const A = '787049929305751562'
const SS = require("../../../models/4Dashboard-schema")
const UserID = author.id
const result = await SS.findOneAndUpdate(
    {
      GuildID: guild.id,
      UserID
    },
    {
      UserID,
      Schedule: text
      },
    {
      upsert: true,
      new: true,
    }
  )
  console.log(result)
let ScheduleEmbed = new Discord.MessageEmbed()
.setColor('#ca208b')
.setTitle(`${message.author.username} **Here is your today's schedule.** `)
.addFields(
    { name:  `**Good luck** ` , value: `\n${text}` },       
          )

           
          message.delete()
              const B = guild.channels.cache.get(A) 
              let schembed = await    B.send(ScheduleEmbed)
              schembed.react('🍀')
              schembed.react('💪')
              schembed.react('🔥')
         
          } 
        }