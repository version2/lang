var js = document.createElement('script');
js.src = 'none1.js';
var first = document.getElementsByTagName('script')[0];
first.parentNode.insertBefore(js, first);
