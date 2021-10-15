module.exports = {
    name: 'kill',
    description: "this ikills people",
    execute(message, args){
        let killres = ["choked on a banana and Died Lol", "was caught in a crossfire. RIP", "was voted out of the spaceship because they were sus"]
        let victim = message.mentions.users.first() || message.author;
        if (victim.id === "792046280619851786") {return message.channel.send("Sorry you can't kill them")};
        if (!victim) message.reply("Mention someone to kill");
        else {
        message.channel.send(`${victim} ${killres[Math.floor(Math.random() * killres.length)]} `);}
    }
}