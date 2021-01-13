$(document).ready(function(){ // carica la funzione solo quando ha caricato il DOM
  $('.next').click(function(){ // al click di next esegui
    if($('.last').hasClass('active') === false){ // se l'ultima immagine non ha la classe active
    $('.active').removeClass('active').next().addClass('active'); // rimuovi la classe active dall'attuale e passala alla prossima
  } else { // se l'ultima immagine ha la classe active
    $('.active').removeClass('active'); // rimuovo la classe active dall'attuale
    $('.first').addClass('active'); // assegno la classe active alla prima
  }
  })
  $('.prev').click(function(){ // al click di prev esegui
    if($('.first').hasClass('active') === false){ // se la prima immagine non ha la classe active
    $('.active').removeClass('active').prev().addClass('active'); // rimuovi la classe active dall'attuale e passala alla precedente
  } else { // se la prima immagine ha la classe active
    $('.active').removeClass('active'); // rimuovo la classe active dall'attuale
    $('.last').addClass('active'); // assegno la classe active all'ultima
  }
  })
  $('.fa-circle').click(function(){ // al click dei punti esegui
    var pos = $(this).index(); /* trova la posizione del punto cliccato
    (al posto della variabile potrei mettere questo comando in .eq() e funzionerebbe,
     ma cosi si legge meglio)*/
    if($(this).hasClass('active') === false){ // se il punto cliccato non ha la classe active
      $('.fa-circle, img').removeClass('active'); // rimuovi da tutti i punti e da le immagini l'active
      $(this).addClass('active'); // aggiungo al punto cliccato la classe active
      $('img').eq(pos).addClass('active'); /* aggiungo all'immagine corrispondente
       al numero di posizione del punto la classe active */
    }
  })
})
