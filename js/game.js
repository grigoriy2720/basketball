function doIt() {
  i = 60;
  let idInt = setInterval(function() {
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
    console.log(document.getElementById("platform").offsetRight);
    if (xMove <= document.getElementById("platform").offsetLeft) {
      xMove = document.getElementById("platform").offsetLeft;
    }
    playerJ.style.left = xMove + "px";
  }
  if (['D', 'd'].includes(event.key)) {
    xMove += 10;
    if (xMove >= document.getElementById("platform").offsetWidth + document.getElementById("platform").offsetLeft - playerJ.offsetWidth) {
      xMove = document.getElementById("platform").offsetWidth + document.getElementById("platform").offsetLeft - playerJ.offsetWidth;
    }
    playerJ.style.left = xMove + "px";
  }
})
