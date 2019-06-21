let body = $response.body
delete body['ad_info']
$done({body})
