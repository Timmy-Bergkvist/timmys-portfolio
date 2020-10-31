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


// REST API v3 from Github
$('[data-github]').each(function () {
var _this = this;
var repo = $(_this).data('github')

fetch('https://api.github.com/repos/' + repo).then(function (response) {
    return response.json();
}).then(function (response) {
    $(_this).find('[data-watchers]').text(response.watchers);
    $(_this).find('[data-stars]').text(response.stargazers_count);
    $(_this).find('[data-forks]').text(response.forks);
});
});