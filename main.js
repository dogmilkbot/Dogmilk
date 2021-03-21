const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs');
const config = require('./config.json')
const { prefix } = require('./config.json')
const mongo = require('./mongo')



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
        //console.log(file, option)
      }
    }
  }
  readCommands('commands')

  client.on('message', message => {

 //blacklistade ord
 const blacklisted = fs.readFileSync('./blacklist.txt', 'utf8').split(/[ ]+/)

 //blacklisted word check
 var foundinText=false;
 for(var i in blacklisted){
 if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundinText = true;
 
}
if(foundinText){
 message.delete();
 message.channel.send('Sorry, that word is blacklisted')
}
  })

})

client.login('NzQ3MTQyMTYzNzQ1MzQxNDYx.X0KkXQ.ZuGxQ-egYuaW1aG95ohZyl0i3G0');