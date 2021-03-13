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
    .then(function (response) {

      response.json().then(function (data) {

        const map = new google.maps.Map(document.getElementById('divMap'), props);

        console.log(data);

        data.forEach(m => {


          fetch('https://corona.lmao.ninja/v3/covid-19/countries')
            .then(function (r) {

              r.json().then(function (dc) {

                dc.forEach(reg => {


                  if (reg.country == m.CountryName) {

                    var i = "<strong>País:</strong> " + reg.country + "<br><strong>Casos:</strong> " + reg.cases + "<br><strong>Nuevos hoy:</strong> " + reg.todayCases + "<br><strong>Muertes:</strong> " + reg.deaths + "<br><strong>Muertes Hoy:</strong> " + reg.todayDeaths + "<br><strong>Recuperados:</strong> " + reg.recovered + "<br><strong>Activos:</strong> " + reg.active + "<br><strong>Críticos:</strong> " + reg.critical + "<br><strong>Casos por millón:</strong> " + reg.casesPerOneMillion;

                    var infowindow = new google.maps.InfoWindow({
                      content: i
                    });

                    let marker = new google.maps.Marker({
                      map: map,
                      position: new google.maps.LatLng(m.CapitalLatitude, m.CapitalLongitude),
                      title: m.CountryName + reg.cases
                    });

                    marker.addListener('click', function () {
                      infowindow.open(map, marker);
                    });

                  }


                });

              });

            });



        });


      });

    })
    .catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
};