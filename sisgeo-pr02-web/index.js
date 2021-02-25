var browserData = document.getElementById("browserData");
var data = browserData.getElementsByTagName("li");

var getData = ()  => {
  data[0].innerHTML = "Browser name: " + navigator.appCodeName;
  data[1].innerHTML = "Browser version: " + navigator.appVersion;
  data[2].innerHTML = "Internet status: " + navigator.onLine;
  data[3].innerHTML = "Platform: " + navigator.platform;
}