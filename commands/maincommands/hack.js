module.exports = {
    name: 'hack',
    alis:['exploit'],
    cooldown:5,
    type:'main',
    description: 'Hacks the mentioned person',
    async execute(message, args, Discord) {
        try{
        const user = message.mentions.users.first();
        if(!user) return message.channel.send("Mention Someone to hack")
        message.channel.send("**[25%]** Finding IP..").then(m => {
            setTimeout(() => {
            m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
            setTimeout(() => {
            m2.edit(`**[75%]** DONE! email: ${user.username}@icloud.com | password: XjdhgikshGdk`).then(m3 => {
            setTimeout(() => {
            m3.edit("**[100%]** Deleting System32..").then(m4 => {
            setTimeout(() => {
            m4.edit(`done hacking ${user}! all info was sent online.`)
            }, 5500);
            });
            }, 2800);
            });
            }, 4500);
            });
            }, 5000);
            });
        } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}