module.exports = {
    commands: ['R3'],
    minArgs: 0,
    callback: async (message) => {
       
        const Discord = require('discord.js');
        let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Please, select your pronouns!`)
        .addFields(
            { name: 'Feel free to choose multiple', value: ' :male_sign: = For he/him \n :female_sign: = For she/her \n :slight_smile: = For they/them \n '},
             ) 



        
            let forestembed = await  message.channel.send(UserEmbed)
            forestembed.react('♂️')
            forestembed.react('♀️')
            forestembed.react('🙂')

                        }

}