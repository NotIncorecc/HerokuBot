module.exports = {
    name: "help",
    description: "this is about the bot",
    execute(message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle("My Name is Minector")
        .setDescription(
        'I am utility/fun bot. I can make memes that even dank memer can not \n I am Still in development. Below listed are some commands \nBASIC: \n `&kill @person` \n `&purge number` \n `&kick @person` \n `&ban @person` \nFUN: \n `&joke @person` \n `&hitler @person` - worse than hitler \n `&facepalm` @person \n `&beautiful @person` - this is beautiful \n `&slap @person` \n `&rip @person` - pay your respects \n `&fuse @person` - fuses you with the person \n `&change any text here` - make a `change my mind` meme \n`&phub @person any text here` - the comment section \n`&coffin @person` - coffin dance meme'
        )
        .setColor("RANDOM")
        .setFooter("Im Kinda new to discord as I was Born last week, \n so please don't get angry on me if I mess something up.\n Have a nice day");
        message.author.send(embed);
        message.channel.send('Help yas DM\'ed :)');
    }
}