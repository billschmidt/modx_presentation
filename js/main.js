$(document).ready(function(){
    var effects = ['fade', 'drop', 'puff'];
    $('body').on('keypress', function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
        var cur = $('section.active');
        if (code == 37){
            // back
            var prev = cur.prev('section');
            if (prev.length == 0) return;
            window.location.hash = $('section').index(prev);
        } else if (code == 39){
            // forward
            var next = cur.next('section');
            if (next.length == 0) return;
            window.location.hash = $('section').index(next);
        }
    });
    $(window).on('hashchange', function(){
        $('section.active').effect(effects[Math.floor(Math.random() * effects.length)], {mode: 'hide'}, 500, function(){
            $(this).toggleClass('active');
            var index = window.location.hash.substr(1);
            $('section:eq('+index+')').effect('fade', {mode: 'show'}, 500, function(){
                $(this).toggleClass('active');
            });
        });
    });
});