//Sacamos las coordenadas del usuario
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(`Latitud: ${position.coords.latitude}\nLongitud: ${position.coords.longitude}`);
        /*  let datos = `<h1>Aquí estás!</h1>
        <p>Lat: ${position.coords.latitude.toFixed(4)}</p>
        <p>Long: ${position.coords.longitude.toFixed(4)}</p>`
        document.body.innerHTML = datos; */

        //Inyecta el mapa usando Leaflet a través del script que habíamos importado
        const Latitud = position.coords.latitude;
        const Longitud = position.coords.longitude;
        const mapId = 'map';
        const initialCoordinates = [Latitud, Longitud];
        const map = L.map(mapId).setView(initialCoordinates, 13);

        //librería de tiles y usamos MapBox
        const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
        /* nos registraremos para obtener una API key */
        const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
        // Este token será el que obtengamos en la web de Mapbox
        const ACCESS_TOKEN = 'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';

        /* la siguiente función de Leaflet para cargar todos los tiles de Mapbox en nuestro mapa */
        L.tileLayer(MAPBOX_API, {
            attribution: ATTRIBUTION,
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: ACCESS_TOKEN
        }).addTo(map);

        //SI QUEREMOS QUITAR EL POPUP, BASTA CON ELIMINAR EL "BINDPOPUP"

        // Añadimos el marcador a nuestra posición inicial
        L.marker(initialCoordinates).bindPopup("<b>Aquí te encuentras</b><br>Me ha costado un cojón y medio").addTo(map);
    });
} else {
    console.warn("Tu navegador no soporta Geolocalización!! ");
}