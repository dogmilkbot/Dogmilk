module.exports = {
    name: 'hey',
    description: "this says hey",
    execute(message, args){
        message.channel.send('hey!');
    }

    
}