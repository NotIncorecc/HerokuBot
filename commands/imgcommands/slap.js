module.exports = {
    name: 'slap',
    description: "this is a slap command!",
    async execute(message, args, canvacord, Discord) {
        const victimnam = message.mentions.users.first();
        if (victimnam.username === message.author.username) {message.channel.send('you would you slap yourself bruh, as you wish then')};
        if (!victimnam) {return message.channel.send("mention someone to slap")}
        else {
        if (victimnam.id === '792046280619851786') {
          return message.channel.send("You can't slap them")
        } else {
          const vicava = victimnam.displayAvatarURL({format: 'png'});
          const slaper = message.author.displayAvatarURL({format: 'png'});
          const simg = await canvacord.Canvas.slap(slaper, vicava);
          const attachment = new Discord.MessageAttachment(simg, "slap.png");
          return message.channel.send(attachment);
        }
      } 
    }
}