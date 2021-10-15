module.exports = {
    name:'rip',
    description:'rip wala meme',
    async execute(message, args, canvacord, Discord) {
        let rpers = message.mentions.users.first() || message.author;
        if (rpers.id === "792046280619851786") {message.channel.send("I think you\'re mistaken, they\'re Immortal")}
        else {
        if (!rpers) {message.channel.send("mention someone that died")}
        else {
        let avatar = rpers.displayAvatarURL({format: 'png'});
        let imager = await canvacord.Canvas.rip(avatar);
        let attachment = new Discord.MessageAttachment(imager, "rip.png");
        return message.channel.send(attachment);
        }}
    }
}