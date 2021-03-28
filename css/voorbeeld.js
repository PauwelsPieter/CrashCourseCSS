$('#toggle-css').click(function(){
    if($('head').find('link[rel=stylesheet]').length) {
        $('head link[rel=stylesheet]').remove();
    }
    else {
        $('head').append('<link rel="stylesheet" href="voorbeeld.css">');
    }
});