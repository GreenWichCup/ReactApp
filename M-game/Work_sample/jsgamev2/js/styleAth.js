//Code JQuery : Démarrage d'une partie 
$(function () {
  
  $('#start').click(function()
  {  
  $('<input>').insertBefore('#bSpan1');
  $('#span1').css('display','block');
  $('#start').css('display','none');
    });
  
    $('#bSpan1').click(function(){
      $('#joueur1').html($('input').val());
      $('#span1').css('display','none');
      $('#span2').css('display','block');
      $('input').insertBefore('#bSpan2');
      $('input').val('');
     
    })
  
    $('#bSpan2').click(function(){
      $('#joueur2').html($('input').val());
        $('#span2').css('display','none');
        $('#party').css('display','none');
        $('#coliseum').css('display','none');
        $('#canvas').css('display','block');
        $('#athDiv').css('display','flex');
    
  });
  });
  