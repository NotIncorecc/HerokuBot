module.exports = {
    name:'embed',
    description:'embed check ',
    cooldown:5,
    type:'main',
    alis:[],
    execute(message,args,Discord) {
    try {
    const exampleEmbed = new Discord.MessageEmbed()
	exampleEmbed.setColor('#0099ff')
	exampleEmbed.setTitle('Some title')
	exampleEmbed.addField('Inline field title', 'Some value here', true)
	exampleEmbed.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    message.channel.send(exampleEmbed);
    } catch(err) {message.channel.send('Didn\'t work'); console.log(err)};
    }
}