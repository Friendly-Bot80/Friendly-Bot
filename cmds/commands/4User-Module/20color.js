module.exports = {
    commands: ['color', 'colour'],
    minArgs: 0,
    callback: async (message, arguments, text) => {
       
        const A = '838724639445745694'
        const B = '841078282240917515'
        const C = '841076107176444005'
        const D = '830126657532330086'
        const E = '828683232928596040'
        const F = '830131928903974914'
        const G = '842000025398804490'
        const H = '842000276273496074'
        const I = '842000566250897449'
        const J = '842000838590726195'

        const Aa = '💛'
        const Ba = '💫'
        const Ca = '💜'
        const Da = '🤎'
        const Ea = '🧡'
        const Fa = '🖤'
        const Ga = '❤️'
        const Ha = '💚'
        const Ia = '💙'
        const Ja = '🌈'

        const Ab = "Light-Yellow" 
        const Bb = 'Blue'
        const Cb = 'Lilac'
        const Db = 'Desert-Sand'
        const Eb = 'Orange'
        const Fb = 'Black'
        const Gb = 'red' 
        const Hb = 'Light-Green' 
        const Ib = 'Sky-Blue'
        const Jb = 'Pink' 


        const Discord = require('discord.js');
        
        if (arguments[0] === 'list') {
            let UserEmbed = new Discord.MessageEmbed()
            .setColor('#33adc0')
            .setTitle(`🎨--Color Palatte--`)
            .addFields(
                { name: 'Choose your desired color', value: `${Ab} = 1  \n **Blue** = 2 \n **Lilac** = 3 \n **Desert-Sand** = 4 \n **Orange** = 5 \n **Black** = 6 \n **Red** = 7 \n **Light-Green** = 8 \n **Sky-Blue** = 9 \n **Pink** = 10`},
                 )         
           
            await message.reply(UserEmbed)
        }  
        if (arguments[0] === '1') {
            message.member.roles.add(A)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Ab} = ${Aa}`)
        }
        if (arguments[0] === '2') {
            message.member.roles.add(B)
            message.member.roles.remove(A)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Bb} = ${Ba}`)
        }
        if (arguments[0] === '3') {
            message.member.roles.add(C)
            message.member.roles.remove(B)
            message.member.roles.remove(A)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Cb} = ${Ca}`)
        }
        if (arguments[0] === '4') {
            message.member.roles.add(D)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(A)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Db} = ${Da}`)
        }
        if (arguments[0] === '5') {
            message.member.roles.add(E)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(A)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Eb} = ${Ea}`)
        }
        if (arguments[0] === '6') {
            message.member.roles.add(F)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(A)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Fb} = ${Fa}`)
        }
        if (arguments[0] === '7') {
            message.member.roles.add(G)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(A)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Gb} = ${Ga}`)
        }
        if (arguments[0] === '8') {
            message.member.roles.add(H)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(A)
            message.member.roles.remove(I)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Hb} = ${Ha}`)
        }
        if (arguments[0] === '9') {
            message.member.roles.add(I)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(A)
            message.member.roles.remove(J)
            await message.reply(`Your color has changed to ${Ib} = ${Ia}`)
        }
        if (arguments[0] === '10') {
            message.member.roles.add(J)
            message.member.roles.remove(B)
            message.member.roles.remove(C)
            message.member.roles.remove(D)
            message.member.roles.remove(E)
            message.member.roles.remove(F)
            message.member.roles.remove(G)
            message.member.roles.remove(H)
            message.member.roles.remove(I)
            message.member.roles.remove(A)
            await message.reply(`Your color has changed to ${Jb} = ${Ja}`)
        }

             if (arguments[0] === 'history') {
                const paginationEmbed = require('discord.js-pagination');
                let emojiList = ['⏪', '⏩']
                let timeout = 600000
    
                const embed1 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**1**', value: `${Ab} Color: \nYellow has been one of the major colour trends of 2017—Emma Stone’s sunshine yellow dress in the Oscar-winning La La Land led to yellow dresses popping up everywhere, from high street shops to the red carpet. While the popularity of the colour has somewhat been revived in recent times, the hue itself isn’t new. Alongside red, yellow is one of the oldest colours in art history.`},
                        { name: '\ub002', value : `Yellow is present in some of the oldest paintings dating back to ancient Egypt and ancient Rome—it can even be found as far back as prehistoric times featured in cave paintings. The yellow sun has been worshipped by countless religions with numerous sun gods wearing yellow as representations of it. Because of its associations with sunlight, yellow is often seen as a warm colour, accounting for the connotations with happiness and optimism.` })

                const embed2 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**2**', value: `${Bb} Color: \nBlue is one of the three primary colours of pigments in painting and traditional colour theory, as well as in the RGB colour model. It lies between violet and green on the spectrum of visible light. The eye perceives blue when observing light with a dominant wavelength between approximately 450 and 495 nanometres. Most blues contain a slight mixture of other colours; azure contains some green, while ultramarine contains some violet. The clear daytime sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall effect explains blue eyes. Distant objects appear more blue because of another optical effect called aerial perspective.`},
                        { name: '\ub002', value: `Blue has been an important colour in art and decoration since ancient times. The semi-precious stone lapis lazuli was used in ancient Egypt for jewellery and ornament and later, in the Renaissance, to make the pigment ultramarine, the most expensive of all pigments. In the eighth century Chinese artists used cobalt blue to colour fine blue and white porcelain. In the Middle Ages, European artists used it in the windows of cathedrals. Europeans wore clothing coloured with the vegetable dye woad until it was replaced by the finer indigo from America. In the 19th century, synthetic blue dyes and pigments gradually replaced organic dyes and mineral pigments. Dark blue became a common colour for military uniforms and later, in the late 20th century, for business suits. Because blue has commonly been associated with harmony, it was chosen as the colour of the flags of the United Nations and the European Union.[2]`},
                        {name: '\ub002', value:`Surveys in the US and Europe show that blue is the colour most commonly associated with harmony, faithfulness, confidence, distance, infinity, the imagination, cold, and occasionally with sadness.[3] In US and European public opinion polls it is the most popular colour, chosen by almost half of both men and women as their favourite colour.[4] The same surveys also showed that blue was the colour most associated with the masculine, just ahead of black, and was also the colour most associated with intelligence, knowledge, calm and concentration.[3]` })
    
                const embed3 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**3**', value: `${Cb} Color: \n The word “Lilac” makes you feel the aromatic and sweetened odor of the flowers that blossoms for more than two weeks in May. The sweet and pungent scent is the reason behind this color name because Lilac color took its name from the flower, a flower that is light purple in the shade along with the slight rose-tinted hue on the tips.`},
                        { name: '\ub002', value: `Lilac is known as soft, and a pale shade of purple, and this shade is obtained by mixing blue and red color. If you add a bit of white shade in blue and red color, it will give you a lighter shade of lilac color that is also known as pastel hue shade of lilac.` })
    
                const embed4 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**4**', value: `${Db} Color: \n Brown is a composite color. In the CMYK color model used in printing or painting, brown is made by combining red, black, and yellow,[1][2] or red, yellow, and blue.[3] In the RGB color model used to project colors onto television screens and computer monitors, brown is made by combining red and green, in specific proportions. In painting, brown is generally made by adding black to orange.`},
                        { name: '\ub002', value: `The brown color is seen widely in nature, wood, soil, human hair color, eye color and skin pigmentation. Brown is the color of dark wood or rich soil.[4] According to public opinion surveys in Europe and the United States, brown is the least favorite color of the public; it is often associated with plainness, the rustic, feces, and poverty.[5] More positive associations include baking, warmth, wildlife and the autumn. ` })
    
                const embed5 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**5**', value: `${Eb} Color: \n When you think of orange, what springs to mind? For many eastern cultures, it is perceived as a sacred hue. In the western world, it is a polarising colour—you either love it or you hate it.

                        Like red, orange is bold and striking. For some, it makes a statement; others think it garish. From ancient Egyptian art to 12th century icons, paintings with orange pigment have permeated world culture for hundreds of years.`},
                        
               { name: '\ub002', value: `Arts & Collections delves into the colour’s history to understand its evolution in artistic representation.  `},

                        )
    
                const embed6 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**6**', value: `${Fb} Color: \n Black is a color which results from the absence or complete absorption of visible light. It is an achromatic color, without hue, like white and gray.[1] It is often used symbolically or figuratively to represent darkness.[2] Black and white have often been used to describe opposites such as good and evil, the Dark Ages versus Age of Enlightenment, and night versus day. Since the Middle Ages, black has been the symbolic color of solemnity and authority, and for this reason is still commonly worn by judges and magistrates.`},

                        {name: '\ub002', value: `Black was one of the first colors used by artists in neolithic cave paintings.[3] It was used in ancient Egypt and Greece as the color of the underworld.[4] In the Roman Empire, it became the color of mourning, and over the centuries it was frequently associated with death, evil, witches and magic.[5] In the 14th century, it was worn by royalty, clergy, judges and government officials in much of Europe. It became the color worn by English romantic poets, businessmen and statesmen in the 19th century, and a high fashion color in the 20th century.[2] According to surveys in Europe and North America, it is the color most commonly associated with mourning, the end, secrets, magic, force, violence, evil, and elegance.`},
                        { name: '\ub002', value: `Black ink is the most common color used for printing books, newspapers and documents, as it provides the highest contrast with white paper and thus the easiest color to read. Similarly, black text on a white screen is the most common format used on computer screens.[7] As of September 2019, the darkest material is made by MIT engineers from vertically aligned carbon nanotubes.[8]` },
                        )
    
                const embed7 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**7**', value: `${Gb} Color: \n Red is not only one of the primary colors, it's also one of the first colors used by artists—dating back to prehistory. Ranging from orange tinges to deep wine hues, throughout history the color red has held special significance for cultures around the world. The warm color is most commonly associated with love in Western culture and remains an attractive, vibrant color that immediately brings attention to itself.` }
                        )
    
                const embed8 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**8**', value: `${Hb} Color: \n Every color has a story and the color green is no different. Today, it's most commonly associated with nature. Chlorophyll is the photosynthetic pigment found in plants that allows them to have their fresh, calming hue. This rich color has been all around us as a constant since the beginning of time (as far as we know), so it may seem strange to think of it as something with a past, but the verdant hue has a rich history filled with challenges. In fact, the color green didn’t come so naturally to those who tried to manufacture it as a pigment for paintings or decorating objects. At first, the hue was notorious for being a hard color to come by, and its pigments have been some of the most poisonous in history.`}
                    )
   
                    const embed9 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**9**', value: `${Ib} Color: \n Sky blue is a colour that resembles the colour of the unclouded sky at around noon (azure) reflecting off a metallic surface. The entry for "sky-blue" in Murray's New English Dictionary (1919) reports a first sighting of the term in the article on "silver" in Ephraim Chambers's Cyclopaedia of 1728. However, many writers had used the term "sky blue" to name a colour before Chambers. For example, we find "sky blue" in A Collection of Voyages and Travels (London: Awnsham and John Churchill, 1704), vol. 2, p. 322, where John Nieuhoff describes certain flowers: "they are of a lovely sky blue colour, and yellow in the middle". The sense of this colour may have been first used in 1585 in a book by Nicolas de Nicolay where he stated "the tulbant of the merchant must be skie coloured".`}
                    )
                    const embed10 = new Discord.MessageEmbed()
                    .setColor('#FDF9F9')
                    .addFields(
                        { name: '**10**', value: `${Jb} Color: \n Pink is a color that is a pale tint of red and is named after a flower of the same name.[2][3] It was first used as a color name in the late 17th century.[4] According to surveys in Europe and the United States, pink is the color most often associated with charm, politeness, sensitivity, tenderness, sweetness, childhood, femininity and romance. A combination of pink and white is associated with chastity and innocence, whereas a combination of pink and black links to eroticism and seduction.`}
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
                        { name: '!color list', value: 'Displays the list of colors!', inline: true },
                        { name: `!color 1`, value: 'Will change your color to the pre-registered color according to number!', inline: true },
                        { name: '!color history', value: 'Shows the history of various colors', inline: true },
                        )
                message.channel.send(helpembed);
            }
   },
  }