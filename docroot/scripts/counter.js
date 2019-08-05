$(document).ready(function() {

    // Route key presses to increment the corresponding counter.
    $(this).keypress(function(e) {
        let key = window.event ? e.keyCode : e.which;
        let char = String.fromCharCode(key);

        console.log(key, char);

        let counter = $('.increment-' + char);
        counter.trigger('increment');
    });

    // Trigger increment/decrement on button press.
    $('.increment').on('click', function(){
        $(this).parents('.counter').trigger('increment');
    });
    $('.decrement').on('click', function(){
        $(this).parents('.counter').trigger('decrement');
    });

    // Bind increment/decrement functions.
    $('.counter')
        .on('increment', function(){ crement($(this), 'increment')})
        .on('decrement', function(){ crement($(this), 'decrement')});

    // A generic function for incrementing/decrementing a counter.
    function crement(element, mode) {
        let countDisplay = element.find('.count');
        let currentCount = parseInt(countDisplay.text(), 10);
        let newCount = mode == "increment" ? currentCount + 1 : Math.max(currentCount -1 , 0);
        countDisplay.text(newCount);
    }

    console.log(counters);
});
