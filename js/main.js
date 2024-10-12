$("button:first").text("CLICK ME for science")
$(".panel:first > p").text("Thank you for clicking me.")

$(".mod").hover(function(){
  $(this).css("width", "100%", "transition", "10s");
  }, function() {
    $(this).animate({
      width: "50%",
    })
  });