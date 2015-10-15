/*Инструкция:
 * Подключите файл gr-flip.js
 
 * Добавьте в html
    <div class="flip-right">
        <img src="http://placehold.it/250x350">
        <p>Some text</p>
    </div>
    
    flip-right - horizontal right
    flip-left - horizontal left
    flip-down - vertical down
    flip-up - vertical up
 */

$(function(){
    $(".flip-right").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": "250px",
        "height": "250px",
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
        "color": "black",
        "padding": "10px",
        "text-align": "center",
        "background-color": "lightgray",
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
});

$(function(){
    $(".flip-left").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": "250px",
        "height": "250px",
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
        "color": "black",
        "padding": "10px",
        "text-align": "center",
        "background-color": "lightgray",
        "transform": "rotateY(180deg)"
        });
    $(".flip-left").hover(
        function(){
        $(this).css({"transform": "rotateY(-180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateY(0deg)"});
        }
    );
});

$(function(){
    $(".flip-down").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": "250px",
        "height": "250px",
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
        "color": "black",
        "padding": "10px",
        "text-align": "center",
        "background-color": "lightgray",
        "transform": "rotateX(180deg)"
        });
    $(".flip-down").hover(
        function(){
        $(this).css({"transform": "rotateX(-180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateX(0deg)"});
        }
    );
});

$(function(){
    $(".flip-up").wrap('<div class="pic-wrap"></div>');
    $(".pic-wrap").css({
        "width": "250px",
        "height": "250px",
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
        "color": "black",
        "padding": "10px",
        "text-align": "center",
        "background-color": "lightgray",
        "transform": "rotateX(180deg)"
        });
    $(".flip-up").hover(
        function(){
        $(this).css({"transform": "rotateX(180deg)"});
        },
        function(){
        $(this).css({"transform": "rotateX(0deg)"});
        }
    );
});