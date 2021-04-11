$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#ingredientes').on('dblclick', function() {
    $(this).css("color",'red');
  });

  $('#preparacion').on('dblclick', function() {
    $(this).css("color",'red');
  });
  
  $("#panqueque").click(function(){
    $(".cardp1").toggle(800);
  });

  $("#tiramisu").click(function(){
    $(".cardp2").toggle(800);
  });

  $("#plateada").click(function(){
    $(".cardp3").toggle(800);
  });
})
