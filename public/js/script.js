console.log("jscript working");

$(document).ready(function() {
  console.log("jquery hitting")
  $(".dropdown-trigger").dropdown()
  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));
});
