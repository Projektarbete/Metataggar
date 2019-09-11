var bgcolors = ['#FFFFFF', '#000000', '#298ACC',];

$(function () {
    $('#color-change').css({
        background: bgcolors[Math.floor(Math.random() * bgcolors.length)]
        color: bgcolors[Math.floor(Math.random() * bgcolors.length)]
    });
});