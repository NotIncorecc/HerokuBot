module.exports = {
    name:'hitler',
    alis:['worsethanhitler','hit'],
    cooldown:7,
    type:'img',
    description:'hitler wala meme',
    async execute(message, args, canvacord, Discord) {
        try {
        let hpers = message.mentions.users.first() || message.author;
        if (hpers.id === "792046280619851786") {message.channel.send("Sorry I can't let you troll them")}
        else {
        if (!hpers) {message.channel.send("mention someone")}
        else {
        let avatar = hpers.displayAvatarURL({format: 'png'});
        let image3 = await canvacord.Canvas.hitler(avatar);
        let attachment = new Discord.MessageAttachment(image3, "hitler.png");
        return message.channel.send(attachment);
        }}
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }               
}