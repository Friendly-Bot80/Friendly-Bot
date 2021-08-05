module.exports = {
         commands: ['setup'],
         minArgs: 0,
         callback: async (message, arguments, text) => {
              const LN = arguments.join(" ")
              const { guild, author } = message
              const UserID = author.id
              const GuildID = guild.id
              const DS = require("../../../models/4Dashboard-schema")
              const result = await DS.findOneAndUpdate(
                 {
                   GuildID,
                   UserID
                 },
                 {
                   UserID,
                   Place: LN
                   },
                 {
                   upsert: true,
                   new: true,
                 }
               )
               console.log(result)
               const economy = require("../../../features/Dynamic/2Study-log-counter")
               let timeLog = "0.1"
               const newLog = await economy.addLog(UserID, timeLog) 
       }
    }