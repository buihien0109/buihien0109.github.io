var cards = [
'images/card1.jpg',
'images/card2.jpg',
'images/card3.jpg',
'images/card4.jpg',
'images/card5.jpg'
];

var count_card = 0;

var current = null;
var time = 30;
var count = 0;
var run = null;

window.onload = function() {
	var imgArr = makeImgArray();
	shuffle(imgArr);
	drawImg(imgArr);
	$('#timer').attr('max', time);
	$('#timer').attr('value', time);
	$('#info_time').text('Time: ' + time + ' seconds');
	$('.card').css('pointer-events', 'none');
	$('.congrat_dialog').hide();
	$('.lose_dialog').hide();
}

function makeImgArray() {
	var imgArr = [];
	for (var i=0; i<cards.length; i++) {
		imgArr.push(cards[i]);
		imgArr.push(cards[i]);
	}
	return imgArr;
}

function drawImg(imgArr) {
	for (var i=0; i<imgArr.length; i++) {
		$('.wrapper').append('<div class="thumb">'+
			'<div class="card" onclick="flipCard(this)" data-name="'+imgArr[i]+'">'+
			'<div class="front">'+
			'<img src="'+imgArr[i]+'" alt="card front">'+
			'</div>'+
			'<div class="back">'+
			'<img src="images/back.jpg" alt="card back">'+
			'</div>'+
			'</div>'+
			'</div>');
	}
	$('.wrapper').append('<div class="clear"></div>');
}


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function flipCard(card) {
	if (count_card == 2) return;
	if (!$(card).hasClass('flipped')) {
		$(card).toggleClass('flipped');
		if (current == null) {
			current = $(card);
			count_card++;
		} else {
			count_card++;
			if ($(card).attr("data-name") == $(current).attr("data-name")) {
				$(current).find('.front').css('box-shadow','0 0 10px 5px green');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px green');
				setTimeout(function() {
					document.getElementById('success-music').play();
					$(current).css('opacity', '0');
					$(card).css('opacity', '0');
					current = null;
					count++;
					count_card = 0;
					if (count == cards.length && time != 0) {
						clearInterval(run);
						$('.congrat_dialog').show();
						setTimeout(function() {
							document.getElementById('victory-music').play();
						}, 500);
					}
				}, 800);
			}
			else {
				$(current).find('.front').css('box-shadow','0 0 10px 5px red');
				$(card).find('.front').css('box-shadow', '0 0 10px 5px red');
				setTimeout(function() {
					document.getElementById('failed-music').play();
					$(current).toggleClass('flipped');
					$(card).toggleClass('flipped');
					$(current).find('.front').css('box-shadow','0 0 10px 5px white');
					$(card).find('.front').css('box-shadow', '0 0 10px 5px white');
					current = null;
					count_card = 0;
				}, 800);
			} 
		} 
	}
}

function start() {
	$('.dialog_start').hide();
	$('.card').css('pointer-events', 'auto');
	run = setInterval(function() {
		time--;
		$('#timer').attr('value', time);
		if (time == 0)  {
			$('.card').css('pointer-events', 'none');
			clearInterval(run);
			$('.lose_dialog').show();
			setTimeout(function() {
				document.getElementById('gameover-music').play();
			}, 1000);
		}
	}, 1000);
}

function replay() {
	window.location.href = "index.html";
}


