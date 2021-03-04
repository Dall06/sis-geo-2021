function initMap() {
    let mapPorps = {
        center: {
            lat : 141.152639, 
            lng : -341.711598,
        },
        zoom: 15,
    }

    const divMap = document.getElementById("divMap");

    const map = new google.maps.Map(divMap, mapPorps);
}