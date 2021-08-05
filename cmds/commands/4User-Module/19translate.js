const { MessageEmbed } = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api');

module.exports = {
    commands: ['translate'],
    minArgs: 2,

    callback: async (message, arguments, text) => {
        try {
            if (arguments.length < 2) {
                return message.reply("Command Usage: `!translate <Language> <Text>`")
            }

            const result = await translate(arguments.slice(1).join(' '), { to: arguments[0] });

            
            message.channel.send(`**Original text**\n${arguments.slice(1).join(' ')}\n\n**Translation**\n${result.text}`);
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }
}