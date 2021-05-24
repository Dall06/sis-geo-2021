const loadSongsInfo = () => {
    fetch("https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm", {
        "method": "GET",
    }).then(response => {
        response.json().then((data) => {
            let dataList = data.tracks;
            let songsToAppend = ``;
            dataList.forEach((song) => {
                songsToAppend += `
                <div class="row">
                    <div class="card mb-3 border-info" style="max-width: 100%;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <h5 class="card-title">${song.name}</h5>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p>Artist: ${song.artistName}</p>
                                <p>Album: ${song.albumName}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                `
            });
            SongsList.innerHTML = songsToAppend;
        });
    }).catch(err => {
        let songsList = document.getElementById('songs-list');
        songsList.innerHTML = `<p>Error: ${err.code}</p>`;
    });
}