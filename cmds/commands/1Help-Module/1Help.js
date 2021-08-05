module.exports = {
    commands: ['help'],
    minArgs: 0,
    callback: async (message, arguments, text) => {
       
        const Discord = require('discord.js');
        
        if (arguments[0] === 'user') {
        let UserEmbed = new Discord.MessageEmbed()
        .setColor('#33adc0')
        .setTitle(`${message.author.username} here is a list of commands that can be used by **Users**:`)
        .addFields(
            { name: '!Ticket', value: 'This helps you in creating a help channel for a particular member.' },
            { name: '!Cat', value: 'Shows a random picture of cat. (For fun purpose)' },
            { name: '!Dog', value: 'Shows a random picture of dog. (For fun purpose) '},
            { name: '!hello', value: 'A random message.'},
            {name: '!git', value: 'Shows a bot code for coding.'},
            {name: '!google', value: 'Bot acts as a mini-google search engine. So, you browse whatever you want. \n *Only top 1 result will be shown*'},
            { name: '!link', value: 'gives you the invite link to my support server'},
            { name: '!add', value: 'adds 2 numbers'},
            { name: '!multiply', value: 'multiply two numbers'},
            { name: '!divide', value: 'Divides 2 numbers'},
            {name: '!subtract', value: 'Subtracts 2 numbers'},
            { name: '!recite', value: 'Gives a random Motivational Quote'},
            { name: '!schedule', value: 'Make your to-do list more attractive and more efficient. \n Tip: Members you can react with 1.2.3..... emojis if you complete that particular task'},
            { name: '!invite', value: 'Gives you the link to invite me in your server'},
            { name: '!ping', value: 'Gives you the ping value'},
            { name: '!max, !limit', value: 'For Private Vcs!! To change the limit of the private channels.'},
                ) 
                    await message.channel.send(UserEmbed)
        }

        if (arguments[0] === 'mod') {
            let ModEmbed = new Discord.MessageEmbed()
            .setColor('#13eb46')
            .setTitle(`${message.author.username} here is a list of commands that can be used by **Mod**:`)
            .addFields(
                { name: 'Close', value: 'Closes a ticket channel for a particular channel.'},
            { name: '!ban', value: 'Bans a particular user'},
            { name: '!Kick', value: 'Kicks a particular user'},
            { name: '!serverinvites', value: 'gives the list of ongoing invites in the server'},
            { name: '!warn', value: 'warns a particular member. **Reason is needed** ' },
            { name: '!lw, !listwarnings', value: 'Gives the list of warnings along with the reason for a particular member.'},
            { name: '!Purge', value: 'Purges or clears the messgae history **Only 99 at a time *Discord limit* in any channel**'},
                  )
               await message.channel.send(ModEmbed)
            }

            if (arguments[0] === 'forest') {
                let forestEmbed = new Discord.MessageEmbed()
                .setColor('#13eb46')
                .setTitle(`Here is the method how to use forest command :point_down:`)
                .addFields(
                    { name: '1. What is forest', value: `[Click here to know](https://www.forestapp.cc/ 'About Forest')` },
                    { name: '2. Setting up the channel', value: 'Before moving further we have to set up the forest log channel. ' },
                    { name: '3. Forest log channel', value: 'This will be the channel where all the forest embed and other necessary logs will go.' },
                    { name: '4. Setting up log channel', value: 'Make a new channel named **Forest-log** and make it as view for everyone and send message= false.'},
                    { name: '5. channel cmd', value: 'the channel we made in point 3 just there use the command **!setforest**'},
                    { name: '6. setforest', value: 'After using the command, bot will automatically register that channel for all your forest logs.'},
                    { name: '7. Note:', value: '*!setforest* will only be used by **server owner** or a **role which has admin permissions**. As, this is a guild permission to set up a channel.'},
                    { name: '8. Forest', value: 'Now members have a simple cmd called \n **!code "" "" ""** \n which can be used from anywhere . All those logs will go directly to the channel you set.'},
                    { name: '9. forest cmd', value: '!code *code* *time* *starting time*'},  )
                   await message.channel.send(forestEmbed)
                }
    
            if (arguments[0] === 'setup') {
             let ServerEmbed = new Discord.MessageEmbed()
             .setColor('#f3230a')
             .setTitle(`${message.author.username} here is a list of commands that are made to **setup** server:`)
             .addFields(
                 { name: '!setforest', value: 'run this command in a channel where you want all the embeds of the forest codes to go'},
                 { name: '!setprefix', value: 'If you wanna change the prefix of the bot for your particular server. **Only Administrator**'},
                 { name: '!setschedule', value: 'Use this command in a channel where you want all your members schedules for a particular day to go. \n Tip: Add 1,2,3.... emojis so members can react the embed if a particular task is complete. '},
                 { name: '!setup, !setup2, !setup3', value: 'Use these cmds for setting up Private voice channels.' },
                 )
        
             await message.channel.send(ServerEmbed)
             }
             if (arguments[0] === 'music') {
             const voiceembed = new Discord.MessageEmbed()
             .setColor('#eca273')
             .setTitle("These are the music commands")
            .addFields(
                { name: '!play', value: `Usage: !play I want it that way \n Plays the song in the voice channel!`},
                { name: '!pause', value: `pauses the music! `},
                { name: '!resume', value: 'Resumes the music!'},
                { name: '!queue', value: 'Shows the current music queue!'},
                { name: '!nowplaying', value: `Shows what is currently playing your channel!`},
                { name: '!stop !disconnect', value: `Stops the music and leaves the channel!`},
                { name: '!lyrics', value: `If there are lyrics availble it shows the lyrics!`}
            )
            await message.channel.send(voiceembed)
             }

             if (arguments[0] === 'info') {
                const { guild } = message

                const { name, region, memberCount, owner, afkTimeout } = guild
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`Server info for "${name}"`)
                .setThumbnail(icon)
                .addFields(
                  {
                    name: 'Region',
                    value: region,
                  },
                  {
                    name: 'Members',
                    value: memberCount,
                  },
                  {
                    name: 'Owner',
                    value: owner.user.tag,
                  },
                  {
                    name: 'AFK Timeout',
                    value: afkTimeout / 60,
                  }
                )
                await message.channel.send(embed)
                }
                       
             if (arguments[0] === 'server') {
                const paginationEmbed = require('discord.js-pagination');
                const { MessageEmbed } = require('discord.js');
                let emojiList = ['⏪', '⏩']
                let timeout = 600000
    
                const embed1 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**1**', value: `•1• :sparkles:Hey there! Welcome to studyium \nA server to help you boost your productivity, focus and make study buddies. Study together and stay motivated! :sparkles:\n\n We made this to help you get started. :smile: \n Here's a brief guide to the server. ` })

                const embed2 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**2**', value: `•2•\n 1. Please read the rules in <#787046135343874067> \n 2. Please get yourself some roles from <#787047771415773245>. (If you have any problem in getting the role please contact the mods using **!ticket**.) \n 3. Introduce yourself to other members in <#787046165308112977>` },
                        )
    
                const embed3 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**3**', value: `•3• 
                        Now that you are done setting up, you can have a look at all our channels.
                        
                        <#787046216612970527>: 
                           here you'll get the  latest announcements and updates done on the server. 
                        
                        <#787065330538643456>: 
                           Got an idea to make our community better? This is the place where you can let us know. 
                        
                        <#798258800569876510>: 
                        Confused? want others' opinion??.. well the poll command solves it all just type "!poll" and your friends can vote by reacting.
                        (Example: !poll white or red? 
                        :thumbsup: For white
                        :thumbsdown: For red)            
                       ` },)
    
                const embed4 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**4**', value: `•4• 
                        <#787049859228237844>: 
                        Here you can set timers for your study sessions.
                          Commands:
                            !timer →to set a timer
                           Syntax: !timer 'duration' 'timer name'
                           Note: This command won't tag you"
                           (Example: !timer 50m session 1/8)` },
                        
                       {name: `TimerBot`, value: `!remindme →to set a reminder. When the timer goes off you will be tagged.
                       Syntax: !remindme 'duration' 'reminder name'
                       (Example: !remindme 10m break ends)
                       Contact the mods if you want to remove any timer. Please do it only when necessary.
                    
                       !showtimers →Will show all the ongoing timers with the time left for them to end.
                    
                       !forest →to plant forest trees together with your study buddies. 
                       (More about this in •5•)`}                
                        )
    
                const embed5 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**5**', value: `•5•
                        <#787049814118498315>
                        Forest is an app to help you focus while planting trees. You can obtain it from the App Store or Google Play Store. It's free but to plant as a team, you need to buy the premium version of the app. In <#787305652128710696>, use the commands below to send your code to <#787049814118498315> :
                        
                        Team Penguins: !code "code" "time" "starting time" (for ex. !code ABCDEF 120 10 )
                        Team Pandas: !forest "code" "time" "starting time" (for ex. !forest XYZTKM 60 5 )
                        
                        The bot will give you a team, so you can plant with others and make common timers. 
                        When your tree is finished, you can plant another one or use the !end command to leave the team.           
                       ` },
                        )
    
                const embed6 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**6**', value: `•6•
                        <#787049929305751562> 
                        List out all your to-dos of the day here. Use the command in <#787305652128710696>. 
                        Commands:
                            !schedule
                         !schedule 1. Get up
                         2. Do your homework. 
                         3. You can do it.
                         4.  Nice you did it.
                        Note: Use this command once per day. Excess use will not be tolerated. Will be warned. Please
                         use it once per day.` },
                        )
    
                const embed7 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**7**', value: `•7•
                        <#787051844823810078> :
                        Add your deadlines here. You may use the format.
                        DD/MM/YYYY ''deadline for'' for your convenience.
                        <#787305652128710696> :
                          Commands: 
                           !focus: To enter focus mode. This will give you the focus role. You won't be able to see language-chats and the fun category.
                           !start: Use this command to join team penguin (*more about teams in •10•)
                           !end: To leave the team and focus mode both.
                           !lock: This command will lock you in focus mode and the command !end or !leave won't help you get out. To get unlocked make a ticket and ask mods.` },
                        
                    )
    
                const embed8 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**8**', value: `•8• 
                        <#787302649459507260>:
                        Enjoy chatting with other members.
                        **Note: Please use English**
                        
                        For chatting in other languages we have their respective channels.`}
                    )
   
                    const embed9 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**9**', value: `•9•
                        <#787054603727536138>:
                        Having any study related doubt? Post them here. Get help from fellow learners and help them too :blush:.
                        <#787054627942170696>:
                        Help others by offering study tips. Feel free to share your study methods. 
                        <#787049333820096542>:
                        Stay motivated and enthusiastic. Post pictures or type quotes here. You can also use the command "!recite" and @friendly Bot is there for rescue! 
                        <#800805009234853958>:
                        Hey coders! Here's a place for you to talk about coding! 
                        <#810780101930778634>: 
                        Go on and try out our google search feature just type !google(what you want to search) and you should get the top results.`}
                    )
                    const embed10 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**10**', value: `•10•
                        What are teams? 
                        As said you can use forest to plant with friends. Teams will provide you a text channel where you and your teammates can talk. To join a team you can use the !start command. It will give you team penguin role.
                        
                        Good luck with your studies. :four_leaf_clover:`}
                        )
   
   
                pages = [
                    embed1,
                    embed2,
                    embed3,
                    embed4,
                    embed5,
                    embed6,
                    embed7,
                    embed8,
                    embed9,
                    embed10
                ];
    
                paginationEmbed(message, pages, emojiList, timeout);
            }
    
             if(!arguments[0]) {
                const helpembed = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .setThumbnail('https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif')
                    .setTimestamp()
                    .addFields(
                        { name: 'For user related help', value: '!help user', inline: true },
                        { name: `For mod related help`, value: '!help mod', inline: true },
                        { name: 'For admin and setting up bot help ', value: '!help setup', inline: true },
                        { name: `For studyium server help`, value: '!help server', inline: true },
                        { name: `For forest related help`, value: '!help forest', inline: true },
                        { name: `For server info`, value: `!help info`, inline: true },
                        { name: `For Music cmds`, value: `!help music`, inline: true},
                    )
                message.channel.send(helpembed);
            }
   },
  }