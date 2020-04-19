import $ from "jquery";
window.$ = $;

$(document).ready(function () {
  $(".joinInput").on("focus", function () {
    $(".login").addClass("clicked");
  });
  $(".login").on("submit", function (e) {
    e.preventDefault();
    $(".login").removeClass("clicked").addClass("loading");
  });
  $(".resetbtn").on("click", function (e) {
    e.preventDefault();
    $(".login").removeClass("loading");
  });
});
