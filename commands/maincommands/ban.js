module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args){
        if(message.member.hasPermission("BAN_MEMBERS")) {
            const targ = message.mentions.users.first();
            const baner = message.author;
            if (!targ) {message.reply('dude, please mention someone')}
            else {
            if (targ.id === "792046280619851786") {message.channel.send("Sorry you can't ban them")}
            else {
            if (targ.id === baner.id) {return message.channel.send("you dumb why would you ban youself??")}    
            if (targ) {const member = message.guild.member(targ);
            if (member) {
            member
            .ban({reason: 'They were bad!',}).then(() => {message.reply("Successfully banned ${user.tag}");}).catch(err => {message.reply("I was unable to ban the member");
             console.error(err);
             });
            } 
            else {message.reply("That user isn't in this guild!");}
            }
            }}
            }
    }
}