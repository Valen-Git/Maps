
  var mymap = L.map('mapid');

  mymap.setView(new L.LatLng(53.56560832937487, 9.985456349155342), 12);
  mymap.setView(new L.LatLng(53.56130018677909, 9.99523042207784), 12);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVhdGhoZWxsIiwiYSI6ImNrNzF4N2JuYzBhNWIzZXBzOGlxeGRjc2wifQ.pwUlaeQPx1RBk21yyAbeOw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmFsZWgtdmZpIiwiYSI6ImNrcGdwcjA0MTJkd2QycmxsaW9wb2ZtYjYifQ.fL9Uzpqp5Hc9PkH5TFUh3Q'
}).addTo(mymap);

var circle = L.circle([53.56560832937487, 9.985456349155342], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 150
}).addTo(mymap);
var circle = L.circle([53.56130018677909, 9.99523042207784], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 150
}).addTo(mymap);
