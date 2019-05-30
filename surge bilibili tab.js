var obj = JSON.parse(body);

obj['data']['tab'].forEach((element, index) => {
if(!(["追番","推荐","直播","热门","影视"].includes(elemnet["name"]))) obj['data']['tab'].splice(index,1)  
});

obj['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       obj['data']['bottom'].splice(index,1)  
    }
});

delete obj['data']['top']
JSON.stringify(obj); 
