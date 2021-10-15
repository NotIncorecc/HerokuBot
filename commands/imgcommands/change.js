module.exports = {
    name: 'change',
    description: "this is a changemymind async meme command!",
    async execute(message, args, canvacord, Discord){
        const change = message.content;
        var parts = change.split(" ");
        parts.splice(0, 1)
        var i = 0;
        var text = "";
        for (;parts[i];) {
        text += parts[i] + " ";
        i++;
        }
        let cimg = await canvacord.Canvas.changemymind(text);
        let attachment = new Discord.MessageAttachment(cimg, "changemymindmeme.png");
        return message.channel.send(attachment);  
    }
}