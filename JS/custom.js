
var sticky = new Waypoint.Sticky({
  element: $('.sticky')[0]
})

$(document).ready(function() {

     $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
	    console.log('Scrollval = ' + scrollVal + ' Doc.height = ' + $(document).height() + ' Window.height = ' + $(window).height());
	    console.log('Scrollval = ' + ($(document).height() - $(window).height() - 500));
	    if ( scrollVal > ($(document).height() - $(window).height()) - 100) {
	            $('.sticky').removeClass('stuck'); 
	            $('.sticky').addClass('hitBottom');            
	    }
	    else {
	        $('.sticky').removeClass('hitBottom'); 
	       	$('.sticky').addClass('stuck');    
	    }   
   });

});

$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});

