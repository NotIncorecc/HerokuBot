module.exports = {
    name:'joke',
    alis:['jokeoverhead'],
    cooldown:5,
    type:'img',
    description:'joke wala meme',
    async execute(message, args, canvacord, Discord) {
    try {
        let jpers = message.mentions.users.first() || message.author;
        if (jpers.id === "792046280619851786") {message.channel.send("Sorry I can't let you troll them")}
        else {
        if (!jpers) {message.channel.send("mention someone")}
        else {
        let avatar = jpers.displayAvatarURL({format: 'png'});
        let image1 = await canvacord.Canvas.jokeOverHead(avatar);
        let attachment = new Discord.MessageAttachment(image1, "joke.png");
        return message.channel.send(attachment);
        }}
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}