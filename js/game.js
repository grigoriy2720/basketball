function doIt() {
  i = 60;
  var idInt = setInterval(function() {
    if (i <= 20) {
      document.getElementById("siteTime").style.color = "red";
    }
    document.getElementById("siteTime").innerHTML = i;
    if (i == 0) {
      clearInterval(idInt);
      document.getElementById("Timer").innerHTML = "Игра окончена";
    }
      // console.log(playerJ.style.left);
    i = i - 1;
  }, 1000);
}
playerJ = document.getElementById("player");
x = document.getElementById("player").offsetLeft;
let xMove = x;
// playerJ.style.left = 300 + "px";
document.addEventListener('keydown', function(event){
  if (['A','a'].includes(event.key)) {
    xMove -= 10;
    playerJ.style.left = xMove + "px";
  }
  if (['D', 'd'].includes(event.key)) {
    xMove += 10;
    playerJ.style.left = xMove + "px";
  }
})
