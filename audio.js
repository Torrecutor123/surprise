function aaplay() {
  setTimeout(aplay, 3000);
}
function aplay() {
  document.getElementById('freebird').play();
}
function rredirect() {
  setTimeout(otherURL, 65000);
  var result = document.getElementById('result');
  result.innerHTML = '<b> The page will redirect after delay of 5 seconds';
}

function otherURL() {
  document.location.href = 'end.html';
}
aaplay();
rredirect();
