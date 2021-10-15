module.exports = {
    name: 'fpalm',
    description: "this is a facepalm async command!",
    async execute(message, args, canvacord, Discord) {
        let fpers = message.mentions.users.first() || message.author
        let avatar = fpers.displayAvatarURL({format: 'png'});
        let image2 = await canvacord.Canvas.facepalm(avatar);
        let attachment = new Discord.MessageAttachment(image2, "fpalm.png");
        return message.channel.send(attachment);
}
}