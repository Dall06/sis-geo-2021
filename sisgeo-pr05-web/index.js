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
    const marker = new google.maps.Marker({
        position: pos,
        map,
        title: "Marker",
    });
}