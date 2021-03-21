module.exports = {

    commands: 'coinflip',
    callback:(message, args) => {

        const chosen = message.content.slice(9);
        console.log(chosen);
        const decider = Math.floor(Math.random() * 2);
        console.log(decider);

        //heads = 1
        //tails = 0

        if (decider == 1 && chosen === " heads")
        {
            message.channel.send("The coin flipped heads. You won!");
            console.log("The coin flipped heads. You won!")
        } 
        
        if (decider == 1 && chosen === " tails")
        {
            message.channel.send("The coin flipped heads. You lost!");
            console.log("The coin flipped heads. You lost!")
        }

        if (decider == 0 && chosen === " tails")
        {
            message.channel.send("The coin flipped tails. You won!");
            console.log("The coin flipped tails. You won!")
        } 

        if (decider == 0 && chosen === " heads")
        {
            message.channel.send("The coin flipped tals. You lost!");
            console.log("The coin flipped tails. You lost!")
        }
        
    }
}