//Global variables
let activeInfoWindow;
let idForSearch;
let OMDBUrl;
let youtubeTrailerId;

//Marker list for movies (to go inside the init map function):
let markers = [
                {
                    coords: { lat: 53.052850, lng: -8.400172 },
                    content: "<h3>Garage</h3><p id='IMDB' style='display:none'>tt0878674</p>",
                    filmName: "Garage",
                    filmID: "tt0878674",
                    trailer: '<div id="youtubeTrailer" style="display:none"><iframe width="560" height="315" src=" https://www.youtube.com/embed/i7YewrLyQoY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                },
                {
                    coords: { lat: 52.972418, lng: -9.423699 },
                    content: '<h3>Harry Potter and the Half-Blood Prince</h3><p id="IMDB" style="display:none">tt0417741</p><p id="youtubeTrailer" style="display:none"><iframe width="560" height="315" src="https://www.youtube.com/embed/JYLdTuL9Wjw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
                    filmName: "Harry Potter and the Half-Blood Prince",
                    filmID: "tt0417741"
                },
                {
                    coords: { lat: 51.7712833, lng: -10.5449314 },
                    content: "<h3>Star Wars: Episode VII - The Force Awakens</h3><p id='IMDB' style='display:none'>tt2488496</p>",
                    filmName: "Star Wars: Episode VII - The Force Awakens",
                    filmID: "tt2488496"
                },
                {
                    coords: { lat: 52.402581, lng: -6.356075 },
                    content: "<h3>Saving Private Ryan</h3><p id='IMDB' style='display:none'>tt0120815</p>",
                    filmName: "Saving Private Ryan",
                    filmID: "tt0120815"
                },
                {
                    coords: { lat: 53.1291441, lng: -6.7076051 },
                    content: "<h3>Black 47</h3><p id='IMDB' style='display:none'>tt3208026</p>",
                    filmName: "Black 47",
                    filmID: "tt3208026"
                },
                {
                    coords: { lat: 53.1829611, lng: -6.1812657 },
                    content: "<h3>Barry Lyndon</h3><p id='IMDB' style='display:none'>tt0072684</p>",
                    filmName: "Barry Lyndon",
                    filmID: "tt0072684"
                },
                {
                    coords: { lat: 51.9114852, lng: -8.4817243 },
                    content: "<h3>Young Offenders</h3><p id='IMDB' style='display:none'>tt4714568</p>",
                    //filmName: "Young Offenders",
                    //filmID: "tt0878674",
                    //trailer: '<div id="youtubeTrailer" style="display:none"><iframe width="560" height="315" src=" https://www.youtube.com/embed/i7YewrLyQoY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
                }

            ];

