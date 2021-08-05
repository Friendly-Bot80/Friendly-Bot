module.exports = {
    commands: ['lock'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //add member focus role and remove verified role
        
        const focus = message.client.channels.cache.get('797803212224200765');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}>. You are now locked in Focus. If you wanna get out of Lock ping any mod or just use **!ticket**. `);
        message.member.roles.add('802162782907793418');
        message.member.roles.remove('787329191799685120');
    }
}