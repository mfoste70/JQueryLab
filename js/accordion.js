

// KEEPING OLD CODE JUST IN CASE NEW ONE EXPLODES OR SOMETHING
// Please disregard the code graveyard, JQuery is nice but it makes me so tired. The actual code is at the bottom.

// for (i = 0; i < acc.length; i++) { // For each Accordion item
//   acc[i].addEventListener("click", function() { // give a clicky listener
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling; // that targets the panel below it
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null; // Hide content
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px"; // Extend content
//     } 
//   });
// }


// $(".accordion").click(function() {
//   $(this).toggleClass("active");
//   var panel = this.nextElementSibling;
//   if (panel.style.maxHeight) {
//     panel.style.maxHeight = null; // Hide content
//   } else {
//     panel.style.maxHeight = panel.scrollHeight + "px"; // Extend content
//   } 
// });

// $(document).ready(function() {
//   $(".accordion").click(function() {
//     $(this).toggleClass("active");
    
//     // Toggle the panel visibility
//     var panel = $(this).next(".panel");

//     if (panel.css("max-height")) { // Check if panel is currently expanded
//       panel.css("max-height", null); // Hide content
//     } else {
//       panel.css("max-height", panel.scrollHeight() + "px"); // Extend content
//     }
//   });
// });

$(".accordion").click(function() {
  $(this).toggleClass("active");
  let panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null; // Hide content
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; // Extend content
  } 
});