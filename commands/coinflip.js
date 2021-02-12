module.exports = {
    name: 'coinflip',
    description: "flips a coin",
    execute(message, args, command){

        //console.log(message);
        const chosen = message.content.slice(9);
        console.log(chosen);
        const decider = Math.floor(Math.random() * 2);
        console.log(decider);

        if (decider === 1 || chosen === "heads")
        {
            message.channel.send("The coin flipped heads. You won!");
        } 
        
        else if (decider === 1 || chosen === "tails")
        {
            message.channel.send("The coin flipped heads. You lost!");
        }

        else if (decider === 0 || chosen === "tails")
        {
            message.channel.send("The coin flipped tails. You won!");
        } 

        else if (decider === 0 || chosen === "heads")
        {
            message.channel.send("The coin flipped tals. You lost!");
        }
        
    }
}