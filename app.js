//Javascript begin
var pics = [
    "imgs/kitty_bed.JPG",
    "imgs/kitty_basket.JPG",
    "imgs/kitty_laptop.jpg",
    "imgs/kitty_door.jpg",
    "imgs/kitty_sink.JPG",
    "imgs/kitty_wall.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");

btn.addEventListener("click", function(){
    img.src = "imgs/kitty_sink.JPG";

});