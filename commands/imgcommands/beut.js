module.exports = {
    name: 'beut',
    alis:['beu'],
    cooldown:7,
    type:'img',
    description: "this is beautiful command!",
    async execute(message, args, canvacord, Discord) {
        try{
        let bpers = message.mentions.users.first() || message.author;
        if (!bpers) {message.channel.send("mention someone")}
        else {
        let avatar = bpers.displayAvatarURL({format: 'png'});
        let image4 = await canvacord.Canvas.beautiful(avatar);
        let attachment = new Discord.MessageAttachment(image4, "beut.png");
        return message.channel.send(attachment);
        }} catch(err) {message.channel.send('There was an error trying to execute that'); return;}
    }
}