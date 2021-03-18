const mongo = require('./mongo')
const command = require('./command')
const welcomeSchema = require('./welcome-schema')

module.exports = (client) => {

    command(client, 'setwelcome', async (message) => {
        const { member, channel, content, guild } = message

    if (!member.hasPermission('ADMINISTRATOR')){
    channel.send('You do not have permission to run this command.')
    return
    }
await mongo().then(async (mongoose) => {
    try{
        await new welcomeSchema({
            _id: guild.id,
            channelID: channel.id,
            text: content
        }).save()
    } finally{
        mongoose.connection.close()
    }
})
})
}