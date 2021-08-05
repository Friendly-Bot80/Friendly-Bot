module.exports = {
    commands: ['R1'],
    minArgs: 0,
    callback: async (message) => {
       
        const Discord = require('discord.js');
        let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`Education Level`)
        .addFields(
            { name: 'Please tell us something about your education.', value: ':school: = High School \n 👨‍⚕️ = Medical \n:man_technologist: = Engineering \n:judge: = Law  \n :person_red_hair: = Commerce \n:scientist: = Science studies \n :office_worker: = Social studies \n :woman_artist: = Arts \n :person_running: = Sports \n :astronaut: =Language and literature \n :blond_haired_person: = Others \n :student: = Post Graduate \n :man_office_worker: = Working' }
        )
        
            let forestembed = await  message.channel.send(UserEmbed)
            forestembed.react('🏫')
            forestembed.react('👨‍⚕️')
            forestembed.react('👨‍💻')
            forestembed.react('🧑‍⚖️')
            forestembed.react('🧑‍🦰')
            forestembed.react('🧑‍🔬')
            forestembed.react('🧑‍💼')
            forestembed.react('👩‍🎨')
            forestembed.react('🏃')
            forestembed.react('🧑‍🚀')
            forestembed.react('👱')
            forestembed.react('🧑‍🎓')
            forestembed.react('👨‍💼')
                       }

}