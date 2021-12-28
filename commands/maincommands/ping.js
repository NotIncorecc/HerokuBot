module.exports = {
    name: 'ping',
    alis:['pong'],
    cooldown:5,
    type:'main',
    description: "this is a ping command!",
    execute(message, args, Discord){
        message.channel.send('pong!');
    }
}

