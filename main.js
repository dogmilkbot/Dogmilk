const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs');
const config = require('./config.json')
const { prefix } = require('./config.json')
const mongo = require('./mongo')
const welcomeSchema = require('./welcome-schema')

client.on('ready', async () => {
  console.log('The client is ready!')
  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })


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
  

  //welcome message
  
  client.on('guildMemberAdd', (member) => {
    onJoin(member)
    return
  })

  const cache = {}
  const onJoin = async (member) => {
    const { guild } = member

    let data = cache[guild.id]

    //if (!data) {
      console.log('FETCHING FROM DATABASE')

      await mongo().then(async (mongoose) => {
        try {
          const result = await welcomeSchema.findOne({ _id: guild.id })

          cache[guild.id] = data = [result.channelId, result.text]
        } finally {
          mongoose.connection.close()
        }
      })
    //}

    const channelId = data[0]
    const text = data[1]

    const channel = guild.channels.cache.get(channelId)
    channel.send(text/*.replace(/<@>/g, `<@${member.id}>`)*/)
  }
  
//kollar om meddelandet har blacklistade ord i sig
  client.on('message', message => {

 //blacklistade ord
 const blacklisted = fs.readFileSync('./blacklist.txt', 'utf8').split(/[ ]+/)

 //blacklisted word check
 var foundinText=false;
 for(var i in blacklisted){
 if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundinText = true;
 
}
//tar bort meddelandet om det har blacklistade ord
if(foundinText){
 message.delete();
 message.channel.send('Sorry, that word is blacklisted')
}
  })

})

client.login('NzQ3MTQyMTYzNzQ1MzQxNDYx.X0KkXQ.ZuGxQ-egYuaW1aG95ohZyl0i3G0');