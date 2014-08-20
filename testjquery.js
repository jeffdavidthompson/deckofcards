 $(function() {
  $("#deal").on(mouseover, 'img', (function () {
    var src = $(this).attr("src").replace("images/deal.gif", "images/draw.gif");
    $(this).attr("src", src);
    });
  });


/*$(function() {
  $('.holding img').mouseover(function () {
    var src = $(this).attr("src").replace('hold.gif', 'hold2.gif');
    $(this).attr("src", src);
  });

  /*


$(function() {
  $('img .form1').on(click(function() {
    var src = $(this).attr("src".match)
  }))
  }))
});

//Hold or discard a card
function Hold(num) {
  if (!dealt) return;
  if (!held[num]) {
    held[num]=true;
    document.images[5+num].src="hold2.gif"
  }
  else {
    held[num]=false;
    document.images[5+num].src="hold.gif"
  }
}

.mouseover(function() {
            var src = $(this).attr("src").match(/[^\.]+/) + "over.gif";
            $(this).attr("src", src);



.on(click(function() {
            var src = $(this).attr("src")
            .replace("gaga.png", (function() {
              num');
            $(this).attr("src", src);

            $('#dealB').on(click(function() {
    $('#gagapic').attr('src', 'fname');
  })
