$(function(){
    var widthRight = $(".flip-right").data("width");
    var heightRight = $(".flip-right").data("height");
    var colorRight = $(".flip-right").data("color");
    var bgRight = $(".flip-right").data("bg");
	
    $(".flip-right").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": widthRight,
        "height": heightRight,
        "perspective": "1000px",
        "-webkit-perspective": "1000px",
        "-moz-perspective": "1000px",
        "-ms-perspective": "1000px",
        "-o-perspective": "1000px"
        });
    $(".flip-right").css({
        "width": "100%",
        "height": "100%",
        "box-shadow": "0 8px 6px -6px black",
        "transform-style": "preserve-3d",
        "-webkit-transform-style": "preserve-3d",
        "transition": "all .9s",
        "-webkit-transition": "all .9s",
        "-moz-transition": "all .9s",
        "-ms-transition": "all .9s",
        "-o-transition": "all .9s"
        });
    $(".flip-right img").css({
        "position" : "absolute",
        "z-index" : "2",
        "width" : "100%",
        "height" : "100%",
        "backface-visibility":"hidden",
        "-webkit-backface-visibility":"hidden",
        "-moz-backface-visibility":"hidden",
        "-ms-backface-visibility":"hidden",
        "-o-backface-visibility":"hidden",
        "transform": "rotateY(0deg)",
        "-webkit-transform": "rotateY(0deg)",
        "-moz-transform": "rotateY(0deg)",
        "-ms-transform": "rotateY(0deg)",
        "-o-transform": "rotateY(0deg)"
        });
    $(".flip-right p").css({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "color": colorRight,
        "text-align": "center",
        "background-color": bgRight,
        "transform": "rotateY(180deg)",
        "-webkit-transform": "rotateY(180deg)",
        "-moz-transform": "rotateY(180deg)",
        "-ms-transform": "rotateY(180deg)",
        "-o-transform": "rotateY(180deg)"
        });
    $(".flip-right").hover(
        function(){
        $(this).css({
            "transform": "rotateY(180deg)",
            "-webkit-transform": "rotateY(180deg)",
            "-moz-transform": "rotateY(180deg)",
            "-ms-transform": "rotateY(180deg)",
            "-o-transform": "rotateY(180deg)"
            });
        },
        function(){
        $(this).css({
            "transform": "rotateY(0deg)",
            "-webkit-transform": "rotateY(0deg)",
            "-moz-transform": "rotateY(0deg)",
            "-ms-transform": "rotateY(0deg)",
            "-o-transform": "rotateY(0deg)"
            });
        }
    );
});
