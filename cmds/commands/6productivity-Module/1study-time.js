module.exports = {
    commands: ['week', 'time'],
    minArgs: 0,
    maxArgs: 1,
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first() || message.author
        const username = message.author.username
        const GuildID = "780879327263719424"
        const discord = require('discord.js');

        const userdataSchema = require('../../../models/2Log-schema')
        const userdocumentSchema = require('../../../models/2Log-schema')
        const UserID = target.id

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

                let reply = `<:yellow_:853209346997354506>**${roundeddaily}** hours today (*average: ${dailyround}*)\n <:white_:853209424353034261> **${roundedweekly}** hours this week (*average: ${weeklyround}*)\n <:white_:853209424353034261> **${roundedmonthly}** hours this month (*average: ${monthround}*)\n<:red_:853209282999615498> **${roundedalltime}** hours all-time (*average: ${allround}*)`
                let logembed = new discord.MessageEmbed()
                    .setTitle(`⏰ Your study time`)
                    .setColor('#FDF9F9')
                    .setDescription(`${reply}`)
                    .setFooter(`Study time for: ${message.author.username}`)
                    .setTimestamp()

                message.channel.send(logembed)
            }
        }

    }
}
