let body = $response.body;
Object.prototype.hasOwnNestedProperty = function (propertyPath) {
	if (!propertyPath) return false;
	var properties = propertyPath.split(".");
	var obj = this;
	for (var i = 0; i < properties.length; i++) {
		var prop = properties[i];
		if (!obj || !obj.hasOwnProperty(prop)) {
			return false;
		} else {
			obj = obj[prop];
		}
	}
	return true;
};

body = JSON.parse(body);

body["data"]["items"].forEach((element, index) => {
	if (itemIsFiltered(element)) {
		body["data"]["items"].splice(index, 1);
	}
});
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
	if (item.hasOwnNestedProperty("card_type")) {
		card_type_blocklist.forEach(card_type => {
			if (item["card_type"] == card_type) {
				return true;
			}
		});
	}

	if (item.hasOwnNestedProperty("card_goto")) {
		goto_blocklist.forEach(goto => {
			if (goto == item["card_goto"]) {
				return true;
			}
		});
	}
	if (item.hasOwnNestedProperty("args.up_name")) {
		up_name_blocklist.forEach(up_name => {
			if (items["args"]["up_name"] == up_name) {
				return true;
			}
		});
	}

	if (item.hasOwnProperty("top_rcmd_reason")) {
		if (item["top_rcmd_reason"] != "已关注") {
			return true;
		}
	}
}
body = JSON.stringify(body);
$done({ body });
