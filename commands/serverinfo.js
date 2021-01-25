const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'serverinfo',
    description: "this displays serverinfo",
    execute(message, args){
        const { guild } = message
        //console.log (guild)
    
        const { name, region, memberCount } = guild
        const icon = guild.iconURL()
    
        //console.log(name, region, memberCount, icon)
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
            {
            name: 'Region',
            value: region,
        },
        {
            name: 'Members',
            value: memberCount,
        }
        )

        message.channel.send(embed)

    } 
}