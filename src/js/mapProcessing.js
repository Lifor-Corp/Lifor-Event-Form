const map = L.map('map').setView([55.755830, 37.617220], 11);
var marker;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function setMapView(pos) {
    const coords = pos.coords;
    map.setView([coords.latitude, coords.longitude], 11);
}

function getLocation() {
    return marker.getLatLng();
}

navigator.geolocation.getCurrentPosition(setMapView);
map.on('click', function(e) {
    map.setView([e.latlng.lat, e.latlng.lng], map.getZoom());
    if (marker !== undefined) {
        map.removeLayer(marker);
    }
    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    console.log(marker.getLatLng());
})

console.log(map.getCenter());
