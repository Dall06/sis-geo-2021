const createMarker = (pos, map) => {
    const marker = new google.maps.Marker({
        position: pos,
        map,
        title: "Marker",
    });
    return marker;
}

function initMap() {
    let mapPorps = {
        center: {
            lat : 141.152639, 
            lng : -341.711598,
        },
        zoom: 15,
    }
    let pos = {
        lat : 141.152639, 
        lng : -341.711598,
    }
    
    const dMap = document.getElementById("divMap");
    const map = new google.maps.Map(dMap, mapPorps);

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let _pos = {
                lat: pos.coords.latitude,
                lmg: pos.coords.longitude,
            }

            const marker = createMarker(_pos, map);

            map.setCenter(_pos);

            const infoWindow = new google.maps.InfoWindow({
                content: "Hello human, this is the contnet"
            });
            
            marker.addListener("mouseover", () => {
                infoWindow.open(map, marker)
            })
        });
    } else {
        createMarker(pos, map);
    }

}