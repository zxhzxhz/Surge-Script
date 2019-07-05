let body = $response.body
body=JSON.parse(body)
body['has_gold_subscription']=true
body['has_subscribed_to_premium']=true
body['over_18']=true
body['is_gold']=true
body['third_party_data_personalized_ads']=false
body['third_party_site_data_personalized_ads']=true
body['activity_relevant_ads']=false
body['hide_ads']=true

body=JSON.stringify(body)
$done({body})
