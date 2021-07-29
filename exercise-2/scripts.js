let color="purple";
let number=10;
let word="cool";

if(color==="purple") {
    $(".one").css("background-color", "purple");
}

if(number>100) {
    $(".two").text("whoah, that's a big number.");
}
else {
    $(".two").text("just a regular number, please.");
}

if(word==="cool") {
    $(".three").text("Power of DOM");
}
else {
    $(".fourth").text("Power of DOM");
}