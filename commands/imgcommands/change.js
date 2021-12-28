module.exports = {
    name: 'change',
    alis:['changemymind'],
    cooldown:7,
    type:'img',
    description: "this is a changemymind async meme command!",
    async execute(message, args, canvacord, Discord){
        try {
        let cimg = await canvacord.Canvas.changemymind(args.join(' '));
        let attachment = new Discord.MessageAttachment(cimg, "changemymindmeme.png");
        return message.channel.send(attachment);
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}