$(document).ready(function () {
	// Show or hide the sticky footer button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});


	$(".sidebar-menu > li.have-children > a").on("click", function (i) {
		i.preventDefault();
		if (!$(this).parent().hasClass("active")) {
			$(".sidebar-menu li ul").slideUp();
			$(this).next().slideToggle();
			$(".sidebar-menu li").removeClass("active");
			$(this).parent().addClass("active");
		} else {
			$(this).next().slideToggle();
			$(".sidebar-menu li").removeClass("active");
		}
	});

	//modal
	var elements = $('.modal-overlay, .modal');

	$('button.btn-modal-info').click(function () {
		elements.addClass('active');
	});

	$('.close-modal').click(function () {
		elements.removeClass('active');
	});


	//Slide
	var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


	//btn-login
	$(".button-fill").hover(function () {
		$(this).children(".button-inside").addClass('full');
	}, function () {
		$(this).children(".button-inside").removeClass('full');
	});

	//scroll header
	// $(window).on('scroll', function (){		
	// 	if ($(".header").offset().top > 5) {
	// 		$(".header").addClass("fixed-top");
	// 	} else {
	// 		$(".header").removeClass("fixed-top");
	// 	}		
	// });	
	
});