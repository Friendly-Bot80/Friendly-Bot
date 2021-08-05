module.exports = {
    commands: ['focus'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
        
        const focus = message.client.channels.cache.get('797803212224200765');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}>. Remember not to talk here. :eyes: `);
        message.member.roles.add('797802469190926376');
        message.member.roles.remove('787329191799685120');
    }
}