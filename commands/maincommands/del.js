module.exports = {
    name: 'del',
    description: "this is a del command!",
    execute(message, args){
        message.delete({timeout: 1});
        args.shift();
        message.channel.send(args.join(' '))
    }
}