module.exports = {
    commands: ['R2'],
    minArgs: 0,
    callback: async (message) => {
       
        const Discord = require('discord.js');
        let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Pings`)
        .addFields(
            { name: 'Select the type for which you wanna get notified!', value: ' :tanabata_tree: = For Tree Pings \n :tada: = For Event Pings \n  :nerd: = For Study Sessions\n :loudspeaker: = For Announcement Pings\n:video_game: = For Game Event Pings \n \n Note: If you want to get rid of any of the pings, contact a  <@&803962183892729885> or make !ticket .'},
             ) 
        
            let forestembed = await  message.channel.send(UserEmbed)
            forestembed.react('🎋')
            forestembed.react('🎉')
            forestembed.react('🤓')
            forestembed.react('📢')
            forestembed.react('🎮')
                        }

}