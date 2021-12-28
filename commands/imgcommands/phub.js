module.exports = {
    name: 'phub',
    alis:['comment'],
    cooldown:5,
    type:'img',
    description: "the comment section",
    async execute(message, args, canvacord, Discord){
      try {
        const pers = message.mentions.users.first();
        if (pers.id === "792046280619851786") {message.channel.send("Sorry I can not make fun of them")}
        else {
        if (!pers) {message.channel.send("mention someone")}
        else {
          const persnam = pers.username;
          const pava = pers.displayAvatarURL({format: 'png'});
          const pimg = await canvacord.Canvas.phub({
            username: persnam,
            message: args.join(' '),
            image: pava
           });
          let attachment = new Discord.MessageAttachment(pimg, "phub.png");
          return message.channel.send(attachment);
         }}   
      } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}