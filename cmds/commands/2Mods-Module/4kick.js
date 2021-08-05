module.exports = {
    commands: ['kick'],
    expectedArgs: '<userid>',
    permissionError: 'You do not have the required permission to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        const { member, mentions } = message

const tag = `<@${member.id}>`
const target = mentions.users.first()

if (target) {
const targetMember = message.guild.members.cache.get(target.id)
targetMember.kick()
message.channel.send(`${tag} The user has been kicked.`)
} else {
 message.channel.send(`${tag} Please mention whom to kick. `)
}
    }, 
    permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
    requiredRoles: []
}