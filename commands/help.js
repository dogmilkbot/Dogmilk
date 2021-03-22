const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports =  {
    commands: 'help',
    description: "this displays the commands in an embed",
    callback: (message, args) => {
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
            name: 'coinflip',
            value: "!coinflip heads or !coinflip tails",
        },
        {
            name: 'setwelcome',
            value: "!setwelcome <message> (admin command)"
        },
        )
        
        message.channel.send(embed)

    } 
}