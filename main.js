function next(){
  if($('.last').hasClass('active') === false){ // se l'ultima immagine non ha la classe active
  $('.active').removeClass('active').next().addClass('active'); // rimuovi la classe active dall'attuale e passala alla prossima
} else { // se l'ultima immagine ha la classe active
  $('.active').removeClass('active'); // rimuovo la classe active dall'attuale
  $('.first').addClass('active'); // assegno la classe active alla prima
}
}
function prev(){
  if($('.first').hasClass('active') === false){ // se la prima immagine non ha la classe active
  $('.active').removeClass('active').prev().addClass('active'); // rimuovi la classe active dall'attuale e passala alla precedente
} else { // se la prima immagine ha la classe active
  $('.active').removeClass('active'); // rimuovo la classe active dall'attuale
  $('.last').addClass('active'); // assegno la classe active all'ultima
}
}

$(document).ready(function(){ // carica la funzione solo quando ha caricato il DOM
  $('.images > img').css('width','900px')
  $('.next').click(function(){ // al click di next esegui
    next();
  })
  $(document).keydown(function(e){
    if(e.keyCode === 39){
      next()
    }
  })
  $('.prev').click(function(){ // al click di prev esegui
    prev();
  })
  $(document).keydown(function(e){
    if(e.keyCode === 37){
      prev()
    }
  })
  $('.fa-circle').click(function(){ // al click dei punti esegui
    var pos = $(this).index(); /* trova la posizione del punto cliccato
    (al posto della variabile potrei mettere questo comando in .eq() e funzionerebbe,
    ma cosi si legge meglio)*/
    $('.fa-circle, img').removeClass('active'); // rimuovi da tutti i punti e da le immagini l'active
    $(this).addClass('active'); // aggiungo al punto cliccato la classe active
    $('img').eq(pos).addClass('active'); /* aggiungo all'immagine corrispondente
    al numero di posizione del punto la classe active */
  })
})
