import {createServer} from 'http';

let controllers = [];

function use(method,name, func){
    let item = {
        command: name,
        function: func,
        method:method        
    }
    controllers.push(item);
}

function router(request, response){
    let url = request.url.split('/');
    let command = url[1];
    let found=false;

    for(let item of controllers){
        if(item.command === command&&item.method===request.method){
            item.function(request, response);
            found=true;
        }
    }
    if(found==false)
    {response.write("Not FDound")}
}
function start(){
     createServer(function(request, response){
        console.log(request.method, request.url);
    
        let data = '';
        request.on("data", function(chunk){
            data += chunk;
        });
        request.on("end", function(){
            try{
                data = JSON.parse(data);
            }
            catch(e){
                
            }
            request.data = data;
            router(request, response);
        });
    }).listen(80);
}

use('GET','sum', function(request, response){
    let url = request.url.split('/');
    let inputs = url.slice(2);
        response.write((parseInt(inputs[0]) + parseInt(inputs[1])).toString());
    response.end();
});
use('POST','sum', function(request, response){
    let url = request.url.split('/');
    let inputs = url.slice(2);
        response.write((parseInt(request.data.input1) + parseInt(request.data.input2)).toString());
              response.end();
          
});
use('log', function(request, response){

    console.log('post data is:', request.data);
         response.end();
  

    response.end();
});


 export {
  start,
   use
 }