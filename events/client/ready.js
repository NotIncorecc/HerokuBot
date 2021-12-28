module.exports = (client, Discord) =>{
    console.log('Bot is online');
    client.user.setPresence({ activity: { name: `Genshin Impact`, type: 'STREAMING', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, status: "idle"});
}