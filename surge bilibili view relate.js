var obj = JSON.parse(body); 
obj['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')){      
      obj['data']['relates'].splice(index,1)  
    }
});
delete obj['data']['cms']
JSON.stringify(obj);
