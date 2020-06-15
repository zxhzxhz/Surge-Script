let body = $response.body;

function hasOwnNestedProperty(obj, propertyPath) {
	if (!propertyPath) {
		return false;
	}
	var properties = propertyPath.split(".");
	for (let i = 0; i < properties.length; i++) {
		var prop = properties[i];
		if (!obj || !obj.hasOwnProperty(prop)) {
			return false;
		} else {
			obj = obj[prop];
		}
	}
	return true;
}
body = JSON.parse(body);

body["data"]["items"].forEach((element, index) => {
	if (itemIsFiltered(element)) {
		body["data"]["items"].splice(index, 1);
	}
});
body["data"]["items"].forEach((element, index) => {
	if (
		element.hasOwnProperty("uri") &
		element.hasOwnProperty("goto")
	) {
		let new_uri = alwaysHiresVideo(element);
		body["data"]["items"][index].uri = new_uri;
	}
});
function alwaysHiresVideo(element) {
	if (element.goto == "av") {
		let uris = element.uri;
		let uridecoded = decodeURIComponent(uris);
		let uri_ = /(.*preload=)({.*})(.*)/gm.exec(uridecoded);
		if (uri_.length > 2) {
			if (uri_[2].includes("expire_time")) {
				let obj = JSON.parse(uri_[2]);
				obj["quality"] = obj["support_quality"][0];
				obj = encodeURIComponent(JSON.stringify(obj));
				let uri_m = uri_[1] + obj + uri_[3];
				return uri_m;
			}
		}
	} else {
		return element.uri;
	}
}
function itemIsFiltered(item) {
	//original filter
	if (item.hasOwnProperty("ad_info") || item.hasOwnProperty("banner_item")) {
		return true;
	}
	//additional filter
	let card_type_blocklist = ["cm_v1", "cm_v2", "banner_v6"];
	let goto_blocklist = ["live"];
	let up_name_blocklist = [
		"共青团中央",
		"广东共青团",
		"浙江共青团",
		"山东共青团",
		"安徽共青团",
		"河南共青团",
		"央视频",
		"徐大sao",
		"翔翔大作战",
		"徐大虾咯",
		"科技美学",
		"敬汉卿",
		"NathanRich火锅大王",
		"千户长生",
	];
	if (item.hasOwnProperty("card_type")) {
		card_type_blocklist.forEach(card_type => {
			if (item["card_type"] == card_type) {
				return true;
			}
		});
	}

	if (item.hasOwnProperty("card_goto")) {
		goto_blocklist.forEach(goto => {
			if (goto == item["card_goto"]) {
				return true;
			}
		});
	}
	if (hasOwnNestedProperty(item,"args.up_name")) {
		up_name_blocklist.forEach(up_name => {
			if (items["args"]["up_name"] == up_name) {
				return true;
			}
		});
	}

	if (hasOwnProperty("top_rcmd_reason")) {
		if (item["top_rcmd_reason"] != "已关注") {
			return true;
		}
	}
}
body = JSON.stringify(body);
$done({ body });
