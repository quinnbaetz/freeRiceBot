setInterval(function(){
    var choice = Math.floor(Math.random()*4)
    var selector = '.answer-item';
    var answerNode =  $(selector)[choice];
    ExternalGame.submitAnswer(answerNode.rel);
}, 500);
