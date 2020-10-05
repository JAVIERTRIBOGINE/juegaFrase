function repasarArray(array, id) {
  var m = 0;
  while (m < array.length) {
    if (array[m] == 'xyz') {
      array.splice(m, 1);
    }else {
      m++;
    }
  }

  for (var n = 0; n < array.length; n++) {
    $('#' + id).append('<tr><td>' + array[n] + '</td></tr>');
  }
}

function valoresArray(adj, nomb, verb, color, wPos, word) {
  if (color == 'green') {
    adj.splice(wPos, 1, word);
  }else if (color == 'blue') {
    verb.splice(wPos, 1, word);
  }else {
    nomb.splice(wPos, 1, word);
  }

}

function evaluarPalabra(colorClick, colorFam, palabras, palabra) {
  console.log(colorClick);
  console.log(colorFam);
  console.log(palabras);
  console.log(palabra);
  for (n = 0; n < palabras.length; n++) {
    if (palabras[n] == palabra) {
      if (colorClick == colorFam) {
        return 'rep';
      }else {
        return 'ok';
      }
    }
  }
  return 'fail';
}

function marcador(contador, oks, totPalabras) {
  let fails = contador - oks;
  let left = totPalabras-oks;
  var avr=Math.round(0);
  if (oks != 0) var avr = Math.round(oks * 100 / contador);

  let color = avr>80.00?"green":avr>50.00?"blue":"red";
  
  $('#marcador').css('color', color).html('<td><h4>' + contador  +
   '</h4></td><td><h4>'+oks+'</h4></td><td><h4>'+fails+'</h4></td><td id="leftCell"><h4>'+left+'</h4></td><td><h4>' + avr  + ' %  </h4></td>');
}

function marcadoresFinalPartida(){
  $('#fms').fadeOut(600);
  $('#colCorrec').fadeOut(600);
  $('#final').html('<td id="celdFin" colspan="4">FINAL!!</td>');
  $('#volver').fadeIn(500);
}

function palabraSeleccionada(){
  $('#correc').html('<h3 class="corrRep"> PALABRA SELECCIONADA </h3>');
}

function noEsCorrecto(){
  $('#correc').html('<h3 class="corrFail"> NO ES CORRECTO! </h3>');
}