// Skills Bars
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
});


// Return to top button
window.onload = function()  {              
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 150) {     // If page is scrolled more than 200px
          $('#return-to-top').fadeIn(200);  // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200); // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {    // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                     // Scroll to top of body
      }, 500);
  });
      };