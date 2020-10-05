
$(document).ready(function () {
    $('#volver').hide();
    $('#fms').hide();
    var jsonNomb = localStorage.getItem('nomb');
    var jsonVerb = localStorage.getItem('verb');
    var jsonAdj = localStorage.getItem('adj');
    var sentence = localStorage.getItem('frase');
    var palabras = [];
    var aciertos = [];
    var noun;
    var evCode;
    var count = 0;
    var oks = 0;
    palabras.push(JSON.parse(jsonAdj)).push(JSON.parse(jsonVerb)).push(JSON.parse(jsonNomb)); 
    var totNouns = (palabras[0].length) + (palabras[1].length) + (palabras[1].length);
    console.log('total palabras: ' + totNouns);
    console.log('adjetivos: ' + palabras[0].length);
    console.log('verbos: ' + palabras[1].length);
    console.log('nombres: ' + palabras[2].length);
    var color = ['3px solid green', '3px solid blue', '3px solid red'];
    var color = ['3px solid green', '3px solid blue', '3px solid red'];
    $('#boton').click(function () {
        $('#fms').fadeIn(700);
        var w = sentence.split(' ');
        for (var i = 0; i < w.length; i++) {
          $('#reslt').append('<span class="wrds" id="' + i + '">  ' + w[i] + ' </span>');
        }
      });

    $('.fm').click(function () {
          f = ($(this).attr('id') - 10);
          noun = $(this).val();
        });

    $(document).on('click', '.wrds', function () {
        count++;
        evCode = evaluarPalabra($(this).attr('border'), color[f], palabras[f], $(this).text());
        console.log(evCode);
        if (evCode == 'ok') {
          oks++;
          if ((oks == totNouns) || (count > 100)) { //se acertaron todas las palabras
            marcadoresFinalPartida();
          }else{
            $(this).css('border', color[f]);
            $('#correc').html('<h3 class="corrOk"> CORRECTO! </h3>');
            $('#' + noun).append('<tr><td>' + $(this).text() + '</td> </tr> ');
          }

          
        }else if (evCode == 'rep') {
          count--;
          palabraSeleccionada();
        }else {
            noEsCorrecto();
        }
        marcador(count, oks, totNouns);
      });
  });