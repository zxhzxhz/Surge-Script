let body = $response.body; 
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
$done({body})
