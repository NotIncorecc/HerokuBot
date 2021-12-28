module.exports = {
    name: 'fpalm',
    alis:['facepalm'],
    cooldown:5,
    type:'img',
    description: "this is a facepalm async command!",
    async execute(message, args, canvacord, Discord) {
        try{
        let fpers = message.mentions.users.first() || message.author
        let avatar = fpers.displayAvatarURL({format: 'png'});
        let image2 = await canvacord.Canvas.facepalm(avatar);
        let attachment = new Discord.MessageAttachment(image2, "fpalm.png");
        return message.channel.send(attachment);
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
}
}