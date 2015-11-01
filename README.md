"ym-flip.js" - the plug-in for creating 3D flip effect of your images on a web-page.

Инструкция:
1. Подключите jQuery.
2. Подключите ym-flip.js
3. Оберните тэг "img" и следующий за ним "p" в "div" c классом flip-right или другим перечисленным ниже, как в примере.
4. Установите размер изображения, цвет текста и фона через data-атрибуты:
data-width="250"
data-height="250"
data-color="white"
data-bg="black"
Готово!

При наведении курсора на изображения будет срабатывать flip-effect.
Доступные классы: <br>

flip-right - horizontal right flip <br>
flip-left - horizontal left flip <br>
flip-down - vertical down flip <br>
flip-up - vertical up flip <br>

Пример:
<div class="flip-right" data-width="250" data-height="250" data-color="white" data-bg="black">
<img src="http://placehold.it/150x150">
<p>Some text</p>
</div>

flip-right<br>
flip-left<br>
flip-down<br>
flip-up<br>

