$('#loding').fadeOut(2000, function(){
    $('#loding').css({'display':'none'})
    location.href='#t1'
    $('#t1').css({'display':'block'})
    
});

$(document).ready(function() {
    //スクロールイベント
    $('.page').scroll(function(e){
        const targetId =  "#" + $(e.target).children().context.id;
        console.log(targetId)
        var scrollTop = $(targetId).scrollTop();
        var innerHeight = $(targetId).innerHeight();
        var scrollHeight = $(targetId).prop('scrollHeight');
        if (scrollTop + innerHeight >= scrollHeight) {
            if (targetId == '#p1') {
                location.href='#t2'
            }
            if (targetId == '#p2') {
                location.href='#t3'
            }
            if (targetId == '#p3') {
                location.href='#t4'
            }
            return true;
        } else {
            return false;
        }
    });

    $('.show-sub').click(function() {
        $('#p1-main').css('transform', 'translateX(175%)');    
        setTimeout(() => {
            $('#p1-main').css('display', 'none');
        }, 100);
        $('#p1-sub1').css('display', 'block')
        setTimeout(() => {
            $('#p1-sub1').css('transform', 'translateX(0)');    
        }, 100);
        
    })

    $('#shop-info').click(function() {
        $('#p1-sub1').css('transform', 'translateX(175%)');    
        setTimeout(() => {
            $('#p1-sub1').css('display', 'none');    
        }, 100);
        $('#p1-main').css('display', 'block');
        setTimeout(() => {
            $('#p1-main').css('transform', 'translateX(0)');    
        }, 100);
    })

    $(window).bind('hashchange', function() {
        var nowPageName =  document.location.href.split("#");
        console.log(nowPageName)
        switch(nowPageName[nowPageName.length-1]) {
            case 't1':
                $('#p1-sub1').css('transform', 'translateX(175%)');    
                setTimeout(() => {
                    $('#p1-sub1').css('display', 'none');    
                }, 100);
                $('#p1-main').css('display', 'block');
                setTimeout(() => {
                    $('#p1-main').css('transform', 'translateX(0)');    
                }, 100);
              break
            case 't2':
                
              break
            case 't3':
                
                break 
            case 't4':
                
                break 
          
            default:
              break
          }
   });

});
