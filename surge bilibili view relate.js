var obj = JSON.parse(body); 

obj1=obj['data']['relates'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('is_ad')){      
       obj1.splice(index,1)  
    }

   });
obj['data']['relates']=obj1

delete obj['data']['cms']

JSON.stringify(obj);
