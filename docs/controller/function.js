$(function(){
    $(".open-btn").on("click", function () {
        $(".sidebar").toggleClass("active");
      });
      $(".close-btn").on("click", function () {
        $(".sidebar").removeClass("active");
      });
})