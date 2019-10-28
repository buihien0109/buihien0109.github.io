//Khai báo mảng card
let cards = [
	'images/card1.jpg',
	'images/card2.jpg',
	'images/card3.jpg',
	'images/card4.jpg',
	'images/card5.jpg'
];

let count_card = 0;
let current = null; //Card hiện tại
let time = 30; //Khai báo thời gian đếm ngược = 30s
let count = 0;  //Đếm số cặp bài trùng nhau
let run = null; //Biến Interval

window.onload = function () {
	let imgArr = makeImgArray();
	shuffle(imgArr);
	drawImg(imgArr);
	$('#timer').attr('max', time);
	$('#timer').attr('value', time);
	$('#info_time').text('Time: ' + time + ' seconds');
	$('.card').css('pointer-events', 'none');
	$('.congrat_dialog').hide();
	$('.lose_dialog').hide();
}

//Nhân đôi mảng card
function makeImgArray() {
	let imgArr = [...cards, ...cards]; //Use ES6
	return imgArr;
}

//Render mảng card ra ngoài view
function drawImg(imgArr) {
	for (let i = 0; i < imgArr.length; i++) {
		$('.wrapper').append('<div class="thumb">' +
			'<div class="card" onclick="flipCard(this)" data-name="' + imgArr[i] + '">' +
			'<div class="front">' +
			'<img src="' + imgArr[i] + '" alt="card front">' +
			'</div>' +
			'<div class="back">' +
			'<img src="images/back.jpg" alt="card back">' +
			'</div>' +
			'</div>' +
			'</div>');
	}
	$('.wrapper').append('<div class="clear"></div>');
}

//Đảo vị trí mảng Cards
function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//Handle khi chọn Card
function flipCard(card) {
	console.log(card)
	if (count_card == 2) return;
	if (!$(card).hasClass('flipped')) {
		$(card).toggleClass('flipped');
		if (current == null) {
			current = $(card);
			count_card++;
		} else {
			count_card++;
			if ($(card).attr("data-name") == $(current).attr("data-name")) {
				$(current).find('.front').css('box-shadow', '0 0 10px 5px green');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px green');
				setTimeout(function () {
					document.getElementById('success-music').play();
					$(current).css('opacity', '0');
					$(card).css('opacity', '0');
					current = null;
					count++;
					count_card = 0;
					if (count == cards.length && time != 0) {
						clearInterval(run);
						$('.congrat_dialog').show();
						setTimeout(function () {
							document.getElementById('victory-music').play();
						}, 500);
					}
				}, 800);
			}
			else {
				$(current).find('.front').css('box-shadow', '0 0 10px 5px red');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px red');
				setTimeout(function () {
					document.getElementById('failed-music').play();
					$(current).toggleClass('flipped');
					$(card).toggleClass('flipped');
					$(current).find('.front').css('box-shadow', '0 0 10px 5px white');
					$(card).find('.front').css('box-shadow', '0 0 10px 5px white');
					current = null;
					count_card = 0;
				}, 800);
			}
		}
	}
}

//Handle start game và end game
function start() {
	$('.dialog_start').hide(); //Click start thì popup start ẩn
	$('.card').css('pointer-events', 'auto');
	run = setInterval(function () { //Gọi hàm setInterval đếm thời gian ngược 30s
		time--;
		$('#timer').attr('value', time); //Gán giá trị vào thanh progress bar
		if (time == 0) { //Nếu time = 0 thì clear Interval và cho hiện popup end game
			$('.card').css('pointer-events', 'none');
			clearInterval(run);
			$('.lose_dialog').show();
			setTimeout(function () { //Sau 1s cho chạy nhạc gameover
				document.getElementById('gameover-music').play();
			}, 1000);
		}
	}, 1000);
}

//Xử lý khi replay lại game
function replay() {
	window.location.href = "index.html";
}


