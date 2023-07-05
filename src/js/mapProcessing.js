const map = L.map('map').setView([55.755830, 37.617220], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function setMapView(pos) {
    const coords = pos.coords;
    map.setView([coords.latitude, coords.longitude], 11);
}

navigator.geolocation.getCurrentPosition(setMapView);
console.log(map.getCenter());
