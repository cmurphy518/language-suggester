$(document).ready(function() {
  $("#lang-form").submit(function(event) {
    event.preventDefault();
    const val1 = parseInt($("#fav-color").val());
    const val2 = parseInt($("#location").val());
    const val3 = parseInt($("#rain").val());
    const val4 = parseInt($("#breakfast").val());
    const val5 = parseInt($("#animal").val());

    if (val1 + val2 + val3 + val4 + val5 <= 5) {
      language = "try again";
    }
    else if (val1 + val2 + val3 + val4 + val5 >= 10) {
      language = "Python";
    }
    else if (val1 + val2 + val3 + val4 + val5 >= 15) {
      language = "Rust";
    }
    else if (val1 + val2 + val3 + val4 + val5 >= 16) {
    language = "Swift";
    }
    else {
      language = "try again";
    }

  $("#results").show();
  $("#language").text(language);
  });
});