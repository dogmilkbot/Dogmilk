const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('DogMilk is online!')
});

client.on('message',  message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        client.commands.get('hey').execute(message,args);
        
    }
    
    else if(command === 'op.gg'){
        client.commands.get('opgg').execute(message,args);
    }
    else if(command === 'cock'){
        client.commands.get('cock').execute(message,args);
    }
    else if(command === 'meme'){
        client.commands.get('meme').execute(message,args);
    }
    
});

client.login('NzQ3MTQyMTYzNzQ1MzQxNDYx.X0KkXQ.ZuGxQ-egYuaW1aG95ohZyl0i3G0');