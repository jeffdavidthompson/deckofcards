/*$(document).ready(function () {
  $('div').css('background-color', '#000000');
});
*/
$(document).ready(function () {
  $('.cards img').mouseover(function () {
    help = this.src
    this.src = 'images/gaga.png';
  });
    $('.cards img').mouseout(function () {
    this.src = help;
  });
});