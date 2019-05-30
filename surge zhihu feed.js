var obj = JSON.parse(body); 
obj['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){      
       obj['data'].splice(index,1)  
    }
});
JSON.stringify(obj); 
