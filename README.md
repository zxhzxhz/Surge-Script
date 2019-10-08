```
[Rule]

RULE-SET,https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/ad.list,REJECT-TINYGIF

//WeChat Article
AND,((DOMAIN,mp.weixin.qq.com), (NOT,((URL-REGEX,https://mp.weixin.qq.com/(s|mp/(getappmsgext|profile|author|homepage|lifedetail|app)))))),REJECT-TINYGIF

//Weibo International
USER-AGENT,Weibo%20intl*,REJECT-TINYGIF

//Netease Music
URL-REGEX,https?://interface3?.music.163.com/eapi/(ad|abtest|sp|hot|mlivestream|store|mlog|search/(specialkeyword|defaultkeyword|hot)),REJECT-TINYGIF
AND,((USER-AGENT, %E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*),(OR,((NOT,((DOMAIN-SUFFIX,music.126.net))), (DOMAIN-KEYWORD,admusic)))),REJECT-TINYGIF
AND,((USER-AGENT,NeteaseMusic*), (NOT,((URL-REGEX,https?://interface3?.music.163.com)))),REJECT-TINYGIF
USER-AGENT,neteasemusic*,REJECT-TINYGIF

//ZhiHu
URL-REGEX,https://api.zhihu.com/(ab|fringe|zst|commercial|ad-style-service|topstory/hot-lists|market/popover|search/(top|tab|preset)|.*(recommendations|featured-comment-ad)),REJECT-TINYGIF
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN,api.zhihu.com))), (NOT,((DOMAIN,link.zhihu.com))), (NOT,((DOMAIN,lens.zhihu.com))), (NOT,((DOMAIN,www.zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT-TINYGIF

//BiliBili
URL-REGEX,https://app.bilibili.com/x/v2/(splash|rank.*rid=(168|5)|search/(defaultword|hot|recommend|resource)),REJECT-TINYGIF
AND,((USER-AGENT,bili*), (NOT,((DOMAIN-SUFFIX,bilibili.com))),(NOT,((DOMAIN-SUFFIX,hdslb.com)))),REJECT-TINYGIF

//Pixiv
AND,((USER-AGENT,pixiv*), (NOT,((DOMAIN-KEYWORD,pixiv)))),REJECT-TINYGIF


[URL Rewrite]
https://testflight.apple.com/join/(.*) itms-beta://testflight.apple.com/join/$1 302


[MITM]
hostname = api.zhihu.com, app.bilibili.com, api.bilibili.com, mp.weixin.qq.com, interface.music.163.com, oauth.secure.pixiv.net, app-api.pixiv.net,testflight.apple.com


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
http-response https://app.bilibili.com/x/v2/show/popular/index requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20hot.js,script-update-interval=-1
http-response https://api.bilibili.com/x/v2/reply/main requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js,script-update-interval=-1
http-response https://oauth.secure.pixiv.net/auth/token requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20pixiv%20premium.js,script-update-interval=-1
http-request  https://app-api.pixiv.net/v1/search.*popular script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20pixiv%20search.js,script-update-interval=-1
http-response https://testflight.apple.com/v3/accounts/.*/ru/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20testflight%20view.js,script-update-interval=-1
//cron "* * * * *" debug=1,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20testflight%20refresh.js,script-update-interval=-1
