$(document).ready(function() {
  $("#lang-form").submit(function(event) {
    event.preventDefault();


  $("#results").show();
  $("#language-result").text(language);
  });

});