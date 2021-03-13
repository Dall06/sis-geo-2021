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

      response.json().then(function (datos) {

        const map = new google.maps.Map(document.getElementById('map'), propiedades);

        console.log(datos);

        datos.forEach(marcador => {


          fetch('https://corona.lmao.ninja/v3/covid-19/countries')
            .then(function (respuesta) {

              respuesta.json().then(function (datospaises) {

                datospaises.forEach(registro => {


                  if (registro.country == marcador.CountryName) {

                    var informacion = "<strong>País:</strong> " + registro.country + "<br><strong>Casos:</strong> " + registro.cases + "<br><strong>Nuevos hoy:</strong> " + registro.todayCases + "<br><strong>Muertes:</strong> " + registro.deaths + "<br><strong>Muertes Hoy:</strong> " + registro.todayDeaths + "<br><strong>Recuperados:</strong> " + registro.recovered + "<br><strong>Activos:</strong> " + registro.active + "<br><strong>Críticos:</strong> " + registro.critical + "<br><strong>Casos por millón:</strong> " + registro.casesPerOneMillion;

                    var infowindow = new google.maps.InfoWindow({
                      content: informacion
                    });

                    let marker = new google.maps.Marker({
                      map: map,
                      position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                      title: marcador.CountryName + registro.cases
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