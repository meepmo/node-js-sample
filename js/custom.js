$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        controlNav: true,
        directionNav: false
    });


});

function isEmail(email) {
  var emailPattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailPattern.test(email);
}

$(document).ready(function() {
	$('.form-main').submit(
		function () {
			var errorMessage = '';
			
			if (!isEmail($.trim($('#email').val()))) 
				errorMessage = 'We\'ll need a valid Email Address so we can write you back.';
			
			else if ($.trim($('#name').val()).length == 0 || 
				$.trim($('#email').val()).length == 0 || 
				$.trim($('#message').val()).length == 0) 
				
				errorMessage = 'We need all fields filled out so we can write you back.';
			

			if (errorMessage.length > 0) {
				$('#form-alert')
					.removeClass('alert-success')
					.addClass('alert-error')
					.html('<b>Oops!</b> ' + errorMessage)
					.show('500')
					.focus();
					
				return false;
			
			} else { 
				$.ajax({
					url: 'http://www.nicebigsmile.com/ajax.php',
					dataType: 'jsonp', 
					type: 'GET',
					data: $('.form-main').serialize(),
					error: function() {
						$('#form-alert')
							.removeClass('alert-error')
							.addClass('alert-success')
							.html('<b>Thanks!</b> We\'ll be in touch!')
							.show('500')
							.focus();
					}
				});
				
				return false;
			}
			
				
				

		}
	);

    $('#carousel_vertical_slide,#carousel_fade, #carousel_vertical_testimonial, #carousel_fade_icons, #carousel_fade_1, #carousel_fade_2, #carousel_testimonial_2').carousel({
        interval: 3000

    });





    $('.carousel-control').hover(
            function() {

                $(this).addClass('animated wobble');
            },
            function() {

                $(this).removeClass('animated wobble');

            }

    );

    $('#logokhan').hover(
            function() {
                $(this).addClass('animated tada');

            },
            function() {
                $(this).removeClass('animated tada');

            });
            
//            Responsive Videos

    $("#main-media").fitVids();


    ///////////// HEIGHT OF FIRST FRAME OF WEBSITE
    $(function() {
        $('#top').css({
            'height': ($(window).height()) + 'px'
        });
        $(window).resize(function() {
            $('#top').css({
                'height': ($(window).height()) + 'px'
            });
        });
    });

//////// NICE SCROLL JS
    $(function() {
        $("html").niceScroll({horizrailenabled:false});
    });



});

///////////// ANCHOR SCROLLS 	
$("a[href^='#top']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];

    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 80;
    $('html, body').animate({
        scrollTop: target_top
    }, 2500, 'easeOutBounce');
});
$("a[href^='#features']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];

    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 0;
    $('html, body').animate({
        scrollTop: target_top
    }, 1000, 'easeInOutExpo');
});

$(".nav li a[href^='#']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];

    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 0;
    $('html, body').animate({
        scrollTop: target_top
    }, 1500, 'easeInOutExpo');
});
//
//	


// Cache selectors
var lastId,
        topMenu = $(".nav"),
        topMenuHeight = topMenu.outerHeight() + 50,
// All list items
        menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});


///////////////TWITTER 
jQuery(document).ready(function($) {
    $.getJSON('http://api.twitter.com/1/statuses/user_timeline/wrapbootstrap.json?count=2&amp;callback=?', function(tweets) {
        $("#twitter").html(tz_format_twitter(tweets));
    });
});

 /*-----------------------------------------------------------------------------------*/
            /*	FANCYBOX
             /*-----------------------------------------------------------------------------------*/
            $(document).ready(function() {
                $(".fancybox-media").fancybox({
                    arrows: true,
                    padding: 0,
                    closeBtn: true,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    prevEffect: 'fade',
                    nextEffect: 'fade',
                    helpers: {
                        media: {},
                        overlay: {
                            locked: false
                        },
                        buttons: false,
                        title: {
                            type: 'inside'
                        }
                    },
                    beforeLoad: function() {
                        var el, id = $(this.element).data('title-id');
                        if (id) {
                            el = $('#' + id);
                            if (el.length) {
                                this.title = el.html();
                            }
                        }
                    }
                });
            });
