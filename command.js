const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }

  client.on('message', (message) => {
    const { content } = message

    //blacklisted word check
    var foundinText=false;
    for(var i in blacklisted){
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundinText = true;
        
    }
    if(foundinText){
        message.delete();
        message.channel.send('Sorry, that word is blacklisted')
    }  


    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`

      if (content.startsWith(`${command} `) || content === command) {
        console.log(`Running the command ${command}`)
        callback(message)
      }
    })
  })
}