
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".bg-new").css({"background":"#fff","box-shadow":"0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);"});
	  }

	  else{
		  $(".bg-new").css("background" , "transparent");  	
	  }
  })
})