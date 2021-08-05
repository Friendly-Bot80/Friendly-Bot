module.exports = {
    commands: ['end', 'leave'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
       if (message.member.roles.cache.has('802162782907793418')) {
           message.channel.send('You are **Locked** You cannot leave by this command. Please ping any mod or use **!ticket** to get unlocked.')
       } else {
        const focus = message.client.channels.cache.get('787049814118498315');
        focus.send(`Welcome to normal mode <@${message.author.id}>.You are now free. :partying_face:`);
        message.member.roles.add('787329191799685120');
        message.member.roles.remove('797802469190926376');
        message.member.roles.remove('797955709319774218');
        message.member.roles.remove('803985889083654191');  
        message.member.roles.remove('811553891187032084');   
    }
}
}
