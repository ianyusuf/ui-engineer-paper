function preLoad() {
    a1 = new Image; a1.src = 'img/works/works-1.png';  
    a2 = new Image; a2.src = 'img/works/works-2.png';
    a3 = new Image; a3.src = 'img/works/works-3.png';
    a4 = new Image; a4.src = 'img/works/works-4.png';
}

function im(image) {
    e1 = $('#a');
    e1.addClass('slideup'),
    e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('slideup');
        }),    
    document.getElementById(image[0]).src = eval(image + ".src");
    
}

$(function(){
    $('#works-click').click(function(){
        e1 = $('#a');
        e1.addClass('slideup');
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('slideup');
        });
    });
});