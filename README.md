#MS2 - Film Anseo

*anseo*, adv. Here, in this place. 
 - teanglann.ie

Film Anseo (Film Here) - This is my MS2 project - a responsive web app for movie lovers visiting or living in Ireland who may like to visit locations where famous movies have had scenes shot.

# Site purpose
The purpose of the site is to be a quick and easy look into the Irish landscape to see where well-known or loved movies have had scenes shot - irrespective of whether the location served as itself (as in Man of Aran, for example) or as a fictional or even fantastical place (as in Princess Bride or Star Wars).

## UX
The site aims to be simple and quick to use with a mobile-first design approach. It may not always have the full attention of the user so it whould be clutter free and straighforward. It should have an upbeat, adventurous feel that aligns with people on holidays or taking an outing.
At the same time, it should have enough informational value to keep a user engaged or to make return visits worth their while.
Becasue the site is intuitive and straighforward, any instructional content that a user might want to consult on their first visit should be easy for them to ignore on subsequent visits.
The direction of travel on the site is map -> movie, not the other way around (there is no functinality to search for a movie, for example). Therefore,the map is the central focus.

## Target Audience/User Stories
*A group of tourists sitting at a cafe table after lunch wondering where they'll go for the afternoon. They can view the map, discuss the films, chat about the movie trivia and make a decision on whether or not to go to the location based on weather info.
*A tourist/visitor who has been impressed with their visit to a location and would like to keep the experience alive by following up with some connected activity. For example, after visiting the Cliffs of Moher, they check the app and then decide to watch Princess Bride on the bus ride back to Dublin.
*A group of friends spending some together for a weekend and looking for a diversion. The app serves as a source of valuable location-specific weather info and also as a talking point.
*A film fan browsing for trivia and planning a road trip.
*A local tourist office who would like to highlight another claim to fame of their locality. They can easily send a message to the site curator to add a film. 


### Wireframe Mockups

### Color Palette

Thinking about colours, my main aim is to:
Have a sense of the cinema (that is, black) surrounding the trailer and perhaps elsewhere, mimicking movie credits.
Incorporate green as the color most associated with the Irish landscape.
Have upbeat colours that add to a sense of fun in the site without feeling childish or undermining the information.

https://imagecolorpicker.com/

## Features
#### Map
The map is the focus of the site and sits directly in front of the user the moment they land on the page. The zoom level is appropriate that they can quickly see the entire country and choose markers in any area - where they are, where they were, or where they intend to be.
The map functionality is provided by the Google Maps JavaScript API.
The map uses the familiar default Google markers but displays the 'terrain' view - deempahsizing roads and everyday locations to allow the focus to be on the landscape and the imaginative world of film.
When clicked the map markers open an infowindow displaying only the fil title and the name of the location. The rest of the film data is contained in the main body of the page.

#### Weather Info
Because the user of the map may be thinking about a trip to a location featured on the map, adding weather info for the selected location means they don't need to leave the app to check that.
Weather data shows an icon, a quick description of the weather, the temperature, and the likelihood of rain at the location over the next six hours.
Although this information might be important for the user, it should be easy to hide it and shift the focus to the movie info. This is achieved by the ability to toggle the weather info display.
The weather data comes from the Open Weather service and the same lat and lng coordinates as are used to place the markers are used to make a call to the Open Weather API(https://openweathermap.org/api).

#### Film Info
By default, just the title and the plot of the film appears. The user can choose to show or hide the remaining data (director, acors, awards etc).
A promotional poster for the film gives a further sense of the time (1950s or 2010s) and genre (documentary or fantasy).

The film data and the poster are accessed usin gthe OMDb API service.

#### Film trailer
A trailer or some other promotional clip is an important aspect of the iformation about any film and this is shown as the thirs segment of the film data - after the table and the poster. The trailer container is set to be reponsive and will therfore allow a user to view the trailer at a reasonable size regardless of device.

#### Contact Form
The list of film on the map is obviously incomplete. The contact form gives the option to users to provide information about movies that are not already on the map or to provide any other feedback. 
The contact form sends an email using EMailJS, as shown in the example here:

#### Hero Image
The site features a hero image of the Irish coastal landscape that reflects several of the site's underlying design decisions - 
It is not tied to any specific place/time and hints at a sort of poetic landscape open to becoming something else in a filmic world.
It displays the beauty of the location - ie an island in the north Atlantic.
It has a cinematic feel.

#### Call to Action 
The call to action is presented in the map instructions. The poetic, misty cinematic image of the Skelligsswitches abruptly to the more mischievous and energising image and quote from the young offenders. The quote lends a further sennse of adventure and whimsical mischief to the site and helps it to be a fun engagement by itself, without any follow-on action.

### Contact
Working contact form based on the 'Sending Emails Using EMailJS" lesson in interactive frontend module.
Form is working and sends a message as follows:
 
 Add Image Here

### Navigation and logo
The site has a navigation bar that includes a hamburger icon (links to the contact form and about sections of the page). It also contains the site title and an icon (marker) that immediately helps to explain the site purpose.

### Features to implement in the future
For the next iteration of the site, the following features would be implemented:
Directions to a marker from the user's location.
More markers and perhaps a separate set of markers for TV series.

## Technologies Used

The site skeleton is quite simple. There is a basic HTML page containing a series of divs. There is some static content in the header navigation area and the acknowledgements section at the bottom of the page, but most of the content is populated dynamically using the API responses and jQuery. 

APIs: Google Maps, OMDB, TMDB, JSMail

## Additional Resources


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

### How to access the ID for the movie
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
Initially, I looked at both and just preferred using the OMDB API. I had the site functioning before realising that I would not be able to provide a trailer link with OMDb. At that point, I considered switching everything to TMDB but it seems to make sense to utilise both. If there is a problem with one service (service is down, problem with API key etc), at least some information will still be able to come through via the other API.

See: https://github.com/omdbapi/OMDb-API/issues/180


### How to Access the Required Info from the TMDB Response
Took a little bit of time to figure out how to access the various elements of the API responses. However, once this fell into place, it suddenly became quite straighforward. A similar process is reqired for accessing the required info from the weather API.
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
Is it an issue with '$' - replaced that with 'jQuery', no better.
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

### How to manipulate the weather API reponse to show the data in a user friendly way
In the weather section of the page, the chance of rain is given as a percentage, but the API gives this as a number between 0 and 1.
The temperature is given as a whole number but the API gives two decimal points. To manipulate the display of this data, the following JS:
toFixed() - https://www.w3schools.com/jsref/jsref_tofixed.asp
parseInt() - https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number.

### How to show degrees C symbol
https://www.toptal.com/designers/htmlarrows/symbols/degree-celsius/

### How to allow for a responsive trailer size appropriate to the device
This was very straightforward with [Bootstrap](https://getbootstrap.com/docs/4.0/utilities/embed/):
``` HTML
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
```
### How to style the first cell in each row of the table
This was achieved using CSS first-of-type selector:
https://www.w3schools.com/cssref/sel_first-of-type.asp


## Other resources:
Dot notation (accessing the required data from the weather API): https://www.sitepoint.com/back-to-basics-javascript-object-syntax/

Google maps icon: https://commons.wikimedia.org/wiki/File:Google_Maps_icon.svg

OpenWeather logo: https://mebee.info/2019/10/08/post-1670/



Favicon error:
/favicon.ico:1 Failed to load resource: the server responded with a status of 404 ()
https://www.w3.org/2005/10/howto-favicon
https://iconarchive.com/show/small-n-flat-icons-by-paomedia/map-marker-icon.html

Show alert after form submitted:
https://stackoverflow.com/questions/22294787/show-alert-when-form-submitted










