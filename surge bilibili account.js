var obj = JSON.parse(body); 
obj['data']['sections'].splice(0,1)
obj['data']['sections'][0]['items'].splice(3,1)
obj['data']['sections'][0]['items'].splice(4,3)
obj['data']['sections'].splice(1,1)
JSON.stringify(obj); 
