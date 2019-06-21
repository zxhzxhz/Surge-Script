
### For BiliBili, Zhihu


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
USER-AGENT,AVOS*,REJECT
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,lens.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

//BiliBili
DOMAIN,dataflow.biliapi.com,REJECT-TINYGIF
DOMAIN,data.bilibili.com,REJECT-TINYGIF
DOMAIN,thirdparty.biliapi.com,REJECT
DOMAIN,cm.bilibili.com,REJECT
URL-REGEX,https://app.bilibili.com/x/v2/param,REJECT
URL-REGEX,https://app.bilibili.com/x/resource/abtest,REJECT
URL-REGEX,http://app.bilibili.com/x/v2/dataflow/report,REJECT-TINYGIF
URL-REGEX,https://app.bilibili.com/x/v2/search/(defaultword|hot|recommend|resource),REJECT
URL-REGEX,https://app.bilibili.com/x/v2/rank.*rid=(168|5),REJECT
URL-REGEX,https://api.bilibili.com/pgc/season/rank/cn,REJECT
AND,((USER-AGENT,bili*), (NOT,((DOMAIN-SUFFIX,bilibili.com))), (NOT,((DOMAIN-SUFFIX,hdslb.com)))),REJECT



[MITM]
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com

[Script]
http-response https://api.zhihu.com/topstory/follow requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/.*/questions requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://api.zhihu.com/market/header requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

http-response https://app.bilibili.com/x/resource/show/tab requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/v2/feed requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
http-response https://app.bilibili.com/x/v2/rank requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20rank.js
```
