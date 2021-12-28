module.exports = {
    name: 'ban',
    alis:['exterminate'],
    cooldown:5,
    type:'main',
    description: "This is a ban command!",
    execute(message, args, Discord){
        try{
        if(message.member.hasPermission("BAN_MEMBERS")) {
        const target = message.mentions.users.first();
        if (target.id === "792046280619851786") {return message.channel.send("Sorry, my spells don't work on them.")}
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            try {memberTarget.ban();} catch {message.reply('Sorry there was an error banning them');};
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
        } else {message.reply('You don\'t have the permissions');}
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}