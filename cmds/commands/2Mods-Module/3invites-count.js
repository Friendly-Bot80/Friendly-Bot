module.exports = {
    commands: 'invite',
    callback: (message) => {
      const { guild } = message
  
      guild.fetchInvites().then((invites) => {
        const inviteCounter = {}
  
        invites.forEach((invite) => {
          const { uses, inviter } = invite
          const { username, discriminator } = inviter
  
          const name = `${username}#${discriminator}`
  
          inviteCounter[name] = (inviteCounter[name] || 0) + uses
        })
  
        let replyText = 'Here are the top 5 **Invites**:'
  
        const sortedInvites = Object.keys(inviteCounter).sort(
          (a, b) => inviteCounter[b] - inviteCounter[a]
        )
  
        console.log(sortedInvites)
  
        sortedInvites.length = 5
  
        for (const invite of sortedInvites) {
          const count = inviteCounter[invite]
          replyText += `\n${invite} has invited ${count} member(s)!`
        }
  
        try { message.reply(replyText)
        
        } catch(error) {
          message.reply(`Invalid invites ${error.message}`)
        }

      })
    },
  }