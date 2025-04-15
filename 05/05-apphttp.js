import {use,start} from "./05-httpFrameworkC.js"
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

