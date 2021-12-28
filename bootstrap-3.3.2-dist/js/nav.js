// menu에 대한 js
$('#nav').load("../../nav.html nav",function(){
    
    var url = window.location;
    var path = url.href.split('/');
    var file_name = path.pop();
    
    //Class名のactiveを削除する
    $('#navbar ul').children('.active').removeClass("active");

    //メニューのActive化
    if (file_name.startsWith("index.html")){
        $("#nav-index").addClass("active");
    } else if (file_name.startsWith("concept.html")){
        $("#nav-concept").addClass("active");
    } else if (file_name.startsWith("menu.html")){
        $("#nav-menu").addClass("active");
    } else if (file_name.startsWith("photo.html")){
        $("#nav-photo").addClass("active");
    } else if (file_name.startsWith("info.html")){
        $("#nav-info").addClass("active");
    }
});