let map; // Declare map variable globally

function initMap() {
    const austin = { lat: 30.2672, lng: -97.7431 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: austin,
    });

    // Add markers for places using AdvancedMarkerElement
    const places = [
        { name: "Zilker Park", location: { lat: 30.2672, lng: -97.7750 } },
        { name: "Texas State Capitol", location: { lat: 30.2747, lng: -97.7404 } },
        // Add more places as needed
    ];

    places.forEach(place => {
        new google.maps.marker.AdvancedMarkerElement({
            position: place.location,
            map: map,
            title: place.name,
        });
    });
}

// Function to zoom in on a specific place
function zoomToPlace(location) {
    map.setCenter(location);
    map.setZoom(15); // Adjust zoom level as needed
}

window.onload = initMap;
