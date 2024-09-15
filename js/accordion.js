var acc = $(".accordion"); // Jquery fetch Accordion items to add functionality
var i;

/*

// KEEPING OLD CODE JUST IN CASE NEW ONE EXPLODES OR SOMETHING

for (i = 0; i < acc.length; i++) { // For each Accordion item
  acc[i].addEventListener("click", function() { // give a clicky listener
    this.classList.toggle("active");
    var panel = this.nextElementSibling; // that targets the panel below it
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Hide content
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Extend content
    } 
  });
}
*/

$(".accordion").click(function() {
  $(this).toggleClass("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null; // Hide content
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; // Extend content
  } 

});

