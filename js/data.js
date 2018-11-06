$(document).ready(function(){

	$("input[name='telephone'], input[type='tel']").mask("+7 (999) 999-99-99").each(function() {

		var title = $(this).attr("title");

		$(this).val(title);

	});
	
	$("input[type='text'], input[type='tel'], textarea").focus(function(){
		if($(this).hasClass("error")) {
			$(this).val("").removeClass("error");
		}
	});
	
	$("input[type='text'], input[type='tel'], textarea").focus(function(){
		var title=$(this).attr("title");
		var val=$(this).val();
		if(title==val) {
			$(this).val("");
		}
	});
	
	$("input[type='text'], input[type='tel'], textarea").blur(function(){
		var title=$(this).attr("title");
		var val=$(this).val();
		if(val=='') {
			$(this).val(title);
		}
	});
	
	/* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/
	
	
	$(".js-popup-close").click(function() {
		$(this).closest(".popup").fadeOut(500);
        $("body").css("overflow","auto");
		return false;
	});	
	
	$(".js-popup-show").click(function() {
        $("body").css("overflow","hidden");
		var name = $(this).data("popup-name");
		var subj = $(this).data("popup-subj");
		$(".popup."+name).fadeIn(500);
		$(".popup."+name+" .popup__modal input[name='subj']").val(subj);
		return false;
	});
    
    function thanck() {
        $(".popup").fadeOut(500);
        $(".popup-thanck").fadeIn(500);
        setTimeout('$(".popup-thanck").fadeOut(500);',5000);
    }
    
    $(".ajax-form").ajaxForm({
        beforeSubmit: function(){
            $(this).parsley({
            });
        },
        success: function(){
            thanck();
        }
    });
	
	/* components */
	
	/*
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};

	if($('.gl-slider').length) {
		$('.gl-slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 479,
				  settings: {
					dots: false
				  }
				}			
			]
		});
	};
	*/
	
	$(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		$("html, body").animate({
            scrollTop: $(attr_href).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
	
	$(".js-svg").each(function(){
        var svg_src = $(this).data("svg-src");
        $(this).load(svg_src);
    });
    
    $(".nav-menu__item_sub .nav-menu__head").click(function(){
        if ( $(".left-menu").hasClass("left-menu_hide") && viewport().width < 769 ) {
            if ( $(this).parent().hasClass("nav-menu__item_active") ) {
                $(this).parent().removeClass("nav-menu__item_active").find(".nav-sub-menu").slideUp(500);
            } else {
                $(".nav-menu__item_sub.nav-menu__item_active").find(".nav-sub-menu").slideUp(500);
                $(".nav-menu__item_sub.nav-menu__item_active").removeClass("nav-menu__item_active");
                $(this).parent().addClass("nav-menu__item_active").find(".nav-sub-menu").slideDown(500);
            }
        } else {
            if ( $(this).parent().hasClass("nav-menu__item_active") ) {
                $(this).parent().removeClass("nav-menu__item_active").find(".nav-sub-menu").slideUp(500);
            } else {
                $(".nav-menu__item_sub.nav-menu__item_active").find(".nav-sub-menu").slideUp(500);
                $(".nav-menu__item_sub.nav-menu__item_active").removeClass("nav-menu__item_active");
                $(this).parent().addClass("nav-menu__item_active").find(".nav-sub-menu").slideDown(500);
            }
        }
        return false;
    });
    
    $(".user-box__name").click(function(){
        $(this).toggleClass("user-box__name_active");
        $(this).closest(".user-box").find(".user-box__list").toggleClass("user-box__list_active");
        $(this).parent().find(".dots-button").slideToggle(300);
    });
    
    $(".burger").click(function(){
        if ( viewport().width < 769 ) {
            $(".left-menu").addClass("left-menu_hide");
            $(".page-content").addClass("page-content_active");
        } else {
            $(".left-menu").removeClass("left-menu_hide");
            $(".page-content").removeClass("page-content_active");
        }
    });
    
    $(".left-menu__close").click(function(){
        if ( viewport().width < 769 ) {
            $(".left-menu").removeClass("left-menu_hide");
        } else {
            $(".left-menu").addClass("left-menu_hide");
            $(".page-content").addClass("page-content_active");
        }
    });
    
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.js-foto-img').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $('.js-foto-input').change(function() {
        var filename = $(this).val();
        if ( filename != '' ) {
            $('.js-foto-name').html("Выбрать <br>другое");
        }
        readURL(this);
    });
    
    $(".steps-loader__item:first").addClass("steps-loader__item_active");
    
    $(".search-form_header").click(function(){
        $(this).addClass("active");
    });
    
    $(".view-buttons__item").click(function(){
        if ( $(this).hasClass("view-buttons__item_active") ) {
            
        } else {
            $(".view-buttons__item_active").removeClass("view-buttons__item_active");
            $(this).addClass("view-buttons__item_active");
        }
    });
    
    $(".list-btn").not(".list-btn.view-buttons__item_active").click(function(){
        $(".step-list").removeClass("step-list_grid").addClass("step-list_line");
        $(".step-box").addClass("step-box_line");
    });
    
    $(".grid-btn").not(".list-btn.view-buttons__item_active").click(function(){
        $(".step-list").removeClass("step-list_line").addClass("step-list_grid");
        $(".step-box").removeClass("step-box_line");
    });
    
    if ( viewport().width < 479 ) {
        $(".step-list").removeClass("step-list_grid").addClass("step-list_line");
        $(".step-box").addClass("step-box_line");
        $(".view-buttons").remove();
    }
    
    $(".module__icon-toggle").click(function(){
        var parent = $(this).closest(".module");
        parent.toggleClass("module_active");
        parent.find(".module__hidden").slideToggle(500);
    });
    
    $(".module:first .module__icon-toggle").click();
    
    $(".module-list__like").click(function(){
        $(this).toggleClass("module-list__like_active"); 
    });
    
    if ( $(".module-list").length ) {
        $(".module-list").sortable({
            axis: 'y',
            cursor: 'crosshair',
            distance: 10,
            helper: "clone",
            placeholder: "module__placeholder"
        });
    }

});

/* viewport width */
function viewport(){
    var e = window, 
        a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

//Анимации по странице
$(window).scroll(function(){
    var viewport_height = viewport().height;
    var scroll_top = $(window).scrollTop();
    $(".animateme").each(function(){
        var animate_pos = $(this).offset().top;
        var animate_offset = $(this).data("animate-offset");
        var animate_delay = $(this).data("animate-delay");
        var animate = $(this).data("animate-class");
        var win_scroll = scroll_top + viewport_height - animate_offset;
        $(this).css("transition-delay",animate_delay+"ms");
        if ( win_scroll >= animate_pos ) {
            $(this).addClass(animate);
        } else {
            $(this).removeClass(animate);
        }
    });
    if ( viewport().width > 960 ) {
        $(".js-paralax").each(function(){
            var paralax_pos = $(this).offset().top;
            var paralax_side = $(this).data("paralax-side");
            var paralax_step = $(this).data("paralax-step");
            var paralax_speed = $(this).data("paralax-speed");
            if ( paralax_side == 'bottom') {
                $(this).animate({ marginBottom: ( scroll_top - paralax_pos )/paralax_step },paralax_speed);
            } else {
                $(this).animate({ marginTop: ( scroll_top - paralax_pos )/paralax_step },paralax_speed);
            }
        });
    }
});

$(function(){
	// Ищем все элементы с class="dial"
	var dials = $(".js-loader");
	// Перебираем все .dial и пихуем туда canvas с графиком.
	for (i=0; i < dials.length; i++){
		var width = (typeof $(dials[i]).attr("data-width") != 'undefined') ? Math.round($(dials[i]).attr("data-width")) : 80;
		var procent = (Number($(dials[i]).attr("data-percent")) > 0 && Number($(dials[i]).attr("data-percent")) < 100) ? Math.round(Number($(dials[i]).attr("data-percent")) * 10)/10 : 0;
		var lineWidth = (typeof $(dials[i]).attr("data-lineWidth") != 'undefined') ? Number($(dials[i]).attr("data-lineWidth")) : width / 10;
		var size = width+lineWidth;
		var lineRound = (typeof $(dials[i]).attr("data-lineRound") != 'undefined') ? true : false;
		var borderColor = $(dials[i]).css("border-color");
		var color = $(dials[i]).css("color");
		// Меняем размер .dial в зависимости от data-width="80"
		// Устанавливаем размер шрифта так что бы он вмещался в круг не задевая border
		// Вставляем canvas такого же размера что и родитель.
		$(dials[i]).prepend('<canvas id="dial' + i + '" width="' + size + '" height="' + size + '"></canvas>');
		// Выравниваем текст по вертикали
		$("p", dials[i]).css({"line-height": size + 'px'});
		var canvas = document.getElementById("dial" + i);
    var context = canvas.getContext("2d");
		// считаем по формуле радианы
		var radian = 2*Math.PI*procent/100;
		// рисуем круг для фона
		context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 0, 2*Math.PI, false);
		context.lineWidth = lineWidth;
		context.strokeStyle = borderColor;
		context.stroke();
		context.beginPath();
		// рисуем круг с процентами
		context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 1.5 * Math.PI, radian+1.5 * Math.PI, false);
		context.strokeStyle = '#6064f3';
		// Можно скруглить концы отрезка если передан параметр data-lineRound
		if (lineRound == true && lineWidth < width) context.lineCap = "round";
    context.stroke();
	}
});

