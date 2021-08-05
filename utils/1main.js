const { readdirSync } = require("fs")

function getCommands () {
    let categories = [];
    const value = [];

    readdirSync('./cmds/commands').forEach((dir) => {
        const directories = readdirSync(`./cmds/commands/${dir}`).filter ((file) => file.endsWith('.js'))    

      

        const commands = directories.map((cmd) => {
      const file = require(`../cmds/commands/${directories}/${cmd}`);

      value.push({
         name: file.commands ? file.commands : 'no command name',
         description: file.expectedArgs ? file.expectedArgs : 'no description',
      })
        });

        let data = new Object();

        data = {
            name: dir.toUpperCase(),
            value,
        };

        categories.push(data);
        
    })
    return categories;
}

module.exports = { getCommands }