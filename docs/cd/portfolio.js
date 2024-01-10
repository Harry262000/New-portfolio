(function() {
    var words = [
            ' Innovation',
            ' Discovery',
            ' Curiosity',
            ' Machine Learning',
            ' Research'
        ],
        i = 0;
    setInterval(function() {
        $('#changingword').fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 2000);

})();