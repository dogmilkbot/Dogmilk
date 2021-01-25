module.exports = {
    name: 'serverinfo',
    description: "this displays serverinfo",
    execute(message, args){
        const { guild } = message
        //console.log (guild)
    
        const { name, region, memberCount } = guild
        const icon = guild.iconURL()
    
        console.log(name, region, memberCount, icon)
    
    }

    
}