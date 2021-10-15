const Discord = require('discord.js');
const client = new Discord.Client();
const canvacord = require('canvacord')
 
const prefix = '&';
 
const fs = require('fs');

client.allcommands = new Discord.Collection();// all my commands are here
let find_from_allcomm = function(coll_name) {
    const thecommandFiles = fs.readdirSync('./commands/'+coll_name+'/').filter(file => file.endsWith('.js'))
    for(const file of thecommandFiles){
        const command = require('./commands/'+coll_name+'/'+file);
        client.allcommands.set(command.name, command);
    }
}
find_from_allcomm('maincommands');//} 
find_from_allcomm('imgcommands'); //-> this shoves all the js files in the collection using find_from_allcomm() *idk why this name...
find_from_allcomm('music');       //}

client.once('ready', () => {
    console.log('It is online!');
    client.user.setPresence({ activity: { name: `Genshin Impact`, type: 'STREAMING', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, status: "idle"});
});

client.on('message', message =>{
    let say = function(str) {
        message.channel.send(str)
    }

    if((message.content.split(" ").indexOf('bitch'||'cunt'||'fuck'||'fucking')) > -1) {say("Watch your Language!!")}//swear detector
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.allcommands.get('ping').execute(message, args);
    };
    if (command === "help") {
        client.allcommands.get('help').execute(message, args, Discord);
    };
    if(command === "whois" ){
        client.allcommands.get('whois').execute(message, args, Discord);
    };
    if (command === 'kick') {
        client.allcommands.get('kick').execute(message, args, Discord);
    };
    if(command === "purge"){
        client.allcommands.get('purge').execute(message, args);
    };
    if(command === "ban"){
        client.allcommands.get('ban').execute(message, args);
    };
    if (command === 'kill') {
        client.allcommands.get('kill').execute(message, args);
    };
    if(command === "play"){
        client.allcommands.get('play').execute(message, args);
    };
    if (command === 'leave') {
        client.allcommands.get('leave').execute(message, args);
    };
    if (command === 'akinator') {
        client.allcommands.get('akinator').execute(message, client);
    };
    if (command === 'hack') {
        client.allcommands.get('hack').execute(message, client);
    }
    if (command === 'del') {
        client.allcommands.get('del').execute(message, args);
    }
    if (command === 'send') {
        client.allcommands.get('send').execute(message, args);
    }
    if (command === 'gtn') {
        client.allcommands.get('gtn').execute(message).catch(err => {
        console.error(err);
        });
    }
});

client.on("message", async (message) => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "joke") {
        client.allcommands.get('joke').execute(message, args, canvacord, Discord);
    }
    if (command === "facepalm") {
        client.allcommands.get('fpalm').execute(message, args, canvacord, Discord);
    }
    if (command === "hitler") {
        client.allcommands.get('hitler').execute(message, args, canvacord, Discord);
    }
    if (command === "rip") {
        client.allcommands.get('rip').execute(message, args, canvacord, Discord);
    }
    if (command === "beautiful") {
        client.allcommands.get('beut').execute(message, args, canvacord, Discord);
    } 
    if (command === "change") {
        client.allcommands.get('change').execute(message, args, canvacord, Discord);
    }
    if (command === "slap") {
        client.allcommands.get('slap').execute(message, args, canvacord, Discord);
    }
    if (command === "fuse") {
        client.allcommands.get('fuse').execute(message, args, canvacord, Discord);
    }    
    if (command === "phub") {
        client.allcommands.get('phub').execute(message, args, canvacord, Discord);
    }
    if(command === "serverinfo") {
        client.allcommands.get('serverinfo').execute(message, args, Discord);
    }
    if(command === 'coffin') {
        client.allcommands.get('coffin').execute(message, args, Discord);
    }
     });

 
client.login(process.env.token)