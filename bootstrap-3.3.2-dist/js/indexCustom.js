var img_Num = 0;
var play_Flag = 0;
var img_Array = new Array();
  img_Array[1]="/sampleimg/0003.jpg";
  img_Array[2]="/sampleimg/0005.jpg";

function menuActive(){
  //TODO aria-expandedの値をチェックし、処理する事(メニューボタン押下状態)
  var targetbutton = document.getElementById('menuButton').getAttribute('aria-expanded');
  console.log(typeof(targetbutton));
  if(play_Flag == 0){
    //ボタンクリックされている状態
    play_Flag = 1;
    $('section').addClass("showGray");
    $('.navbar').fadeOut(100, function(){
      $('.navbar').addClass("navbar_sub");
    }).fadeIn(100);
    $("a").toggleClass("open");
    $("h1").addClass("fade");

    //TODO  삭제예정
    console.log("클릭되어져있는 상태 : "+document.getElementById('menuButton').getAttribute('aria-expanded'));
  }else{
    //ボタンクリックされていない状態
    play_Flag = 0;
    $('section').removeClass("showGray")
    
    $('.navbar').fadeOut(100, function(){
     $('.navbar').removeClass("navbar_sub");
    }).fadeIn(100);  
    $("a").toggleClass("open");
    $("h1").addClass("fade");
    
    //TODO 삭제예정
    console.log("클릭되어져있지 않은 상태 : "+document.getElementById('menuButton').getAttribute('aria-expanded'));
  }
}

function showImage(){
  if(img_Num == 2){img_Num = 0;}
  $('section').fadeOut(1000, function(){
    $('section').css({"background":"url("+img_Array[img_Num]+")",
                      'background-repeat' : 'no-repeat',
                      'background-position':'center center',
                      'background-size':'cover'})
  }).fadeIn(1000);  
  img_Num++;
  setTimeout(showImage,6000);
}

$(document).ready(function() { 
  showImage();
});

