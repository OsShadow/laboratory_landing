/**
 * @name Map Adress
 * @function initial google map with marker
 */

function initMap() {
  var myLatLng = {
    lat: 44.933076,
    lng: 15.629058
  };
  var mapElm = document.getElementById('map');
  var map, marker;
  
  if (mapElm) {
    var map = new google.maps.Map(mapElm, {
      zoom: 10,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

}
