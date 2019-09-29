let body = $response.body
body=JSON.parse(body)
if(body['data']['notice']){
delete body['data']['notice']
}
body=JSON.stringify(body)
$done({body})
