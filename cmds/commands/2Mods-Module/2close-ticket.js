module.exports = {
    commands: ['close'],
    minArgs: 1,
    maxArgs: 1,
    permissions: 'BAN_MEMBERS',

    callback: async (message) => {
        const { guild, member } = message
       
      
        const categoryId = '818764038317015080'
        const logchannel = message.guild.channels.cache.get('835536950336290846');

        var person = message.guild.member(message.mentions.users.first());
        if (!person) return message.reply("CANT FIND THE USER " + person);
        if (message.channel.parentID == categoryId) {
            message.channel.delete();

            logchannel.send(`The support channel of ${"<@" + person.user.id + ">"} has been closed by ${"<@" + message.author.id + ">"}`)
        } else {
            message.channel.send("This command only works in a support channel");
        }
    }
}