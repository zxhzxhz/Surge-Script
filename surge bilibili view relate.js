let body = $response.body
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')){      
      body['data']['relates'].splice(index,1)  
    }
});
delete body['data']['cms']
$done({body})
