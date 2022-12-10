function redirect() {
  setTimeout(myURL, 7500);
  var result = document.getElementById('result');
  result.innerHTML = '<b> The page will redirect after delay of 5 seconds';
}

function myURL() {
  document.location.href = 'bd.html';
}

redirect();
