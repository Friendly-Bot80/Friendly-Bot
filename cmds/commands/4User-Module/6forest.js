module.exports =  {
    commands: ['code', 'forest'],
    minArgs: 3,
    maxArgs: 3,
    expectedArgs: '<code> <duration> <starttime>',
    permissionError: 'You do not have the required permission to run this command',
    cooldown: 60 * 10,  

    callback: async (message, arguments, text, client) => {

        const Discord = require('discord.js');
        
        const Dc = 'penguin'
        
        const Dd = '🐧'
  const timerchannel = message.client.channels.cache.get('787049859228237844');
        
const { guild, author } = message

const A = '787049814118498315'

const DS = require("../../../models/4Dashboard-schema")
const GuildID = guild.id
const UserID = author.id
const treelog = "1"
const result = await DS.findOneAndUpdate(
    {
      GuildID,
      UserID
    },
    {
      UserID,

      $inc: {
        Trees: treelog
      },
      
      },
    {
      upsert: true,
      new: true,
    }
  )
  console.log(result)


const { randomForest } = require('../../../json-files/random-forest.json');
let thumb = randomForest[Math.floor(Math.random() * randomForest.length)]

  
      //create an embed with the arguments provided
     let TreeEmbed = new Discord.MessageEmbed()
          .setColor('#33adc0')
          .setTitle(`${message.author.username} wants to plant a tree! :evergreen_tree:`)
          .setThumbnail(`${thumb}`)
          .setTimestamp()
          .setFooter(`Planter: ${message.author.username} `)
          .addFields(
              { name: '\u200B', value: 'Forest info:' },
              { name: `Use code: ${arguments[0]} or click this link: https://www.forestapp.cc/join-room?token=${arguments[0]}.`, value: '\u200B' },
              { name: ':stopwatch: Duration:', value: `${arguments[1]} min`, inline: true },
              { name: ':closed_lock_with_key: Starting in:', value: `${arguments[2]} min`, inline: true }, 
              { name: '\u200B', value: `**__Feature:__**\n${Dd} Join the ${Dc} team \n🔇 Go in focus` },
                    )
           const disbut = require("discord-buttons")
           let b1 = new disbut.MessageButton()
           .setStyle("url")
           .setLabel('Forest-Link')
           .setURL(`https://www.forestapp.cc/join-room?token=${arguments[0]}`)
       
           let b2 = new disbut.MessageButton()
           .setLabel(`${arguments[0]}`)
           .setStyle('green')   
           .setID('click_to_function')
           const { MessageActionRow } = require("discord-buttons")
           let buttonRow = new MessageActionRow()
           buttonRow.addComponent(b1).addComponent(b2)

          timerchannel.send(`🌲 A **${arguments[1]} min. tree** is starting in the <#787049814118498315> channel! 🌲`, buttonRow)
     
              const B = guild.channels.cache.get(A) 
             let forestembed = await  B.send(TreeEmbed)
              forestembed.react(Dd)
              forestembed.react('🔇')
                 
              client.users.cache.get("693351718263455755").send(`**Starting in: ${arguments[2]} Minutes** \n\n **Duration: ${arguments[1]} Minutes** \n\n Use link: \n https://www.forestapp.cc/join-room?token=${arguments[0]} \n\n Code: **${arguments[0]}**  \n\n **Planter: ${message.author.username}** `)
              client.users.cache.get("708601738403250226").send(`Lis New tree starting soon!! \n **Starting in: ${arguments[2]} Minutes** \n\n **Duration: ${arguments[1]} Minutes** \n\n Use link: \n https://www.forestapp.cc/join-room?token=${arguments[0]} \n\n Code: **${arguments[0]}**  \n\n **Planter: ${message.author.username}** \n\n Arya loves you so so so much lis :heart: `)
          } 

        }