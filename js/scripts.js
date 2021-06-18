$(document).ready(function() {
  $("#lang-form").submit(function(event) {
    event.preventDefault();
    const val1 = parseInt($("#fav-color").val());
    const val2 = parseInt($("#location").val());
    const val3 = parseInt($("#rain").val());
    const val4 = parseInt($("#breakfast").val());
    const val5 = parseInt($("#animal").val());

    if (val1 === 0 || val2 === 0 || val3 === 0 || val4 === 0 || val5 === 0) {
      language = "try again";
    } 
    else if (val1 === 1 && val2 === 1 && val3 === 1 && val4 === 1 && val5 === 1) {
      language = "Swift";
      }
    else if (val1 + val2 + val3 + val4 + val5 >= 8) {
      language = "Rust";
    }
    else if (val1 + val2 + val3+ val4+ val5 <= 7) {
      language = "Python";
    }
    else {
    }

  $("#results").show();
  $("#language").text(language);
  });
});