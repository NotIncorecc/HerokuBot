module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args, Discord){
        if(message.member.hasPermission("KICK_MEMBERS")) {
            let kickmem = message.mentions.members.first()
            if (kickmem.id === "792046280619851786") {message.channel.send("Sorry you can't kick them")}
            else {
            if(!kickmem) {message.channel.send("who do i kick??")}
            else {
              kickmem.kick().then(mem => {
                message.channel.send(`Kicked ${mem.user.username}`)})
          }}
          } else {
            message.reply("you don't have that permission ")
          }
    }
}