function changesize_text(classname, rate)
{
    var scale = $(window).width() / rate;
    var elem = document.getElementsByClassName(classname);
    for(var i = 0; i < elem.length; i ++)
        elem[i].style.fontSize = scale + 'px';
}

function changesize_img(classname, w, h)
{
    var width = ($(window).width() / w) + 'px';
    var height = ($(window).height() / h) + 'px';
    var elem = document.getElementsByClassName(classname);
    for (var i = 0; i < elem.length; i++)
    {
        elem[i].style.width = width;
        elem[i].style.height = height;
    }
}

