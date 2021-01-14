//Global variables
let activeInfoWindow;
let idForSearch;
let OMDBUrl;
let youtubeTrailerId;


//Marker list for movies (to go inside the init map function):
let markers = [
    {
        coords: { lat: 53.1171605, lng: -8.0269183 },
        content: `<h3>Garage</h3>
                    <p>Rathcabbin and other midland locations</p>
                    `,
        id: "tt0878674",

    },
    {
        coords: { lat: 52.976212, lng: -9.4210975 },
        content: `<h3>Harry Potter and the Half-Blood Prince</h3>
                    <p>Cliffs of Moher</p>
                    `,
        id: "tt0417741"
    },
    {
        coords: { lat: 51.7712833, lng: -10.5449314 },
        content: `<h3>Star Wars: Episode VII - The Force Awakens</h3>
                    <p>Skellig Michael</p>
                    `,
        id: "tt2488496"
    },
    {
        coords: { lat: 52.402581, lng: -6.356075 },
        content: `<h3>Saving Private Ryan</h3>
                    <p>Curracloe</p>
                    `,
        id: "tt0120815"
    },
    {
        coords: { lat: 53.1291441, lng: -6.7076051 },
        content: `<h3>Black '47</h3>
                    <p>Harristown House</p>
                    `,
        id: "tt3208026"
    },
    {
        coords: { lat: 53.1829611, lng: -6.1812657 },
        content: `<h3>Barry Lyndon</h3>
                    <p>Powerscourt House</p>
                    `,
        id: "tt0072684"
    },
    {
        coords: { lat: 51.9114852, lng: -8.4817243 },
        content: `<h3>The Young Offenders</h3>
                    <p>Cork city and county and Atlantic coastline</p>
                    `,
        id: "tt4714568"
    },
    {
        coords: { lat: 53.16136749421548, lng: -6.8475166851461395 },
        content: `<h3>Braveheart</h3>
                    <p>The Curragh and other locations</p>
                    `,
        id: "tt0112573"
    },
    {
        coords: { lat: 53.3416958, lng: -6.3113977 },
        content: `<h3>The Italian Job</h3>
                    <p>Kilmainham Gaol</p>
                    `,
        id: "tt0064505"
    },
    {
        coords: { lat: 52.9734372, lng: -9.4395077 },
        content: `<h3>The Princess Bride</h3>
                    <p>Cliffs of Moher</p>
                    `,
        id: "tt0093779"
    },
    {
        coords: { lat: 52.3768769, lng: -7.9362685 },
        content: `<h3>Excalibur</h3>
                    <p>Cahir Castle</p>
                    `,
        id: "tt0082348"
    },
    {
        coords: { lat: 53.1199899, lng: -9.7644271 },
        content: `<h3>Man of Aran</h3>
                    <p>Inis Mor</p>
                    `,
        id: "tt0025456"
    },
    {
        coords: { lat: 53.1368991, lng: -6.3187548 },
        content: `<h3>P.S. I Love You</h3>
                    <p>Sally Gap, Wicklow, Dublin</p>
                    `,
        id: "tt0431308"
    },
    {
        coords: { lat: 51.8156968, lng: -9.8769218 },
        content: `<h3>The Lobster</h3>
                    <p>Parknasilla Resort</p>
                    `,
        id: "tt3464902"
    },
    {
        coords: { lat: 51.953549, lng: -7.8460878 },
        content: `<h3>Moby Dick</h3>
                    <p>Youghal</p>
                    `,
        id: "tt0049513"
    },
    {
        coords: { lat: 53.3437935, lng: -6.2545716 },
        content: `<h3>Ek Tha Tiger</h3>
                    <p>Trinity College, Dublin City</p>
                    `,
        id: "tt2016894"
    },
    {
        coords: { lat: 52.5022462, lng: -6.5683317 },
        content: `<h3>Brooklyn</h3>
                    <p>Enniscorthy</p>
                    `,
        id: "tt2381111"
    },
    {
        coords: { lat: 52.1406436, lng: -10.2802415 },
        content: `<h3>Ryan's Daughter</h3>
                    <p>Dingle</p>
                    `,
        id: "tt0066319"
    },
    {
        coords: { lat: 53.0110258, lng: -8.9972987 },
        content: `<h3>The Silver Branch</h3>
                    <p>The Burren</p>
                    `,
        id: "tt7468070"
    },
    {
        coords: { lat: 53.5955947, lng: -9.7018873 },
        content: `<h3>The Field</h3>
                    <p>Leenaun</p>
                    `,
        id: "tt0099566"
    },
    {
        coords: { lat: 53.2949432, lng: -9.6973137 },
        content: `<h3>The Guard</h3>
                    <p>Lettermore</p>
                    `,
        id: "tt1540133"
    },
    {
        coords: { lat: 53.5408714, lng: -9.2903042 },
        content: `<h3>The Quiet Man</h3>
                    <p>Cong and other nearby locations</p>
                    `,
        id: "tt0045061"
    },
     {
        coords: { lat: 51.9457143, lng: -9.1714211 },
        content: `<h3>The Wind That Shakes The Barley</h3>
                    <p>Ballyvourney and around</p>
                    `,
        id: "tt0460989"
    }
];
function initMap() {
    let options = {
        zoom: 7,
        center: {
            lat: 52.9462449, lng: -8.3522866
        },
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN //Source: https://stackoverflow.com/questions/8607036/google-maps-v3-terrain-view-by-default
    }


    let map = new google.maps.Map(document.getElementById("map"), options);

    //Loop through to get info for all markers and run addMarker function for each one  
    for (i = 0; i < markers.length; i++) {    
        addMarker(markers[i]);
    }
    //Add marker
    function addMarker(props) {
        let infowindow = new google.maps.InfoWindow({ content: props.content });
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            movieId: props.id,
        });

        marker.addListener("click", function () {
            if (activeInfoWindow) { activeInfoWindow.close(); } // Only open one infowindow at a time
            infowindow.open(map, marker);
            activeInfoWindow = infowindow;
            loadMovieDetails();
        });
    }

}
//Get movie details from OMDB API and call functions to populate HTML
function loadMovieDetails() {
    google.maps.event.addListener(activeInfoWindow, 'domready', function () {
        //console.log(activeInfoWindow.anchor.movieId);
        let idForSearch = activeInfoWindow.anchor.movieId;
        let OMDBUrl = "https://www.omdbapi.com/?i=" + idForSearch + "&apikey=e3028bad";
        let jsonData;
        //console.log(idForSearch);
        //console.log(OMDBUrl);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = this.responseText;
                let jsonData = JSON.parse(data);
                let movieArray = Object.entries(jsonData);
                //console.log(movieArray);
                console.log(jsonData);
                buildOutTable(jsonData);
                buildOutPosterDiv(jsonData);
                buildOutTrailerDiv(idForSearch);
            };
        }
        xhttp.open("GET", OMDBUrl, true);
        xhttp.send();

    });
}

// Use the movie details returned by loadMovieDetails() to populate HTML table
function buildOutTable(movie) {
    document.getElementById("movie-details").innerHTML =
        `
                <table class="table">
        <tr>
            <td>Title</td>
            <td>${movie.Title}</td>
        </tr>
        <tr>
            <td>Plot</td>
            <td>${movie.Plot}</td>
        </tr>
        </table>`
    document.getElementById("optional-movie-details").innerHTML =    
        `<div id="optional-rows"><table class="table" >
        <tr>
            <td>Released</td>
            <td>${movie.Released}</td>
        </tr>
        <tr>
            <td>Genre</td>
            <td>${movie.Genre}</td>
        </tr>
        <tr>
            <td>Director</td>
            <td>${movie.Director}</td>
        </tr>
        
        <tr>
            <td>Runtime</td>
            <td>${movie.Runtime}</td>
        </tr>
        <tr>
            <td>Written By</td>
            <td>${movie.Writer}</td>
        </tr>
        <tr>
            <td>Starring</td>
            <td>${movie.Actors}</td>
        </tr>

        <tr>
            <td>Awards</td>
            <td>${movie.Awards}</td>
        </tr>

        <tr>
            <td>Production Company</td>
            <td>${movie.Production}</td>
        </tr>

        <tr>
            <td>Box Office</td>
            <td>${movie.BoxOffice}</td>
        </tr>

        <tr>
            <td>IMDb Rating</td>
            <td>${movie.imdbRating}</td>
        </tr>                
    </table>
    </div>
    <div id="toggle-bar"><p id="toggle-button">Show More / Show Less</p></div>
                `
}

// Use the movie details returned by loadMovieDetails() to populate the poster div 
function buildOutPosterDiv(movie) {
    document.getElementById("movie-poster").innerHTML =
        `<img src=${movie.Poster}/>`
}

// Use the movie details returned by loadMovieDetails() to get the youtube url for trailer
function buildOutTrailerDiv(SearchID) {
                let trailerSearch = `https://api.themoviedb.org/3/movie/${SearchID}/videos?api_key=cc7f7add0a01568599af8799c924f016`;
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let trailerInfo = this.responseText;
                        let jsonTrailer = JSON.parse(trailerInfo);
                        //console.log(jsonTrailer.results[0].key);
                        youtubeTrailerId = jsonTrailer.results[0].key;
                        displayTrailer(youtubeTrailerId);
                    };
                }
                xhttp.open("GET", trailerSearch, true);
                    xhttp.send();
            }

// Use the url from buildOut TrailerDiv() to display the trailer
function displayTrailer(youtube){
                document.getElementById("movie-trailer").innerHTML =
                    `<div><iframe width="100%" height="315" src="https://www.youtube.com/embed/${youtube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`
            }





// jQuery effects

$('#optional-movie-details').on('click', '#toggle-bar', function () {
     $("#optional-rows").toggle(800);
});
$("body").on('click', '#info-option-bar', function(){
    $('#how-it-works').toggle(800);
}
)