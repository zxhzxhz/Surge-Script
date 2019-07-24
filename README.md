


```
[Rule]

RULE-SET,https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/ad.list,REJECT


//Zhihu
DOMAIN,mqtt.zhihu.com,REJECT
DOMAIN-SUFFIX,xdrig.com,REJECT
URL-REGEX,https://api.zhihu.com/(fringe|zst|real_time|ad-style-service|ab|banners|topstory/hot-lists|market/popover|mqtt),REJECT
URL-REGEX,https://api.zhihu.com.*(launch|recommendations),REJECT
URL-REGEX,https://api.zhihu.com/search/(top|tabs|preset),REJECT
URL-REGEX,https://api.zhihu.com/answers/.*/comments/featured-comment-ad,REJECT
USER-AGENT,AVOS*,REJECT-TINYGIF
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,link.zhihu.com))), (NOT,((DOMAIN,lens.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT


//BiliBili
DOMAIN,dataflow.biliapi.com,REJECT-TINYGIF
DOMAIN,data.bilibili.com,REJECT-TINYGIF
URL-REGEX,https://app.bilibili.com/x/v2/search/(defaultword|hot|recommend|resource),REJECT
URL-REGEX,https://app.bilibili.com/x/v2/rank.*rid=(168|5),REJECT
URL-REGEX,https://api.bilibili.com/pgc/season/rank/cn,REJECT
AND,((USER-AGENT,bili*), (NOT,((DOMAIN-SUFFIX,bilibili.com))), (NOT,((DOMAIN-SUFFIX,hdslb.com)))),REJECT


//Weibo International
USER-AGENT,Weibo%20intl*,REJECT
URL-REGEX,http://weibointl.api.weibo.com/portal.php\?a=get_coopen_ads,REJECT


[MITM]
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com

[Script]
http-response https://api.zhihu.com/moments requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js,script-update-interval=-1
http-response https://api.zhihu.com/topstory/recommend requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js,script-update-interval=-1
http-response https://api.zhihu.com/.*/questions requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js,script-update-interval=-1
http-response https://api.zhihu.com/market/header requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js,script-update-interval=-1
http-response https://app.bilibili.com/x/resource/show/tab requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js,script-update-interval=-1
http-response https://app.bilibili.com/x/v2/feed requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js,script-update-interval=-1
http-response https://app.bilibili.com/x/v2/account/mine requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js,script-update-interval=-1
http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js,script-update-interval=-1
http-response https://app.bilibili.com/x/v2/rank requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20rank.js,script-update-interval=-1
