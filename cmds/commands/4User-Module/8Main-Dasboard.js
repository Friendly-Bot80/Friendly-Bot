module.exports = {
    commands: ['dashboard', 'board', 'db'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text) => {
 // try {          
              const DS = require("../../../models/4Dashboard-schema")
              const { author, guild } = message
              const UserID = author.id 
              const GuildID = guild.id
              const user = author  
              const D = require("discord.js")
              const Age = require("humanize-duration")
        const accountAge = Age(Date.now() - author.createdAt, {largest: 2, round: true})
        const pfp = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
             const { randomAnime } = require('../../../json-files/random-anime.json');
        let A = randomAnime[Math.floor(Math.random() * randomAnime.length)]
        let RS = "50 Hours"
              const { randomQuotes } = require('../../../json-files/random.json');
        let Q = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
              const INFO = await DS.find({
                GuildID,
                UserID
               })
              for (DSS of INFO) {
        const S = DSS.Schedule
        const T = DSS.Trees
              const PLL = DSS.Place
            
                const weather = require("weather-js")
               weather.find({ search: PLL, degreeType: 'C' }, async function (err, result) {
              
               let fahrenheit = ((result[0].current.temperature) * 9 / 5 + 32)
               let Weathermsg = `⛅️ Condition: **${result[0].current.skytext}**\n🌡 Temperature: **${result[0].current.temperature}°C or ${fahrenheit}°F**\n 💨 Windspeed: **${result[0].current.winddisplay}**\n🌧 Humidity: **${result[0].current.humidity}%**\n\n🔭 Observationpoint: **${result[0].current.observationpoint} at ${result[0].current.observationtime}**\n Observations may differ sometimes.`
        const F = Weathermsg

              const userdataSchema = require('../../../models/2Log-schema')
             const userdocumentSchema = require('../../../models/2Log-schema')

             const logperson = await userdocumentSchema.find({
              GuildID,
              UserID
               })
              for (person of logperson) {
              const daily = person.daily
              const weekly = person.weekly
              const monthly = person.monthly
              const alltime = person.alltime
  
             const roundeddaily = Math.round(daily * 10) / 10
             const roundedweekly = Math.round(weekly * 10) / 10
             const roundedmonthly = Math.round(monthly * 10) / 10
             const roundedalltime = Math.round(alltime * 10) / 10


               const results = await userdataSchema.find({
                GuildID,
                UserID: 'anon'
               })
              for (const time of results) {
                const alldaily = time.daily
                const allweekly = time.weekly
                const allmonthly = time.monthly
                const allalltime = time.alltime

                const users = await userdocumentSchema.countDocuments({
                    GuildID: GuildID
                })

                let averagedaily = (alldaily / users)
                let dailyround = Math.round(averagedaily * 10) / 10

                let averageweekly = (allweekly / users)
                let weeklyround = Math.round(averageweekly * 10) / 10

                let averagemonthly = (allmonthly / users)
                let monthround = Math.round(averagemonthly * 10) / 10

                let averageall = (allalltime / users)
                let allround = Math.round(averageall * 10) / 10

        let TIME = `<:yellow_:853209346997354506>**${roundeddaily}** hours today (*average: ${dailyround}*)\n <:white_:853209424353034261> **${roundedweekly}** hours this week (*average: ${weeklyround}*)\n <:white_:853209424353034261> **${roundedmonthly}** hours this month (*average: ${monthround}*)\n<:red_:853209282999615498> **${roundedalltime}** hours all-time (*average: ${allround}*)`
              const moment = require("moment")
              const member = message.guild.member(author)
        const JS = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")
            
             const XPS = require("../../../models/3XP-schema")
             const INFO = await XPS.find({
                GuildID,
                UserID
               })
              for (DSS of INFO) {
        const MCC = DSS.MC
                const XPP = DSS.XP
               let Level = Math.round(XPP * 1 ) / 10000   
            
        
               const L = `*LEVEL* ➡ **${Level}** ⭐⭐⭐⭐⭐⭐ `
         
               const SRL = `1. <@&858714396431613972> | 2.<@&858714748798894080> | 3. <@&858715516884615178> | 4. <@&858715718946258966> | 5. <@&858714979493347378> | 6. <@&858715937079689237> | 7. <@&858716116818067477> | 8. <@&858716124007235635> | 9. <@&858716369691344936> | 10. <@&858716375510024254> | 11. <@&858716381982097438>  `  
               let DASH = new D.MessageEmbed()
               .setColor('#6db6c8')
               .setThumbnail(pfp)
               .setImage(A)
               .setTitle(`${message.author.username} Have a good day! `)
               .setFooter(`Dashboard by @Studyium-Bot!`)
               .addFields(
                   { name:  `Hello!! ${message.author.username}` , value: `\ub002` },
                   { name: `Your schedule` , value: `${S}`},
                   { name: `Dates`, value: `Joined Server at: **${JS}** \n\n Joined discord at: ${accountAge}`},
                   { name: `Your level:`, value: `${L}`},
                   { name: `Message Count:`, value: `${MCC} messages on this server!!`},
                   { name: `Current server study roles list: ` , value: `${SRL}`},
                   { name: `Weather:`, value: `${F}`},
                   { name: `Number of trees 🌴🌴 Planted on server:`, value: ` **${T}** `},
                   { name: `Your study time:`, value: `${TIME}`},
                   { name: `This month's Study Time challenge:`, value: ` **${RS}**`},
                   { name: `A random Quote: `, value: `${Q}`}

                         )

          message.reply(DASH)
      
              }
            }
        }
            });
            }
       }
}


/**
 * Dashboard Thing:-
 * 1. Weather {Done}
 * 2. Schedule   {Done}
 * 3. No. of trees planted in server {Done}
 * 4. Study Time   {done}
 * 5. Account Age  {done}
 * 6. Pfp {done}
 * 7. Image (anime) {done }
 * 9. Xp {done}
 * 10. Role Promotion {done} 
 * 11. Study Roles {done}
 * 12. Joined server at {Done}
 * 13. Study challenge this week {Done}
 * 8. Top study members ranks {Later}
 * 14. Warnings {Done}
 * 15. Quote {Done} 
 */