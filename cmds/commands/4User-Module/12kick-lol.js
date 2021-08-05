module.exports = {
    commands: ['k'],
    expectedArgs: '<userid>',
    permissionError: 'You do not have the required permission to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

const tag = `<@${member.id}>`
const target = mentions.users.first()

if (target) {
const targetMember = message.guild.members.cache.get(target.id)

message.channel.send(`${tag} Kicked ${targetMember} https://tenor.com/view/kick-cartoon-silly-wacky-gif-9316304 `)
} else {
 message.channel.send(`${tag} Please mention whom to kick. `)
}
    }, 
    permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
    requiredRoles: []
}