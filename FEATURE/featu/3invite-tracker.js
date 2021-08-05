module.exports = (client) => {
    const invites = {} // { guildId: { memberId: count } }
  
    const getInviteCounts = async (guild) => {
      return await new Promise((resolve) => {
        guild.fetchInvites().then((invites) => {
          const inviteCounter = {} // { memberId: count }
  
          invites.forEach((invite) => {
            const { uses, inviter } = invite
            const { username, discriminator, id } = inviter
            
  
            const name = `${username}#${discriminator}`    
             
            
            inviteCounter[name] = (inviteCounter[name] || 0) + uses + id
         console.log(`${id}`)  
        })
  
          resolve(inviteCounter)
        })
      })
    }
  
    client.guilds.cache.forEach(async (guild) => {
      invites[guild.id] = await getInviteCounts(guild)
    })
  
    client.on('guildMemberAdd', async (member) => {
        if (member.user.bot) return console.log("It was a bot!!!")
      const { guild, id } = member
      
  
     
      const invitesAfter = await getInviteCounts(guild)

  
     for (const inviter in invitesAfter) {  
          const channelId = '866620759447568395'
          const channel = guild.channels.cache.get(channelId)
          
          channel.send(
            `Please welcome <@${id}> to the Discord! Invited by @${inviter} `
          )
      }
    })
  }