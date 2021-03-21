const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    commands: 'serverinfo',
    description: "this displays serverinfo",
    callback:(message, args) =>{
        const { guild } = message
        //console.log (guild)
    
        const { name, region, memberCount, owner } = guild
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
        },
        {
            name: 'Owner',
            value: owner,
        }

        )

        message.channel.send(embed)

    } 
}