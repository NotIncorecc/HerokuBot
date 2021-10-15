module.exports = {
    name: "whois",
    description: "tells who someone is",
    execute(message, args, Discord) {
        let user = message.mentions.users.first() || message.author;
        let member = message.mentions.members.first() || message.member;
        let e = new Discord.MessageEmbed()
        .setColor("#C724B1")
        .setTimestamp()
        .addFields({
        name: "User Joined Server At",
        value: member.joinedAt
        }, {
        name: "User Created At",
        value: user.createdAt
        }, {
        name: "User Name & Tag",
        value: user.tag
        }, {
        name: "User ID",
        value: user.id
        })
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        message.channel.send(e);
        }        
    }