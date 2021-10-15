const Canvas = require('canvas')

module.exports = {
    name:'coffin',
    description: 'this is a coffin dance meme',
    async execute(message, args, Discord) {
        let cofpers = message.mentions.users.first() || message.author; 
        if (cofpers.id === "792046280619851786") {return message.channel.send("Oops. I can't do that")
    }   else {

        const canvas = Canvas.createCanvas(500, 250);
        const context = canvas.getContext('2d');
        
        const background = await Canvas.loadImage('./images/Coffindance.jpg');//background
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        let avatar = await Canvas.loadImage(cofpers.displayAvatarURL({format: 'png'})); 
        context.drawImage(avatar, 80, 25, 100, 100);
        
        context.font = '30px Impact'
        context.fillText('Awesome!', 50, 100)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'cofmeme.png');
        return message.channel.send(attachment);
    }
    }
}