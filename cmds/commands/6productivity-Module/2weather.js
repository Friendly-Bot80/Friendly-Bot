module.exports = {
    commands: ['weather'],
    minArgs: 0,
    callback: async (message, arguments, text) => {

         const weather = require("weather-js")
        weather.find({ search: arguments.join(" "), degreeType: 'C' }, function (err, result) {
            try {
              let fahrenheit = ((result[0].current.temperature) * 9 / 5 + 32)
              let reply = `⛅️ Condition: **${result[0].current.skytext}**\n🌡 Temperature: **${result[0].current.temperature}°C or ${fahrenheit}°F**\n 💨 Windspeed: **${result[0].current.winddisplay}**\n🌧 Humidity: **${result[0].current.humidity}%**\n\n🔭 Observationpoint: **${result[0].current.observationpoint} at ${result[0].current.observationtime}**\n Observations may differ sometimes.`
               message.reply(reply)            
            } catch (err) {
                return message.channel.send("Unable To Get the data of Given location")
              }
            });
        
    }
}