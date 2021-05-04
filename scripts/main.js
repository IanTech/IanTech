$(document).ready(function() {
    
    $(window).scroll( function(){

        $('.fade').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $text = $(".navbar a")
    var $drop = $(".dropbtn")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $text.toggleClass('scrolled', $(this).scrollTop() > $text.height());
    $drop.toggleClass('scrolled', $(this).scrollTop() > $drop.height());
  });
});
