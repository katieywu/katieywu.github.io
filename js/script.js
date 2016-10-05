 // niceScroll
//  $("html").niceScroll();
    
  // Stick menu
$(".sticky").sticky({topSpacing:0});
$(".menu-media").sticky({topSpacing:0});

$(".start-page .content").height($(window).height() - $(".menu").height()); 
                          

//var mySVGsToInject = document.querySelectorAll('img.svg-inject');
//SVGInjector(mySVGsToInject);

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
    
    var showMore = 0;
	var target = $(this).attr("href");
    if (target == '#about-me-expand') {
        $('.about-me > .content').toggleClass('active');
        if ($('#readMoreButton').text() == 'SHOW MORE') {
            $('#readMoreButton').text('SHOW LESS');
        } else {
            $('#readMoreButton').text('SHOW MORE');
        }
        
    } else {
        $('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 600, function() {

	   });
    }
    console.log(target);

			
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
  //figured it out: changes the menu to the active item
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .og-grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

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

