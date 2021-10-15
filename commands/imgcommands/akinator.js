const akinator = require("discord.js-akinator");
module.exports = {
    name:'akinator',
    description:'yes this is akinator',
    async execute(message, client) {
        akinator(message, client);
    }
}    