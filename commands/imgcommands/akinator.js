const akinator = require("discord.js-akinator");
module.exports = {
    name:'akinator',
    alis: ['ak','genie'],
    cooldown:10,
    type:'mis1',
    description:'yes this is akinator',
    async execute(message, client) {
        try{
        akinator(message, client);
        } catch {message.channel.send('Sorry there was an error trying to execute that command')};
    }
}    