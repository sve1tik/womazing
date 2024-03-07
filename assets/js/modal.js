$(document).ready(function(){
	// Preloader
	$(window).on('load', function () {
		$('#preloader-active').delay(460).fadeOut('slow');
		$('body').delay(460).css({
			'overflow': 'visible'
		});
	});
//
//Sricky bar
//

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
		$(".nav__list").removeClass("sticky-bar");
	} else {
		$(".nav__list").addClass("sticky-bar");
	}
});


//
// Modal 
//

$('.tell__link').on('click', function(){
	$('.wrapper__modal').addClass('active');
	$("body").css({"overflow": "hidden" });
})
$('.overlay').on('click', function(){
	$('.wrapper__modal').removeClass('active');	
	$('.modal__callback').removeClass('active');
	$("body").css({"overflow": "visible" });
})
$('.btn_close').on('click', function(){
	$('.wrapper__modal').removeClass('active');	
	$("body").css({"overflow": "visible" });
})
$('.btn__callback').on('click', function(){
	$('.modal__callback').removeClass('active');	
	$("body").css({"overflow": "visible" });
})
//Hamburger
$('.slicknav_btn').on('click',function(){
	$('.mobile__menu-nav').toggle('show');
})

//
//Валидация и отправка формы
//

$.validator.addMethod('regex',function(value, element, regexp) {
let regExsp = new RegExp(regexp);
return  this.optional(element) || regExsp.test(value);
},'please check your input');

$(document).ready(function() {
$('[data-submit]').on('click', function(e) {
		e.preventDefault();
		$(this).parent('form').submit();
})


// Функция валидации и вывода сообщений
function valEl(el) {
		el.validate({
				rules: {
					tel: {
								required: true,
								minlength : 9,
								maxlength : 13,
								regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
						},
						firstName: {
								required: true,
								regex : "[A-Za-zА-яа-я]{1,32}"
						},
						email: {
								required: true,
								email: true
						},
						message: {
							required: true,
						}
				},
				messages: {
					tel: {
								required: 'Поле обязательно для заполнения',
								regex: 'Телефон может содержать символы + - () и цыфры от 0 до 9',
								minlength :  'Номер должен состоять минимум из 9 символов',
								maxlength :  'Номер не может быть длиннее 13 символов'
						},
						firstName: {
								required: 'Поле обязательно для заполнения',
								regex: 'Введено некорректное имя'
						},
						email: {
								required: 'Поле обязательно для заполнения',
								email: 'Неверный формат E-mail'
						},
						message: {
							required: 'Поле обязательно для заполнения'
						},
						country: {
							required: 'Поле обязательно для заполнения'
						},
						city: {
							required: 'Поле обязательно для заполнения'
						},
						street: {
							required: 'Поле обязательно для заполнения'
						},
						home: {
							required: 'Поле обязательно для заполнения'
						},
						apartment: {
							required: 'Поле обязательно для заполнения'
						},
				},

				// Начинаем проверку id="" формы
				submitHandler: function(form) {
					let $form = $(form);
					let $formId = $(form).attr('id');
					switch ($formId) {
							case 'popupResult':
									$.ajax({
													
											})
											.done(function() {
												$('#preloader-active').fadeIn("slow");

											})
											.fail(function() {
													console.log('Fail');
											})
											.always(function() {

													setTimeout(function() {
														$('.wrapper__modal').removeClass('active');	
														$('.modal__callback').addClass('active');	
														$('#preloader-active').fadeOut("slow");
															$form.trigger('reset');
														//строки для остлеживания целей в Я.Метрике и Google Analytics
													}, 1100);
											});
									break;
							case 'messageSucces':
									$.ajax({
													
											})
											.done(function() {

											})
											.fail(function() {
													console.log('Fail');
											})
											.always(function() {
													setTimeout(function() {
														$('.message-for-user').fadeIn();
															$form.trigger('reset');
															$('#preloader-active').fadeOut("slow");
														//строки для остлеживания целей в Я.Метрике и Google Analytics
													}, 1100);
													$('.message-for-user').on('click', function(e){
														$(this).fadeOut();
													});
											});
									break;
							case 'succes-order':
									$.ajax({
													
											})
											.done(function() {

											})
											.fail(function() {
													console.log('Fail');
											})
											.always(function() {
													setTimeout(function() {
														window.location.href = "success.html";
														$('#preloader-active').fadeOut("slow");
															$form.trigger('reset');
														//строки для остлеживания целей в Я.Метрике и Google Analytics
													}, 1100);
											});
									break;
					}
					return false;
			}
		})
}

// Запускаем механизм валидации форм, если у них есть класс .js-form
$('.js-form').each(function() {
		valEl($(this));
});
});

});

