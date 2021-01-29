const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "this displays the commands in an embed",
    execute(message, args){
        const { guild } = message
        //console.log (guild)
    
        const { name, region, memberCount } = guild
        const icon = guild.iconURL()
    
        //console.log(name, region, memberCount, icon)
    
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
        }
        )

        message.channel.send(embed)

    } 
}