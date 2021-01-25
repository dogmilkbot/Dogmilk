module.exports = {
    name: 'opgg',
    description: "this links to a op.gg link",
    

    execute(message, args){

        const filter = m => m.author.id === message.author.id;
        
        message.channel.send('what is the username?');
        message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected =>{
            
            const username = collected.first().content
            console.log(username)
            var link = ('https:/euw.op.gg/summoner/userName=' + username)
                console.log(link)
                    const puppeteer = require("puppeteer");
                        const run = async () =>{
    
                const browser = await puppeteer.launch({
                    
                });
                const page = await browser.newPage()
                
                await page.setViewport({
                    width: 1280,
                    height: 800
                })
    
                await page.goto(link)
                await page.screenshot({
                    path: 'opgg.png',
                    fullpage: true
                })
    
                await browser.close()
                
            message.channel.send('here is your op.gg' , {files: ['opgg.png']})
            };
            run();


        }).catch(err =>{
            console.log(err)
        })                
       
    }
       
}