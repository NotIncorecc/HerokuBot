module.exports = {
    name: "help",
    alis:['h'],
    cooldown:5,
    type:'mis2',
    description: "This what you used now",
    execute(message,Discord,l) {
        try{
            let names= [];
            let desc = [];
            for(var c of l) {
                const n = c[1].name;
                names.push(n);
                const d = c[1].description;
                desc.push(d);
            };
            let embed = new Discord.MessageEmbed();
            embed.setTitle('Hello, My Name is Minector')
            embed.setDescription('I am utility/fun bot. I can make memes that even dank memer can not \n I am Still in development. Below listed are some of my commands')
            for (const name of names) {
                const descr = desc[names.indexOf(name)]
                embed.addField(name, descr, true) 
            }
            message.author.send(embed);
            message.channel.send('Help yas DM\'ed :)');
        }catch (err){
            message.channel.send('There was an error trying to execute it');
            console.log(err)
            return;
        }
    }
}