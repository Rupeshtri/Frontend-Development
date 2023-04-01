$(window).scroll(function(){
    if($(this).scrollTop()>150)
    {
        $('header').addClass('qq'); $('.dd').hide(); $('.pp').show();
    }
   else 
   {
    $('header').removeClass('qq'); $('.dd').show(); $('.pp').hide();

   }
})

$(window).scroll(function(){
    if($(this).scrollTop()>350)
    {
          $('.yt').show(); 
    }
   else 
   {
     $('.yt').hide();

   }
})

$('.clo').click(function(){
  $('.youtube').hide()
})
 