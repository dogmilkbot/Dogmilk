const mongo = require('../mongo')
const welcomeSchema = require('../welcome-schema')
const command = require('../command')
module.exports =  {
    
    commands: 'setwelcome',
    callback: (arguments, async (message) => {
        const { member, channel, content, guild } = message
        const cache = {}
        if (!member.hasPermission('ADMINISTRATOR')) {
            channel.send('You do not have permission to run this command.')
            return
          }
      
          let text = content
      
          const split = text.split(' ')
          
          if (split.length < 2) {
            channel.send('Please provide a welcome message')
            return
          }
      
          split.shift()
          text = split.join(' ')
      
          cache[guild.id] = [channel.id, text]
      
          await mongo().then(async (mongoose) => {
            try {
              await welcomeSchema.findOneAndUpdate(
                {
                  _id: guild.id,
                },
                {
                  _id: guild.id,
                  channelId: channel.id,
                  text,
                },
                {
                  upsert: true,
                }
              )
            } finally {
              mongoose.connection.close()
            }
          })
          
        })
        
    }