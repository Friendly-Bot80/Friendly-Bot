module.exports = {
    commands: ['start'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
        
        const focus = message.client.channels.cache.get('787049814118498315');
        focus.send(`Welcome in **study team** <@${message.author.id}>. To leave the team use **!end**`);
        message.member.roles.add('797955709319774218');
    }
}