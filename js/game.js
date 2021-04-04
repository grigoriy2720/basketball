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
    i = i - 1;
  }, 1000);
}
