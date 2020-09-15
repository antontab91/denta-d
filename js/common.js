$(function () {

	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {};

	var steps = 9;
	var paralaxContainer = '.container';
	var parallaxElements = $('.parallax').closest(paralaxContainer).find('.parallax');
	var parallaxQuantity = parallaxElements.length;

	$(window).on('scroll', function () {
		window.requestAnimationFrame(function () {

			for (var i = 0; i < parallaxQuantity; i++) {

				var currentElement = parallaxElements.eq(i);
				var scrolled = $(window).scrollTop();
				var currentElementStep = currentElement.data('step') ? currentElement.data('step') : steps;
				var containerPosition = currentElement.closest('.container').offset()['top'];

				currentElement.css({
					'transform': 'translate3d(0,' + (scrolled - containerPosition) * -((i + 1) / currentElementStep) + 'px, 0)'
				});
			}
		});
	});
});

$(function () {

	$(function (f) {
		f(window).scroll(function () {
			f('#top')[(f(this).scrollTop() > 100 ? "add" : "remove") + "Class"]("fixbar");
		});
	});

	$(document).ready(function () {


		/*
		    $('.multi-col').on('show.bs.collapse', function () {
		      $('[aria-controls='+ $(this).attr('id') +']').attr('disabled', true);
		    });

		    $('.multi-col').on('hide.bs.collapse', function () {
		      $('[aria-controls='+ $(this).attr('id') +']').attr('disabled', false);
		    });
		*/

		var $slick = $('.ds-1');
		var $slick2 = $('.ds-2');
		var slickInit = $('.ds-1, .ds-2');
		var $slickquotespic = $('.quotes-pic-slider');
		var $slickquotes = $('.quotes-slider');
		var $slickaks = $('.aks-slider');
		var $slickdps1 = $('.dps-1');
		var $slickdps2 = $('.dps-2');
		var $slickdis1 = $('.dis-1');
		var $slickdis2 = $('.dis-2');
		var $slickServices = $('.services-slider');
		var $slickServicesTitle = $('.services-slider-title');

		$slickServices.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var n = +nextSlide + 1;
			//$('.qps .ite').removeClass('active');
			//$('.qps .ite:nth-child('+ n +')').addClass('active');
			console.log(n);
		});

	

		$slick2.on('init', function (event, slick, currentSlide, nextSlide) {
			var count = slick.slideCount;
			for (var i = 1; i <= count; i++) {
				var active = 'class="ca"';
				if (i > 1) {
					active = ''
				}
				$(this).next().append('<span ' + active + '>0' + i + '</span>');
			}
		});

		$slickquotes.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var n = +nextSlide + 1;
			$('.qps .ite').removeClass('active');
			$('.qps .ite:nth-child(' + n + ')').addClass('active');
		});

		$slick.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			//
			var countDsCont = $(this).next().find('span');
			var n = +currentSlide;
			countDsCont.removeClass('ca');
			// countDsCont[n].className = 'ca';
		});

		$slick2.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			//
			var countDsCont = $(this).next().find('span');
			var n = +currentSlide;
			countDsCont.removeClass('ca');
			// countDsCont[n].className = 'ca';
		});

		$slickServices.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			fade: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.services-slider-title',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickServicesTitle.slick({
			focusOnSelect: true,
			centerMode: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			draggable: true,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.services-slider',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 2
					}
        },
				{
					breakpoint: 576,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        },
      ]
		});

		$slick.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickquotespic.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.quotes-slider',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickquotes.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			fade: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.quotes-pic-slider',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickaks.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			responsive: [
				{
					breakpoint: 992,
					draggable: true,
					settings: {
						slidesToShow: 2
					}
        },
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        },
      ]
		});


		$slickdps1.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.dis-1',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickdis1.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.dps-1',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickdps2.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.dis-2',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$slickdis2.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			infinite: true,
			draggable: false,
			adaptiveHeight: true,
			dots: false,
			asNavFor: '.dps-2',
			responsive: [
				{
					breakpoint: 768,
					draggable: true,
					settings: {
						slidesToShow: 1
					}
        }
      ]
		});

		$('.n-prev').click(function () {

			var sliderId = $(this).data('slider');
			var slickId = $slick;

			if (sliderId == '2') {
				slickId = $slick2;
			} else if (sliderId == '3') {
				slickId = $slickquotes;
			} else if (sliderId == '4') {
				slickId = $slickaks;
			} else if (sliderId == '5') {
				slickId = $slickdps1;
			} else if (sliderId == '6') {
				slickId = $slickdps2;
			} else if (sliderId == '7') {
				slickId = $slickServices;
			}

			slickId.slick('slickPrev');

		});

		$('.n-next').click(function () {

			var sliderId = $(this).data('slider');
			var slickId = $slick;

			if (sliderId == '2') {
				slickId = $slick2;
			} else if (sliderId == '3') {
				slickId = $slickquotes;
			} else if (sliderId == '4') {
				slickId = $slickaks;
			} else if (sliderId == '5') {
				slickId = $slickdps1;
			} else if (sliderId == '6') {
				slickId = $slickdps2;
			} else if (sliderId == '7') {
				slickId = $slickServices;
			}

			slickId.slick('slickNext');

		});

		$(".qps .ite").click(function (e) {
			e.preventDefault();
			slideIndex = $(this).index();
			$('.quotes-slider').slick("slickGoTo", parseInt(slideIndex));
		});

		$(".l-list .ite").click(function (e) {
			//e.preventDefault();
			slideIndex = $(this).children().data('gotoslide');
			$('.bt-collapse').addClass('diss');
			$(this).children().removeClass('diss');
			$('.services-slider').slick("slickGoTo", parseInt(slideIndex));
		});

		$('#tab-troeschina').one('shown.bs.tab', function (e) {

			$slick2.slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				infinite: true,
				draggable: false,
				adaptiveHeight: true,
				dots: false,
				responsive: [
					{
						breakpoint: 768,
						draggable: true,
						settings: {
							slidesToShow: 1
						}
          }
        ]
			});
		});
	});



	$('.anchor').click(function () {
		if ($(this).hasClass('n-link')) {
			$('#navbarToggler').collapse('hide');
		}
		var btn = $(this).data('href');
		var target = $(btn);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 1500);
		return false;
	});

	/*
	  $('[type=tel]').intlTelInput({
	        allowExtensions: false,
	        autoFormat: true,
	        autoHideDialCode: false,
	        autoPlaceholder: false,
	        defaultCountry: "auto",
	         geoIpLookup: function(callback) {
	           $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
	             var countryCode = (resp && resp.country) ? resp.country : "";
	             callback(countryCode);
	           });
	         },
	        nationalMode: false,
	        numberType: 'MOBILE',
	        preferredCountries: ['ua', 'ru', 'by','us'],
	        utilsScript: 'js/utils.js'
	      });
	*/
	$('.popup').magnificPopup({
		type: 'inline',
		tClose: 'Закрыть',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close-custom">Закрыть</button>',
		fixedContentPos: false,
		fixedBgPos: false,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
				if (this.st.el.data('mfpSrc') == '#popup-callback') {
					$('#collapsePhones').collapse('hide');
				}
			}
		}
	});


	$('.popup-doc-info').magnificPopup({
		type: 'inline',
		tClose: 'Закрыть',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close-custom">Закрыть</button>',
		fixedContentPos: true,
		fixedBgPos: false,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: false,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');

				var isNumberSlide = +this.st.el.attr('data-docid');

				//$('.sl-hid').css('opacity', '0');
				if (this.st.el.attr('data-mfp-src') == '#popup-doctor-slider-ds-1') {
//					$('.dps-1').slick('slickGoTo', isNumberSlide - 1);
				
				} else if (this.st.el.attr('data-mfp-src') == '#popup-doctor-slider-ds-2') {
					setTimeout(function () {
						$('.dps-2').slick('slickGoTo', isNumberSlide - 1);
					}, 350);
				}
				setTimeout(function () {
					//$('.sl-hid').css('opacity', '1');
				}, 1);
			}
		}
	});

	$('.popup-doc-info').on('mfpOpen', function (e) {

		var isNumberSlideNext = parseInt($.magnificPopup.instance.currItem.index) + 2;
		var isNumberSlidePrev = parseInt($.magnificPopup.instance.currItem.index);
//		console.log($.magnificPopup.instance.currItem.index);
		$('.dps-1').slick('slickGoTo', isNumberSlideNext);
		setTimeout(function () {
//			console.log('isNumberSlidePrev', isNumberSlidePrev)
			$('.dps-1').slick('slickGoTo', isNumberSlidePrev);
		}, 550);

	});


	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		preloader: false,
		fixedContentPos: false,
		midClick: true,
	});

	$('.popup-terms').magnificPopup({
		type: 'inline',
		tClose: 'Закрыть',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close-custom">Закрыть</button>',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: true,

		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
				$('#info_inp').val(this.st.el.attr('data-info'));
				$('#price_inp').val(this.st.el.attr('data-price'));
			}
		}
	});

	$(document).on('click', '.popup-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$(".phones-cont").hover(
		function () {
			$('#collapsePhones').collapse('show');
		},
		function () {
			$('#collapsePhones').collapse('hide');
		}
	);


});

$(function () {

	var input = $('input');
	var form = $('form');
	var patternHidden = /(\D)+[^0-9]{2,}/i;
	var patternText = /(\D)+[^0-9]{2,}/i;
	var patternEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
	var patternTel = /([+()0-9 ]){9,18}/i;
	var errorFieldsMessage = {
		text: ' Имя',
		tel: ' Телефон',
		email: ' Электронная почта',
	};

	function validationsField(field) {

		var fieldValue = field[0].value;
		var fieldType = field[0].type;

		if (fieldType == 'email') {
			var pattern = patternEmail;
		} else if (fieldType == 'text') {
			var pattern = patternText;
		} else if (fieldType == 'tel') {
			var pattern = patternTel;
		} else if (fieldType == 'hidden') {
			return true; //var pattern = patternHidden;
		}
		return pattern.test(fieldValue);
	}

	function validationsForm(form) {

		var fields = form.find('input:not([type=radio])');
		var errorTags = form.find('.error-message');
		var numberIsValid = 0;
		var errorMessage = [];

		fields.each(function () {
			var field = $(this);
			var errorFieldType = field[0].type;
			if (validationsField(field)) {
				field.removeClass('error').addClass('accept');
				numberIsValid++;
			} else {
				if (errorFieldType == 'text') {
					errorMessage.push(errorFieldsMessage.text);
				} else if (errorFieldType == 'tel') {
					errorMessage.push(errorFieldsMessage.tel);
				} else if (errorFieldType == 'email') {
					errorMessage.push(errorFieldsMessage.email);
				}
				field.addClass('error');
			}

		});

		errorMessage.length > 0 ? errorTags.html('Некорректное заполнение: <br><b>' + errorMessage + '</b>') : null;
		return fields.length == numberIsValid;

	}

	function keyupEventOff(e) {
		if (e.target.value === '') {
			$(this).removeClass('active');
		}
	}

	function keyupEvent(e) {
		var field = $(this);

		field.addClass('active');

		var errorTags = field.closest('form').find('.error-message');
		errorTags.html('');

		field.hasClass('error') ? field.removeClass('error') : false;
		validationsField(field) ? field.addClass('accept') : field.removeClass('accept');

	}

	function submitForm() {

		var me = $(this);
		var dataFields = me.find('input');
		var btnSubmit = form.find('[type=submit]');

		if (validationsForm(me)) {
			me.addClass('send');
			btnSubmit.attr('disabled', true);

			var gDataFIelds = {
				'entry.1378648537': me.find('input[name=name]').val(),
				'entry.906441403': me.find('input[name=phone]').val(),
				'entry.2147320007': me.find('input[name=info]').val(),
			};

			$.ajax({
		      type: 'POST',
		      url: 'mail.php',
		      dataType: 'json',
		      data:  me.serialize(),
		      success: function (response) {}
		    });

		    setTimeout(function () {
          window.location.href = "success.html";
        }, 800);


			$.ajax({
				type: "POST",
				url: 'https://docs.google.com/forms/d/e/1FAIpQLScdnPlLlP7_5vnQoBNER4t6ITBHGUq1urWXBRY51YQFFQjUOA/formResponse',
				dataType: 'xml',
				data: gDataFIelds,
				statusCode: {
					0: function () {
						// me[0].reset();
						// dataFields.removeClass('active').removeClass('accept');

						// $modalConstructor = '<div class="form-white mfp-with-anim popup-tnx">';
						// $modalConstructor += '<p class="text-center h2 ca">Спасибо.</p><p class="line">Ваши данные успешно отправлены.</p><br><br><p>Мы свяжемся с Вами в скором времени.</p>';
						// $modalConstructor += '<br><br><button class="popup-dismiss bt"><span>Вернуться на сайт</span></button>';
						// $modalConstructor += '</div>';
						// $.magnificPopup.open({
						// 	removalDelay: 300,
						// 	mainClass: 'mfp-zoom-in',
						// 	items: {
						// 		src: $modalConstructor,
						// 		type: 'inline'
						// 	},
						// 	closeBtnInside: true
						// });
					}
				}
			});

		}
	}


  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="page_url"]').val(window.location.hostname);
  $('#email').val("JuliaBeliaevaCall"+new Date().getTime()+"@nomail.com");

  $('input[name="ref"]').val(document.referrer);
  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  
	input.keyup(keyupEvent).focus(keyupEvent).focusout(keyupEventOff);
	form.submit(submitForm);

});
