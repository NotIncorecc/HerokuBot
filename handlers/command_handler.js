const fs = require('fs');
let find_from_allcomm = function(coll_name,client) {
    const thecommandFiles = fs.readdirSync(`./commands/${coll_name}/`).filter(file => file.endsWith('.js'))
    for(const file of thecommandFiles){
        const oye = `../commands/${coll_name}/${file}`;
        const command = require(oye);
        if (command.name) {client.allcommands.set(command.name, command);}
        else{continue;}
    }
}

module.exports = (client, Discord) => {
    find_from_allcomm('maincommands',client);//} 
    find_from_allcomm('imgcommands',client); //-> this shoves all the js files in the collection using find_from_allcomm() *idk why this name...
    find_from_allcomm('music',client);       //}

}