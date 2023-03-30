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
          $('.yt').show(400);
    }
   else 
   {
     $('.yt').hide(400);

   }
})

 