module.exports = {
    commands: ['fun'],
    minArgs: 0,
    callback: async (message, arguments, text) => {

      const { channel } = message

      const Discord = require("discord.js");
        const animals = require('random-animals-api');
        
        if (arguments[0] === 'cat') {
          animals.cat()
         .then(async(url) => {
        const bunembed = new Discord.MessageEmbed()
        .setColor("0x3050ba")
        .setTitle('Cat!!')
        .setImage(url)
        .setFooter(`By @Studyium_Bot`);
        await channel.send(bunembed)
    })
      }

      if (arguments[0] === 'dog') {
        animals.dog()
       .then(async(url) => {
      const trying = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Dog!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(trying)
  })
    }

    if (arguments[0] === 'bunny') {
        animals.bunny()
       .then(async(url) => {
      const mbed = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Bunny!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(mbed)
  })
    }
    if (arguments[0] === 'rabbit') {
      animals.bunny()
     .then(async(url) => {
    const mbed = new Discord.MessageEmbed()
    .setColor("0x3050ba")
    .setTitle('Bunny!!')
    .setImage(url)
    .setFooter(`By @Studyium_Bot`);
    await channel.send(mbed)
})
  }
    if (arguments[0] === 'duck') {
        animals.duck()
       .then(async(url) => {
      const A = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Duck!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(A)
  })
    }    
    if (arguments[0] === 'fox') {
        animals.fox()
       .then(async(url) => {
      const B = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Fox!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(B)
  })
    }
     if (arguments[0] === 'lizard') {
        animals.lizard()
       .then(async(url) => {
      const C = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Lizard!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(C)
  })
    }
    if (arguments[0] === 'shiba') {
        animals.shiba()
       .then(async(url) => {
      const D = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Shiba!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(D)
  })
    }
    if (arguments[0] === 'koala') {
        animals.koala()
       .then(async(url) => {
      const E = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('koala!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(E)
  })
    }
    if (arguments[0] === 'panda') {
        animals.panda()
       .then(async(url) => {
      const F = new Discord.MessageEmbed()
      .setColor("0x3050ba")
      .setTitle('Panda!!')
      .setImage(url)
      .setFooter(`By @Studyium_Bot`);
      await channel.send(F)
  })
    }
    if (!arguments[0]) {
        message.reply(`Hey There searching for something fun!! \n Try something like this: **!fun cat**  \n Available animals: Panda, Cat, Dog, Koala, Shiba, Lizard, fox, Duck, Bunny!!`)
    }
}
}