module.exports = {
    name: 'purge',
    alis:['delmessage'],
    cooldown:5,
    type:'main',
    description: "this is a purge command!",
    execute(message, args, Discord){
        try{
        let arg = message.content.split(" ")
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
        let clear = arg[1];
        if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
        **Example:** \`_purge 50\` `)
        if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
        if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
        if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")
        message.channel.bulkDelete(clear, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to purge messages in this channel! Probably you were trying to delete messages older than 2 weeks \n or I don\'t have Manage Channels');
        });
        message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `).then(message => 
        message.delete({timeout: 10000})
        )}
        else{message.reply("You dont have perms!")}
    } catch {message.channel.send('Sorry there was an error trying to execute that command')}
    }
}