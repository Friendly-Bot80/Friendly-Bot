module.exports = {
    commands: 'hello',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
     message.reply(` Hello ${message.author.username}, How are you? https://tenor.com/view/hello-hi-duck-cute-kawaii-gif-11820295 `)
    },
}