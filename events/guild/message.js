require('dotenv').config();
const canvacord = require('canvacord');
const find_alis = function(palis, dmap) {
    for(var c of dmap) {
        const lalis = c[1].alis;
        if (lalis.includes(palis)) {break;}; 
    }
    return c[1]
}
const cooldowns = new Map();
module.exports = (client ,Discord, message) => {
    const prefix = process.env.prefix;

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const l = client.allcommands
    const command = client.allcommands.get(cmd) || find_alis(cmd,l);//alis is literally the aliases

    //If cooldowns map doesn't have a command.name key then create one.
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
        }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    if (!command) return;
    try{
    if(command.type === 'main') {command.execute(message, args, Discord)}
    else if(command.type === 'img') {command.execute(message,args, canvacord, Discord)}
    else if(command.type === 'mus') {command.execute(message,args, Discord, cmd)}
    else if(command.name === 'akinator') {command.execute(message,client)}
    else if(command.name === 'help') {command.execute(message,Discord,l);}
    } catch(err) {message.channel.send('Sorry there was an error trying to execute that command'); console.log(err);}
}