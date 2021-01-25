module.exports = {
    name: 'meme',
    description: "random meme",
    execute(message, args){

        var fileammount;
        const fs = require('fs');
        const dir = 'images';

        fs.readdir(dir, (err, files) => { 
        fileammount = (files.length);
        fileammoung = fileammount.toString();
        console.log(fileammount);
        
        var randomnumber=Math.floor(Math.random()*fileammount + 1)
        console.log(randomnumber);

        $image = glob("/images{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}", GLOB_BRACE);

        message.channel.send({files: [$image]})
        
        // shuffle($all_images); // uncomment this line to randomize the images

        /*$images = array();

        foreach ($all_images => $image); {
        if ($index <= 2) break; // Only print 15 images
        $image_name = basename($image);
}

        var filepath = randomnumber.split('.').pop();
        console.log(filepath);
        message.channel.send({files: ['images/'+ image + '.' + filepath]})*/


        });
        	
        
    }

    
}