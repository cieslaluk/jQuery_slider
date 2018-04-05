$(document).ready(function () {
    /*Zmienne*/
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    /*Szerokość kontenera slideShow*/

    slideShow.css('width', slideCount * 100 + '%');


    /* Za pomocą metody .find() znajdź w kontenerze slideShow wszystkie slajdy z klasą .single-slide. Następnie każdemu z tych elementów nadaj szerokość równą szerokości jednego slajdu w prodentach (zmienna slideWidth + ”%”) oraz ustaw lewy margines równy szerokości slajdu w procentach razy index obecnie iterowanego elementu - dla 4 slidów to 100%/5 czyli 25% (do iteracji po elementach wykorzystaj metodę .each() - https://api.jquery.com/each/ ) */

    slideShow.find('.single-slide').each(function (index) {
        $(this).css({
            width: slideWidth + '%',
            marginLeft: index * slideWidth + '%',
        });

    });


    function slide(newSlideIndex) {
        
        /*if(newSlideIndex < 0 || newSlideIndex >= slideCount){
            return;
        } */
        
        if(newSlideIndex < 0){
            slide(slideCount-1);
              return;
        }
        
          if(newSlideIndex >= slideCount){
            slide(0);
              return;
        }
        
        
        slideShow.animate({
            marginLeft: -100 * (newSlideIndex) + "%"
        }, 1000, function () {

            slideIndex = newSlideIndex;
        });
    }
    
    /* Nawigacja w prawo */
    $('.next-slide').click(function () {

        slide(slideIndex + 1);
    })

    
    

    /* Nawigacja w lewo*/
    $('.prev-slide').click(function () {

        slide(slideIndex - 1);

    });
    
    
    
    $(document).keydown(function(event){
      
        var pressedKey = event.keyCode;
        
        switch (pressedKey) {
            case 37:
                slide(slideIndex - 1);
                break;
                
            case 39:
                slide(slideIndex + 1);
                break;
        }

    })
    
  
    

});





/*Dla nawigacji (elementy z klasami .prev-slide i .next-slide) przypisz obsługę zdarzenia click. Sprawdź, czy obsługa zdarzenia click działa na tej nawigacji. Następnie wewnątrz funkcji obsługującej zdarzenie click wywołaj funkcję slide() (jej definicja jest w kolejnym punkcie), która przyjmuje parametr slideIndex – 1 jeśli przewijamy w lewo i slideIndex + 1 jeśli przewijamy w prawo.*/