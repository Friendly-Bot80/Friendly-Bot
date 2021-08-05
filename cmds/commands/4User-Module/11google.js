const Discord = require('discord.js');
const { search } = require('node-superfetch');
const request = require("node-superfetch")
const sendError = require("../../../util/error");
require("dotenv").config() 

module.exports = {
    commands: ['google'],
    minArgs: 1,
    callback: async (message, arguments, text) => {
      let googlekey = (process.env.GOOGLE);
      let cxs = "00a9344fe108b9e80"; //search engine ID
      let query = arguments.join(" ");
      let result;
try {
      if (!query) return message.channel.send("please enter the query!");

      href = await search(query);

      if (!href) return message.channel.send("Unknown search!!");

      const googleembed = new Discord.MessageEmbed()
      .setTitle(href.title)
      .setDescription(href.snippet)
      .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
      .setURL(href.link)
      .setColor(0x7289DA)
      .setFooter("Powered by Google. From Friendly Bot!")
      
  
message.channel.send(googleembed); 

      async function search(query) {
          const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
              key: googlekey, cx: cxs, safe: "off", q: query
          });

          if (!body.items) return null;
          return body.items[0];

      }
    } catch (error) {
        return sendError(`Something went wrong.: ${error}`, message.channel);
      }	        
    }
    
}
