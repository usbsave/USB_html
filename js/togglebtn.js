$(document).ready(function() {
  $(".question-container").click(
   function() {
    $(this).find(".question-desc").toggle();
    $(this).find(".question-btn").toggle();
   }
  );

  $(".news-container").click(
   function() {
    $(this).find(".news-desc").toggle();
    $(this).find(".news-btn").toggle();
   }
  );

});

function agreeFunction() {
  var x = document.getElementById("agreeterms");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
};
