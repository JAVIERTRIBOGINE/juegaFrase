
$(document).ready(function () {

  // Escondo boton de ir a seccion alumno, y tabla finales
  $('#alumno').hide();
  $('#tablas').hide();
  $('#fms').hide();

  // declaro variables
  var color = ['3px solid green', '3px solid blue', '3px solid red'];
  var adj = [];
  var nomb = [];
  var verb = [];
  var col;
  var sentence;
  var campo;
  var f = 0;
  var wp = 0;

  // al clickar en enviar troceo la frase y cada palabra va en un span, a la
  // vez que ocupa una posicion del array 'w'
  $('#boton').click(function () {
      $('#fms').fadeIn(700);
      sentence = $('#sentence ').val();
      var w = sentence.split(' ');
      for (var i = 0; i < w.length; i++) {
        $('#reslt').append('<span class="wrds" id="' + i + '">  ' + w[i] + ' </span>');

        /* estos tres arrays albergaran los adjetivos, verbos y nombres
        (arrays de familia) seleccionadoes. Se llenan con 'xyz' para que su
        tamaño sea igual que el de la frase */
        adj[i] = 'xyz';
        nomb[i] = 'xyz';
        verb[i] = 'xyz';
      }
    });

  // al clickar, f apuntara al array de familia donde iran las palabras
  //  seleccionadas
  $('.fm').click(function () {
        f = ($(this).attr('id') - 10);
      });

  // al clickar en la palabra pueden pasar muchas cosas: o que se seleccione
  // si no ha estado seleccionado, o que se quite la seleccion si ha estado
  // seleccionado por la misma familia, o que marque error si se ha seleccionado
  // una palabra de otra familia
  $(document).on('click', '.wrds', function (e) {
      wp = $(this).attr('id');
      col = $(this).attr('border');
      console.log(col);
      if (col === undefined || col == 'none') {
        $(this).css('border', color[f]);
        $(this).attr('border', color[f]);
        valoresArray(adj, nomb, verb, color[f].substring(10), wp, $(this).text());
      }else if (color[f] != col) {
        alert('esta palabra pertenece a otra familia');
      }else {
        $(this).css('border', 'none');
        $(this).attr('border', 'none');
        valoresArray(adj, nomb, verb, color[f].substring(10), wp, 'xyz');
      }

      console.log(col);
      console.log(color[f]);

    });

  // al clickar validamos las selecciones y aparecen las tablas de familia
  // con las palabras seleccionadas por cada familia(adj, verb, nomb)
  $('#validar').click(function () {
      $('#fms').hide();
      $('#tablas').fadeIn(600);
      repasarArray(adj, $('#adj').attr('id'));
      repasarArray(nomb, $('#nomb').attr('id'));
      repasarArray(verb, $('#verb').attr('id'));
      $('#alumno').fadeIn(1500);
      console.log(sentence);
    });

  // al clickar transformamos los arrays a json, los almacenamos en local y
  // nos vamos a la pagina de alumno
  $('#alumno').click(function () {
        jsonAdj = JSON.stringify(adj);
        jsonNomb = JSON.stringify(nomb);
        jsonVerb = JSON.stringify(verb);
        localStorage.setItem('adj', jsonAdj);
        localStorage.setItem('nomb', jsonNomb);
        localStorage.setItem('verb', jsonVerb);
        localStorage.setItem('frase', sentence);
        console.log(jsonVerb);
        console.log(jsonAdj);
        console.log(jsonNomb);
        console.log(sentence);

      });

});