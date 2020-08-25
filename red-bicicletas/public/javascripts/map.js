var map = L.map('main_map').setView([41.1257995, 1.2035639], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/* L.marker([41.1518132, 1.2059955]).addTo(map)
    .bindPopup('Constantí')
    .openPopup();
    
L.marker([41.1504585, 1.0721486]).addTo(map)
    .bindPopup('Reus')
    .openPopup();

L.marker([41.1257995, 1.2035639]).addTo(map)
    .bindPopup('Tarragona')
    .openPopup(); */

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function (result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
});