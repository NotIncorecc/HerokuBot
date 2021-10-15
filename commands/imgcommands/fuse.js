module.exports = {
    name: 'fuse',
    description: "this is a fuse command!",
    async execute(message, args, canvacord, Discord) {
        const p1 = message.mentions.users.first();
        const p1ava = p1.displayAvatarURL({format: 'png'});
        const p2ava = message.author.displayAvatarURL({format: 'png'});
        const fsimg = await canvacord.Canvas.fuse(p1ava, p2ava);
        const attachment = new Discord.MessageAttachment(fsimg, "fuse.png");
        return message.channel.send(attachment);
    }
}