function changesize_text(classname, rate)
{
    var scale = $(window).width() / rate;
    var elem = document.getElementsByClassName(classname);
    for(var i = 0; i < elem.length; i ++)
        elem[i].style.fontSize = scale + 'px';
}

function changesize_pic(classname, rate)
{
    var width = ($(window).width() / rate) + 'px';
    var elem = document.getElementsByClassName(classname);
    for (var i = 0; i < elem.length; i++)
        elem[i].style.width = width;
}