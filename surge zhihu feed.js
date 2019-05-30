var obj = JSON.parse(body); 
obj['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){      
       obj1.splice(index,1)  
    }
});
JSON.stringify(obj); 
