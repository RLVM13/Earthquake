/* Tareas:

Petición HTTP para obtener los terremotos disponibles en la API
Dibujar los marcadores de cada terremoto en el mapa
Añadir popup en cada marcador con los siguientes datos:
Título
Fecha del evento
Ubicación
Código
Magnitud con el tipo de medida
Personalizar iconos por color para los marcadores según la magnitud del terremoto (colores entre 0-7) */

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
    .then(terremoto => {

        //pintamos el mapa con las coordenadas que indica la API
        const mapId = 'map';
        const initialCoordinates = [40, 3];
        const map = L.map(mapId).setView(initialCoordinates, 2);

        //librería de tiles y usamos MapBox
        const MAPBOX_API = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
        //nos registraremos para obtener una API key
        const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
        // Este token será el que obtengamos en la web de Mapbox
        const ACCESS_TOKEN = 'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';

        //la siguiente función de Leaflet para cargar todos los tiles de Mapbox en nuestro mapa 
        L.tileLayer(MAPBOX_API, {
            attribution: ATTRIBUTION,
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: ACCESS_TOKEN
        }).addTo(map);

        //Inyecta el mapa usando Leaflet a través del script que habíamos importado
        for (let i = 0; i < terremoto.features.length; i++) {

            const titulo = terremoto.features[i].properties.title;
            const fechaEvento = terremoto.features[i].properties.time;
            const fechaFormato = new Date(fechaEvento * 1000);
            const ubicacion = terremoto.features[i].geometry.coordinates;
            const latitud = ubicacion[1];
            const longitud = ubicacion[0];
            const coordTerremoto = [latitud, longitud];
            /* console.log(Latitud);
            console.log(Longitud); */
            const codigo = terremoto.features[i].properties.code;
            const magnitud = terremoto.features[i].properties.mag;

            let icono0_1 = new L.Icon({
                iconUrl: './assets/icono0_1.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono1_2 = new L.Icon({
                iconUrl: './assets/icono1_2.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono2_3 = new L.Icon({
                iconUrl: './assets/icono2_3.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono3_4 = new L.Icon({
                iconUrl: './assets/icono3_4.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono4_5 = new L.Icon({
                iconUrl: './assets/icono4_5.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono5_6 = new L.Icon({
                iconUrl: './assets/icono5_6.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono6_7 = new L.Icon({
                iconUrl: './assets/icono6_7.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });
            let icono7_8 = new L.Icon({
                iconUrl: './assets/icono7_8.png',
                iconSize: [41, 41],
                iconAnchor: [41, 41],
            });

            /* console.log(titulo);
            console.log(fechaEvento);
            console.log(fechaFormato);
            console.log(ubicacion);
            console.log(codigo);
            console.log(magnitud);*/

            //SI QUEREMOS QUITAR EL POPUP, BASTA CON ELIMINAR EL "BINDPOPUP"
            // Añadimos el marcador a nuestra posición inicial con mensaje
            if (magnitud < 0 && magnitud <= 1) {
                L.marker(coordTerremoto, { icon: icono0_1 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 1 && magnitud <= 2) {
                L.marker(coordTerremoto, { icon: icono1_2 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 2 && magnitud <= 3) {
                L.marker(coordTerremoto, { icon: icono2_3 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 3 && magnitud <= 4) {
                L.marker(coordTerremoto, { icon: icono3_4 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 4 && magnitud <= 5) {
                L.marker(coordTerremoto, { icon: icono4_5 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 5 && magnitud <= 6) {
                L.marker(coordTerremoto, { icon: icono5_6 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else if (magnitud > 6 && magnitud <= 7) {
                L.marker(coordTerremoto, { icon: icono6_7 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            else {
                L.marker(coordTerremoto, { icon: icono7_8 }).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud).addTo(map);
            }
            //L.marker(coordTerremoto).bindPopup("<b>" + titulo + "</b><br>" + fechaFormato + "<br>" + "<b>Coordenadas: </b>" + ubicacion + "<br>" + "<b>Codigo: </b>" + codigo + "<br>" + "<b>Magnitud: </b>" + magnitud, { icon: icono }).addTo(map);
        }
    })

