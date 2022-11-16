$('input').on('change', function() {
  $('body').toggleClass('pink');
  $('body').toggleClass('blue');

  $('body').removeClass('red');
  $('body').removeClass('pink');
  $('body').removeClass('blue');
  $('body').removeClass('grey');
  colorIndex++;  
  // $('body').toggleClass('pink');
  


  if(colorIndex >= colors.length) {
    colorIndex = 0;
  }

  $('body').toggleClass(colors[colorIndex]);
});



var audios = [document.getElementById('myAudio1'),
                 document.getElementById('myAudio2'),
                 document.getElementById('myAudio3'),
                 document.getElementById('myAudio4'),
                 document.getElementById('myAudio5'),
                 document.getElementById('myAudio6')]

    var audioIndex = 0;


var colors = ['zero', 'pink', 'blue', 'red', 'grey'];
var colorIndex =0;

function verwijderAlleKleuren(){
  for(var i=0; i<colors.length; i++) {
    $('body').removeClass(colors[i]);
  }
}
