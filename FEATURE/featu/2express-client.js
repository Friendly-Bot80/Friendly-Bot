module.exports = (client) => {
    client.on('ready', async () => {
 
         const path = require("path")
         const { getCommands } = require("../../utils/1main")

        const CD = {
            guilds: client.guilds.cache.size,
            users: client.users.cache.size,
            channels: client.channels.cache.size    
        }
        const express = require("express")
        const app = express();
        const port = 4000 || 4001 ;
 
         app.set('view engine', "ejs");

        app.get("/", (req, res) => {
            res.status(200).sendFile(path.join(__dirname, "..", "..", "Website",  "1Landing-page.html"))
        })

         app.get("/commands", (req, res) => {
             const command = getCommands
            res.status(200).sendFile(path.join(__dirname, "..", "..", "Website", "index.html"))
         })

        app.get("/info", (req, res) => {
            res.status(200).send(CD)

        })

        app.listen(port)
    })
}