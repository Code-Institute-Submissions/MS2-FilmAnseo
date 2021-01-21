MS2 - Film Anseo

This is my MS2 project - a responsive web app for movie lovers visiting or living in Ireland who may like to visit locations where famous movies have had scenes shot.
The list of movies included is not exhaustive and is, for the moment at least, built to serve the purpose of demonstrating the site only.

The list is based on my own research and preferences and ranges in time from Man of Aran (1934) to the current day.

Full content to come...

# Site purpose

## UX

### Target Audience

### User Stories

### Wireframe Mockups

### Color Palette

Thinking about colurs, my main aim was to:
Have a sense of the cinema - ie black or dark charcoal grey surrounfing the trailer and perhaps elsewhere, mimicking movie credits
Incorporate green as the color most associated with Ireland
Have muted colors that won't clash with movie posters or trailers

https://imagecolorpicker.com/

## Features

### Map

### Info table

### Weather Info
For a user of the site whi may be thinking of making a trip to a location featured on the map, it iis important to have a quick view on what the weather is forecast for today. To this end, weather info is presented uniquely for each marker location on the map.
The weather info changes and is up to date for the location selected in the map. The same lat and lng coordinates as are used to place the markers are used to make a call to the Open Weather API(https://openweathermap.org/api).
For the purposeds of a clean UI, the weather data being displayed is restricted to an icon and a very short description. 


### Image

### Contact
Working contact form based on the 'Sending Emails Using EMailJS" lesson in interactive frontend module.
Form is working and sends a message as follows:
 
 Add Image Here


### Features to implement in the future

## Technologies Used
HTML/CSS/JS/jQuery

APIs: Google Maps, OMDB, TMDB, JSMail

## Additional Resources

## Testing
Separate file
The Silver Branch does not have any info on TMDB so:
If that is the first marker clicked, nothing happens
If a marker has been clicked previously, the previous movie's trailer stays in place
Fix:
Add an if/else to main.js

## Main Issues Overcome

### Restrict Googlemaps InfoWindows to One
Via the DOM, the infowindow provides the base information (ID) for the selected movie so it is important that only a single infowindow be open at any one time. I had some issues implementing this at first but it was finally resolved by setting the infowindow as active infowindow and then closing the 'active' info window when a marker is clicked: 
```javascript
if (activeInfoWindow) { activeInfoWindow.close(); }
[...]
infowindow.open(map, marker);
activeInfoWindow = infowindow;
```
Resource: 
https://stackoverflow.com/questions/35428563/how-to-close-all-infowindow-of-markers-on-the-map?rq=1
Also consulted: 
https://support.advancedcustomfields.com/forums/topic/google-map-infowindow-close/
https://hashnode.com/post/google-maps-api-onclick-on-marker-close-infowindow-of-other-markers-ciou68dw708x33353les71nyi

### How to access the id for the movie
The IMDb ID is the central piece of info to allow the API to return results for a particular movie. My problem was how to link the key for a specific move with a specific marker so that the correct API request was sent for the marker.
Initially, I included the key as innerHTML in a hidden "<p>" element in the InfoWindow content. However, this seemed like a clumsy approach and was confirmed as such by my mentor who advised providing a property in the marker object to hold this info rather than the HTML. This was an easy fix and once identified I could simply reassign the idForSearch variable:
From:
```JavaScript
let idForSearch = document.getElementById("IMDB").innerHTML;
```
To 
```JavaScript
let idForSearch = activeInfoWindow.anchor.movieId; 
```
### Get trailer data
The OMDB API being used to return the results dos not provide a convenient way to access a trailer. TMDB is a another free movie API that does provide an ID that can be used to build a url to access a youtube trailer. For that reason, I switch to the TMDB API to furnish the details for the trailer.
So, why not just use the TMDB API altogether?
I started with that idea but I prefer the set of results returned by OMDB and find it easier to work with.

See: https://github.com/omdbapi/OMDb-API/issues/180


### How to Access the Required Info from the TMDB Response
The app uses two movie APIs. The main one is OMDB, but this does not provide any info to access a trailer. TMDB does - but to access it required dot and bracket notation:
```javascript
youtubeTrailerId = jsonTrailer.results[0].key;
```
- see related issue regarding trailer for The Silver Branch

Resources consulted on this:
https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
https://www.samanthaming.com/tidbits/76-converting-object-to-array/

## How to Populate the HTML Cleanly
Because there is quite a bit of data used to populate the HTML divs, the code was initially looking like it would end up being messy and hard to read.
This was resolved by separating the build out of the HTML sections to separate functions. The HTML was set up using template literals.
Excellent resource that served as the base for this approach: https://www.youtube.com/watch?v=DG4obitDvUA&t=1818s

## How to Open map in terrain Mode by Default
The hybrid mode in which the map opens is not in keeping with the intended look and feel of the site. In terrain mode, the color aligns with the color scheme of the site and it empahsizes the landscape of the country which is more in keeping with the site purpose.
To open in terrain mode by default, added the following code to the initmap() function:
```JavaScript
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.TERRAIN
``` 

Source: https://stackoverflow.com/questions/8607036/google-maps-v3-terrain-view-by-default

## How to Fix Issue with No Listener for jQuery Selector
I had an issue whereby the following code did nothing:
```JavaScript
$("#toggle-button").click (function (){
      $("#optional-rows").toggle(1000);    
});
```
Looked into:
Is the issue with CSS (display: none)? - no, seemed like jQuery show() method should override that.
Is it an issue with placement of the jQuery file? - checked fine
Is it an issue with '$' - replaced that with jQuery, no better.
Checked jQuery debugging strategy outlined here: https://www.simonbattersby.com/blog/debugging-jquery-a-beginners-guide/
On this post (https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art044), checking the DOM for an event listener on the selector was mentioned. I did that and found that there was nothing being listened for:

screenshot here

Changing to the following code fixed the issue:
```javascript
$('body').on('click', '#toggle-button', function () {
     $("#optional-rows").toggle(1000);
});
```
Source: https://stackoverflow.com/questions/10920355/attaching-click-event-to-a-jquery-object-not-yet-added-to-the-dom

This is improved by moving down the DOM to a nearer parent to my intended target than 'body', so code now reads:
```JavaScript
$('#optional-movie-details').on('click', '#toggle-button', function () {
     $("#optional-rows").toggle(1000);
});
```

### Centering the wrapper
https://stackoverflow.com/questions/8701054/how-to-center-a-wrapper-div-and-not-the-content
https://css-tricks.com/best-way-implement-wrapper-css/





## Other resources:
Dot notation (accessing the required data from the weather API): https://www.sitepoint.com/back-to-basics-javascript-object-syntax/

Google maps icon: https://commons.wikimedia.org/wiki/File:Google_Maps_icon.svg

OpenWeather logo: https://mebee.info/2019/10/08/post-1670/

Responsive video embed - Bootstrap
``` HTML
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
```








