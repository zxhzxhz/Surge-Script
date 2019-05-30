var obj = JSON.parse(body); 
obj['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       obj['data'].splice(index,1)  
    }
});
JSON.stringify(obj); 
