
var map = L.map('map', {attributionControl: false}).setView([43.518602, 43.655441], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([43.518602, 43.655441]).addTo(map);

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.22074663341!2d43.6528165767587!3d43.51858926112588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405a071f5703df83%3A0x4b182ba8ff2d9aec!2z0JTQtdGC0LDQudC70LjQvdCzICJNYXN0ZXIgYXV0byI!5e0!3m2!1sen!2slv!4v1759521076399!5m2!1sen!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}