module.exports = (client) => {
    client.on('ready', async () => {




        const schedule = require('node-schedule');

        
//        const RP = require("../../models/2Log-schema")

        const GuildID = "780879327263719424"
    

        var rolesprompt = schedule.scheduleJob('*/2 * * * *', async () => {
            console.log("2m!!!!")
        })
    /**      
            const logperson = await RP.find({
                GuildID,
                 })
                for (person of logperson) {
                    const user = person.UserID
                    const monthly = person.monthly
     
                 const RM = Math.round(monthly * 10) / 10

                   const A = "858714396431613972"
                   const B = "858714748798894080"
                   const C = "858715516884615178"
                   const D = "858715718946258966"
                   const E = "858714979493347378"
                   const F = "858715937079689237"
                   const G = "858716116818067477"
                   const H = "858716124007235635"
                   const I = "858716369691344936"
                   const J = "858716375510024254"
                   const K = "858716381982097438"
                   
                  

        const guild = client.guilds.cache.get('780879327263719424');
        const Aa = guild.roles.cache.get(A);
        const Ba = guild.roles.cache.get(B);
        const Ca = guild.roles.cache.get(C);
        const Da = guild.roles.cache.get(D);
        const Ea = guild.roles.cache.get(E);
        const Fa = guild.roles.cache.get(F);
        const Ga = guild.roles.cache.get(G);
        const Ha = guild.roles.cache.get(H);
        const Ia = guild.roles.cache.get(I);
        const Ja = guild.roles.cache.get(J);
        const Ka = guild.roles.cache.get(K);

        const M = await guild.members.fetch(user);


                if (RM === "4") {
                    M.roles.add(Aa);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                    console.log("done!!" + `${M}`)
                }                
                 if (RM === "6") {
                    M.roles.add(Ba);
                    M.roles.remove(Aa);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "15") {
                    M.roles.add(Ca);
                    M.roles.remove(Ba);
                    M.roles.remove(Aa);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "25") {
                    M.roles.add(Da);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Aa);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "40") {
                    M.roles.add(Ea);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Aa);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "60") {
                    M.roles.add(Fa);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Aa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "80") {
                    M.roles.add(Ga);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Aa);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "120") {
                    M.roles.add(Ha);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Aa);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "160") {
                    M.roles.add(Ia);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Aa);
                    M.roles.remove(Ja);
                    M.roles.remove(Ka);
                 }
                 if (RM === "220") {
                    M.roles.add(Ja);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Aa);
                    M.roles.remove(Ka);
                 }
                 if (RM === "300" || "280" || "320" || "350" || "390" || "400") {
                    M.roles.add(Ka);
                    M.roles.remove(Ba);
                    M.roles.remove(Ca);
                    M.roles.remove(Da);
                    M.roles.remove(Ea);
                    M.roles.remove(Fa);
                    M.roles.remove(Ga);
                    M.roles.remove(Ha);
                    M.roles.remove(Ia);
                    M.roles.remove(Ja);
                    M.roles.remove(Aa);
                 }
}

       
        })
  */      
    })
}