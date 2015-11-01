$(function(){
    var widthRight = $(".flip-right").data("width");
    var heightRight = $(".flip-right").data("height");
    var colorRight = $(".flip-right").data("color");
    var bgRight = $(".flip-right").data("bg");
	
    $(".flip-right").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": widthRight,
        "height": heightRight,
        "perspective": "1000px"
        });
    $(".flip-right").css({
        "width": "100%",
        "height": "100%",
        "box-shadow": "0 8px 6px -6px black",
        "transform-style": "preserve-3d",
        "transition": "all .9s"
        });
    $(".flip-right img").css({
        "position" : "absolute",
        "z-index" : "2",
        "width" : "100%",
        "height" : "100%",
        "backface-visibility":"hidden",
        "transform": "rotateY(0deg)"
        });
    $(".flip-right p").css({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "color": colorRight,
        "text-align": "center",
        "background-color": bgRight,
        "transform": "rotateY(180deg)"
        });
    $(".flip-right").hover(
        function(){
        $(this).css({"transform": "rotateY(180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateY(0deg)"});
        }
    );


    var widthLeft = $(".flip-left").data("width");
    var heightLeft = $(".flip-left").data("height");
    var colorLeft = $(".flip-left").data("color");
    var bgLeft = $(".flip-left").data("bg");
    
    $(".flip-left").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": widthLeft,
        "height": heightLeft,
        "perspective": "1000px"
        });
    $(".flip-left").css({
        "width": "100%",
        "height": "100%",
        "box-shadow": "0 8px 6px -6px black",
        "transform-style": "preserve-3d",
        "transition": "all .9s"
        });
    $(".flip-left img").css({
        "position" : "absolute",
        "z-index" : "2",
        "width" : "100%",
        "height" : "100%",
        "backface-visibility":"hidden",
        "transform": "rotateY(0deg)"
        });
    $(".flip-left p").css({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "color": colorLeft,
        "text-align": "center",
        "background-color": bgLeft,
        "transform": "rotateY(-180deg)"
        });
    $(".flip-left").hover(
        function(){
        $(this).css({"transform": "rotateY(-180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateY(0deg)"});
        });

    var widthDown = $(".flip-down").data("width");
    var heightDown = $(".flip-down").data("height");
    var colorDown = $(".flip-down").data("color");
    var bgDown = $(".flip-down").data("bg");
    
    $(".flip-down").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": widthDown,
        "height": heightDown,
        "perspective": "1000px"
        });
    $(".flip-down").css({
        "width": "100%",
        "height": "100%",
        "box-shadow": "0 8px 6px -6px black",
        "transform-style": "preserve-3d",
        "transition": "all .9s"
        });
    $(".flip-down img").css({
        "position" : "absolute",
        "z-index" : "2",
        "width" : "100%",
        "height" : "100%",
        "backface-visibility":"hidden",
        "transform": "rotateX(0deg)"
        });
    $(".flip-down p").css({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "color": colorDown,
        "text-align": "center",
        "background-color": bgDown,
        "transform": "rotateX(-180deg)"
        });
    $(".flip-down").hover(
        function(){
        $(this).css({"transform": "rotateX(-180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateX(0deg)"});
        });
    
    var widthUp = $(".flip-up").data("width");
    var heightUp = $(".flip-up").data("height");
    var colorUp = $(".flip-up").data("color");
    var bgUp = $(".flip-up").data("bg");
    
    $(".flip-up").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": widthUp,
        "height": heightUp,
        "perspective": "1000px"
        });
    $(".flip-up").css({
        "width": "100%",
        "height": "100%",
        "box-shadow": "0 8px 6px -6px black",
        "transform-style": "preserve-3d",
        "transition": "all .9s"
        });
    $(".flip-up img").css({
        "position" : "absolute",
        "z-index" : "2",
        "width" : "100%",
        "height" : "100%",
        "backface-visibility":"hidden",
        "transform": "rotateX(0deg)"
        });
    $(".flip-up p").css({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "color": colorUp,
        "text-align": "center",
        "background-color": bgUp,
        "transform": "rotateX(180deg)"
        });
    $(".flip-up").hover(
        function(){
        $(this).css({"transform": "rotateX(180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateX(0deg)"});
        });
});
