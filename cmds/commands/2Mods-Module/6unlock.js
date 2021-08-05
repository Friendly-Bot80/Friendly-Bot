module.exports = {
    commands: ['unlock'],
    expectedArgs: '<user/Id>',
    permissionError: 'You do not have the required permission to run this command.',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
      const { member, mentions } = message

      const tag = `<@${member.id}>`
      const target = mentions.users.first()

      if (target) {
          const targetmember = message.guild.members.cache.get(target.id)
          targetmember.roles.add('787329191799685120');
          targetmember.roles.remove('797802469190926376');
          targetmember.roles.remove('797955709319774218');
          targetmember.roles.remove('802162782907793418');

          const ChannelId = message.client.channels.cache.get('787049814118498315')

          ChannelId.send(`${target} has been **unlocked** by ${tag}. You are free now.`)
          
      } else {
          message.channel.send(`${tag} sorry user not found. Or you mentioned a wrong person. Please check it again and try. `)

      }
    },
    permissions: ['BAN_MEMBERS'],
    requiredRole: ['Mod']
}