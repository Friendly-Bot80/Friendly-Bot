const Discord = require("discord.js");
const WOKCommands = require("wokcommands");
require("dotenv").config() 
//const loadCommands = require("./cmds/load-commands")
const loadfeatures = require("./FEATURE/load-features")
const mongo = require("./mongo")

const client = new Discord.Client()
loadfeatures(client)
client.queue = new Map()
client.config = {
    prefix: process.env.PREFIX,
    SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID
}
//client.on("guildMemberAdd", member => {
 // const { guild } = member
  //const guild = "780879327263719424"

// })
const guildID = "836198222594703401"
client.on('ready', async() => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features',
        testServers: [guildID],
        showWarns: false,
      }).setMongoPath(process.env.MONGO)
//  loadCommands(client)

  await mongo()
    console.log("Ready with wok commands and internal process ;)");
    client.user.setActivity(`Watching Studyium Members!!`)    
})
client.on("ready", function() {
  setInterval(function() {
    console.log('Still awake')
  }, 300000)
});
client.login(process.env.TOKEN)