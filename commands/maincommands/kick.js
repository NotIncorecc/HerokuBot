module.exports = {
    name: 'kick',
    alis:['kickintheass'],
    cooldown:5,
    type:'main',
    description: "This is a kick command!",
    execute(message, args, Discord){
      try{
      if (message.member.permissions.has('KICK_MEMBERS')) {
      const target = message.mentions.users.first();
      if (target.id === "792046280619851786") {return message.channel.send("Sorry, my spells don't work on them.")}
      if(target){
          const memberTarget = message.guild.members.cache.get(target.id);
          try {memberTarget.kick();} catch {message.reply('Sorry there was an error kicking them');};
          message.channel.send("User has been kicked");
      } else {message.channel.send(`You coudn't kick that member!`);}
    } else {message.reply('You don\'t have the permissions');}
  } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}