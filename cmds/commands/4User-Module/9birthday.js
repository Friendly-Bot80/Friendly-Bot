module.exports =  {
    commands: ['bday'],
    minArgs: 1,
    expectedArgs: '<!bday "wishing">',
    permissionError: 'You do not have the required permission to run this command',

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');

const { guild } = message 
const A = '831910333912317952'

let BdayEmbed = new Discord.MessageEmbed()
.setColor('#ca208b')
.setTitle(`${message.author.username} sent a wishing message. :partying_face: `)
.setFooter(`Wishing sent by:  ${message.author.username} `)
.addFields(
    { name:  `**Here is your wishing message** ` , value: `${text}` },       
          )

           
          message.delete()
              const B = guild.channels.cache.get(A) 
             B.send(BdayEmbed)
         
          } 
        }