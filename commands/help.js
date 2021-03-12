const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "this displays the commands in an embed",
    execute(message, args){
        const { guild } = message
    
        const { name, region, memberCount } = guild
        const icon = guild.iconURL()
    
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`Available commands`)
        .setThumbnail(icon)
        .addFields(
            {
            name: 'help',
            value: "Displays the available commands",
        },
        {
            name: 'serverinfo',
            value: "Displays serverinfo",
        },
        {
            name: 'cock',
            value: "8====D",
        },
        {
            name: 'coinflip',
            value: "!coinflip heads or !coinflip tails",
        },
        )
        
        message.channel.send(embed)

    } 
}