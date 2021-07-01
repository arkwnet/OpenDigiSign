let ct = 0;
let ct2 = 0;
let info = 0;
let slide = -1;
const dayOfWeek = [ "日", "月", "火", "水", "木", "金", "土" ];
const slideImage = ["sample1.png", "sample2.png"];
let canvas = null;
let g = null;

window.onload = function() {
	canvas = document.getElementById("canvas");
	g = canvas.getContext("2d");
	setInterval(main,1000/2);
}

function main() {
	let now = new Date();
	// 日付の更新
	let year = now.getFullYear();
	let month = clockProcess(now.getMonth()+1);
	let day = clockProcess(now.getDate());
	$(".area-clock h2").text(year + "/" + month + "/" + day + "　" + dayOfWeek[now.getDay()] + "曜日");
	// 時刻の更新
	let hour = clockProcess(now.getHours());
	let min = clockProcess(now.getMinutes());
	if (ct < 2) {
		$(".area-clock h1").html(hour + ":" + min);
	} else {
		$(".area-clock h1").html(hour + "<span style='opacity: 0'>:</span>" + min);
	}
	// 一定時間経過したらお知らせ文とスライドショー画像を書き換え
	if (ct2 % 30 == 0) {
		changeInfoText();
		changeSlideImage();
	}
	ct++;ct2++;
	if (ct == 4) { ct = 0; }
}

// 時刻を文字列に変換
function clockProcess(str) {
	if (str < 10) {
		str = "0" + str;
	} else {
		str = str.toString();
	}
	return str;
}

// お知らせ文の書き換え
function changeInfoText() {
	info++;
	if (!$("#info" + info).length) {
		info = 1;
	}
	$(".area-info-contents").fadeOut(500);
	$("#info" + info).fadeIn(500);
}

// スライドショー画像の書き換え
function changeSlideImage() {
	slide++;
	if (slide >= slideImage.length) {
		slide = 0;
	}
	$(".area-image img").attr("src", "img/"+slideImage[slide]);
}