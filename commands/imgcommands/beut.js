module.exports = {
    name: 'beut',
    description: "this is beautiful command!",
    async execute(message, args, canvacord, Discord) {
        let bpers = message.mentions.users.first() || message.author;
        if (!bpers) {message.channel.send("mention someone")}
        else {
        let avatar = bpers.displayAvatarURL({format: 'png'});
        let image4 = await canvacord.Canvas.beautiful(avatar);
        let attachment = new Discord.MessageAttachment(image4, "beut.png");
        return message.channel.send(attachment);
        }
    }
}