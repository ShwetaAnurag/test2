const {readFile , writeFile} =require('fs')

readFile('f.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return ;
    }

    console.log(data);

    writeFile('test.txt','this is my testing ','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return ;
        }
    
        console.log(data);
    })

});

