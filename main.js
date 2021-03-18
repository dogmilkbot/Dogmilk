const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs');
const config = require('./config.json')
const { prefix } = require('./config.json')
const mongo = require('./mongo')

const blacklisted = fs.readFileSync('./blacklist.txt', 'utf8').split(/[ ]+/)
//blacklistade ord

client.commands = new Discord.Collection()
 
client.on('ready', async () => {
    console.log('The client is ready!')
  
    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)
  
    const readCommands = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(client, option)
        }
      }
    }
    readCommands('commands')

    await mongo().then(mongoose =>{
        try {
            console.log('Connected to mongo')
        } finally {
            mongoose.connection.close()
        }
    })
});
 
 
 
/*client.on('message',  message =>{

        //blacklisted word check
        var foundinText=false;
        for(var i in blacklisted){
            if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundinText = true;
            
        }
        if(foundinText){
            message.delete();
            message.channel.send('Sorry, that word is blacklisted')
        }  


    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
 
    if(command === 'coinflip'){
        client.commands.get('coinflip').execute(message,args,command);
        //the user does /coinflip heads/tails 
    }

    else if(command === 'setwelcome'){
        client.commands.get('welcome').execute(message,args);
    }
 
    else if(command === 'help'){
        client.commands.get('help').execute(message,args);
        //Provides the bot commands
    }
    
    else if(command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message,args);
    } 
    //Provides server info
    
});*/
 
client.login('NzQ3MTQyMTYzNzQ1MzQxNDYx.X0KkXQ.ZuGxQ-egYuaW1aG95ohZyl0i3G0');