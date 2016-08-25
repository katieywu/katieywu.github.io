
  // niceScroll
//  $("html").niceScroll();
    
    
  // Stick menu
  $(".sticky").sticky({topSpacing:0});
  $(".menu-media").sticky({topSpacing:0});

$(".start-page .content").height($(window).height() - $(".menu").height()); 

//$('.svg-inject').svgInject(function(){
//    
//});
var mySVGsToInject = document.querySelectorAll('img.svg-inject');

SVGInjector(mySVGsToInject);

  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
      //unclear what this does someone help/
//   if (lastId !== id) {
//       lastId = id;
//       menuItems
//         .parent().removeClass("active")
//         .end().filter("[href=#"+id+"]").parent().addClass("active");
//   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }

}



  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });


//$(window).load(function(){
//
//$(".preloader").delay(1000).fadeOut("slow")
//
//  // Parallax
//  if ($('.parallax-background').length) {
//    $(".parallax-background").parallax();
//  }
//  
//  // Parallax
//  if ($('.parallax-background-partners').length) {
//    $(".parallax-background-partners").parallax();
//  }  
//
//});
