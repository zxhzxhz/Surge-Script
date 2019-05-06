
### For BiliBili, Zhihu, Netease Music


```
[Rule]

//Zhihu
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,static.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
USER-AGENT,AVOS*,REJECT


//Netease Music
AND,((USER-AGENT,%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*), (NOT,((DOMAIN,music.163.com))), (NOT,((DOMAIN-SUFFIX,music.126.net)))),REJECT
AND,((USER-AGENT,NeteaseMusic*), (NOT,((DOMAIN,music.163.com))), (NOT,((DOMAIN-SUFFIX,music.163.com)))),REJECT
USER-AGENT,neteasemusic*,REJECT


[URL Rewrite]
https://app.bilibili.com/x/v2/search/defaultword - reject
https://app.bilibili.com/x/v2/search/recommend - reject
https://app.bilibili.com/x/v2/search/hot - reject
http://app.bilibili.com/x/v2/dataflow - reject

https://api.zhihu.com.*launch.* - reject
https://api.zhihu.com/ab/api - reject
https://api.zhihu.com/ad-style-service/request - reject
https://api.zhihu.com/banners - reject
https://api.zhihu.com/market/popover - reject
https://api.zhihu.com/search/top_search - reject
https://api.zhihu.com/search/tabs - reject
https://api.zhihu.com/zst - reject
https://api.zhihu.com/answers/.*/comments/featured-comment-ad - reject

http://interface.music.163.com/eapi/ad - reject
http://iadmusicmat.music.126.net/.*jpg$ - reject
http://p.c.music.126.net/.*jpg$ - reject


[MITM]
auto-bypass=false
skip-server-cert-verify = true
tcp-connection = true
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com, interface.music.163.com

[Script]
http-response https://api.zhihu.com/topstory/follow script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/v4/questions script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://api.zhihu.com/market/header script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

http-response https://app.bilibili.com/x/resource/show/tab script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/channel/list script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20channel.js
http-response https://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
http-response https://app.bilibili.com/x/v2/view.access_key script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
```
