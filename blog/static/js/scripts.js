$('#menu').css('left','-275px');
$('#menu').hide();
$('#other').css('margin-left','0px');


$('#open-m').on('click', function(){
  if(screen.width>601){
    $('#menu').show();
    $('#menu').css('left','0px');
    $('#other').css('margin-left','275px');
  }
  else{
    $('#menu').slideDown();
    $('#other').slideUp();
  }
});

$('#close-m').on('click', function(){
  if(screen.width>601){
    $('#menu').css('left','-275px');
    $('#other').css('margin-left','0px');
    $('#menu').hide();
  }
  else{
    $('#menu').slideUp();
    $('#other').slideDown();
  }
});
