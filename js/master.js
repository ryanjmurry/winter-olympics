
$(document).ready(function() {

  var nameInput = prompt("What is your first name?");
  var nameCaps = nameInput.toUpperCase().charAt(0) + nameInput.substr(1);
  $(".username").text(nameCaps);

  $("#questions form").submit(function(event) {
    var work = parseInt($("#work").val());
    var trip = parseInt($("#trip").val());
    var dinner = parseInt($("#trip").val());
    var morning = parseInt($("#trip").val());
    var eggs = parseInt($("#trip").val());
    var total = work + trip + dinner + morning + eggs;
    if (total === 0) {
      $("#zero").show();
    } else if (total > 0 && total <= 5) {
      $("#endurances").show();
    } else if (total > 5 && total <=10) {
      $("#tricks"),show();
    } else if (total > 10 && total <=15) {
      $("#games").show();
    } else if (total > 15 && total <=20) {
      $("#downhills").show();
    } else {
      $("#races").show();
    }
    event.preventDefault();
  });
});
