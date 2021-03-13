var coords = {
  lat: 0,
  lng: 0
};

var props = {
  center: coords,
  zoom: 2
};

function initMap() {
  fetch('paises.json')
    .then(function (r) {
      r.json().then(function (data) {
        const map = new google.maps.Map(document.getElementById("divMap"), props);

        data.forEach(m => {
          fetch('https://corona.lmao.ninja/v3/covid-19/countries')
            .then(function (fr) {
              // console.log(fr);
              fr.json().then(function (dc) {
                dc.forEach(reg => {
                  var info = "<strong>País:</strong> "+ reg.country +"<br><strong>Casos:</strong> " + reg.cases + "<br><strong>Nuevos hoy:</strong> " + reg.todayCases + "<br><strong>Muertes:</strong> " + reg.deaths + "<br><strong>Muertes Hoy:</strong> " + reg.todayDeaths + "<br><strong>Recuperados:</strong> " + reg.recovered + "<br><strong>Activos:</strong> " + reg.active + "<br><strong>Críticos:</strong> " + reg.critical + "<br><strong>Casos por millón:</strong> " + reg.casesPerOneMillion;
                  var infoWindow = new google.maps.InfoWindow({
                    content: info,
                  });

                  if (dc.country == m.CountryName) {
                    let marker = new google.maps.Marker({
                      map: map,
                      position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                      title: marcador.CountryName + reg.cases
                    });

                    marker.addListener('click', function () {
                      infoWindow.open(map, marker);
                    });
                  }
                })
              })
            })
        });
      })
    })
    .catch(function (e) { console.log(e); })
};