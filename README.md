#MS2 - Film Anseo

*anseo*, adv. Here, in this place. 

Film Anseo (Film Here) - This is my MS2 project - a responsive web app for movie lovers visiting or living in Ireland who may like to visit locations where famous movies have had scenes shot.

# Site purpose
The purpose of the site is to be a quick and easy look into the Irish landscape to see where well-known or loved movies have had scenes shot - irrespective of whether the location served as itself (as in Man of Aran, for example) or as a fictional or even fantastical place (as in Princess Bride or Star Wars).

## UX
The site aims to be simple and quick to use with a mobile-first design approach. It may not always have the full attention of the user so it whould be clutter free and straighforward. It should have an upbeat, adventurous feel that aligns with people on holidays or taking an outing.
At the same time, it should have enough informational value to keep a user engaged or to make return visits worth their while.
Becasue the site is intuitive and straighforward, any instructional content that a user might want to consult on their first visit should be easy for them to ignore on subsequent visits.
The direction of travel on the site is map -> movie, not the other way around (there is no functinality to search for a movie, for example). Therefore,the map is the central focus.

## Target Audience/User Stories
* I am among a group of tourists sitting at a cafe table after lunch wondering where we'll go for the afternoon. After finding the site, we can easily view the map, discuss the films, chat about the movie trivia and make a decision on whether or not to go to the location based on weather info.
* As a first-time user of the site, the information required to use the map and understand what is being presented is clearly accessible.
* As a repeat user of the site, I do not need to consult the directions of how to interact with the site. The information that is acessible for a first-time user does not impinge on my use of the map - ie the info can easily be ignored.
* As a tourist/visitor who has been impressed with their visit to a location, I would like to keep the experience alive by following up with some connected activity. For example, after visiting the Cliffs of Moher, I can check the site and then decide to watch Princess Bride on the bus ride back to Dublin.
* As a group of friends spending time together for a weekend and looking for a diversion, the site serves as a source of valuable location-specific weather info and also as a talking point.
* As an administrator at a local tourist office, I can easily get in touch with the site curator to highlight a movie made in the vicinity, thus adding to the list of local tourist attractions.


### Wireframe 
The [wireframe](wireframes/wireframe.pdf) served as a general guiding principle for the design but was not followed exactly.

### Color Palette
Thinking about colours, my main aim was to:
Have a sense of the cinema (that is, black) surrounding the trailer and perhaps elsewhere, mimicking movie credits.
Incorporate green as the color most associated with the Irish landscape.
Have upbeat colours that add to a sense of fun in the site without feeling childish or undermining the information.

https://imagecolorpicker.com/

## Features
#### Map
The map is the focus of the site and sits directly in front of the user, below the hero image, the moment they land on the page. The zoom level is appropriate that they can quickly see the entire country and choose markers in any area - where they are, where they were, or where they intend to be.
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
The list of films on the map is obviously incomplete and dynamic new films being potentially added on a regular basis. The contact form gives the option to users to provide information about movies that are not already on the map or to provide any other feedback. 
The contact form sends an email using EMailJS, as shown in the example here. The contact form is based on the 'Sending Emails Using EMailJS" lesson in interactive frontend module.
 
![Email sent from contact form](/images/readme/emailjs-result.png)

### Navigation and logo
The site has a navigation bar that includes a hamburger icon (links to the contact form and about sections of the page). It also contains the site title and an icon (marker) that immediately helps to explain the site purpose.

### Audio
Toursits are one of th target audiences of the site. They (as well as many Irish people) will not be familiar with the meaning or pronunciation of the word 'anseo'. If the meaning is not already clear from the various site elements and the How to Use the Map instructions, a translation of anseo and an audio clip with its pronunciation is included in the About section of the page. 

### Features to implement in the future
For the next iteration of the site, the following features would be implemented:
Directions to a marker from the user's location.
More markers and perhaps a separate set of markers for TV series.

## Main Langauages, Frameworks, Technologies Used
* HTML
    * Basic skelton of the site structure / Layout of elements
    * Semantic markup (eg, nav, aside, footer)
    * In main.js to facilitate the generation of the dynamic sections of the page

* CSS
    * Styling of the page - colour, fonts, layout fine tuning
    * Aiding interaction and clarity of purpose (eg. cursor:pointer to show presence of a clickable element)
    * Allowing the page to load without empty sections before any marker is clicked. This was achieved using display:none which is overridden by jQuery when a user clicks a marker or other interactive page element.
    * Interactivity (together with jQuery) - for example, switching the class of a div to change the background image.

* JavaScript
    * The main interactive functionality of the site is achieved using JS. Functions are used to manipulate and display data returned by APIs, play audio, send emails.
    * The jQuery library is used to achive interactivity on user actions, for example by toggling the display of additional information.
    * jQuery is also used to aid in selecting DOM elements and change their appearance or content.
    
     
* XMLHttpRequest (XHR)
    XHR is used to interact with the API services and get the relevant data.
    Useful info/practice taken from: 
    * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    * [W3Schools](https://www.w3schools.com/xml/xml_http.asp)

* EmailJS is used to make the contact form function. see Contact Form section above.
Main resources for this section:
    * Interactive frontend module
    * EmailJS [documentation](https://www.emailjs.com/docs/)

* Bootstrap is used for:
    * The navbar dropdown
    * Basic styling of the table containing the move info
    * Basic styling of the contact form
    * Responsive sizing of the div containing the trailer (youtube)
    * Responsive arrangement/layout of elements in the Acknowledgements section

## APIs and Related Resources
* Google Maps JavaScript API is used to display and populate the map with markers.
Main resources for making this functional:
    * Interactive frontend module 
    * Brad Traversy [tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=5s&ab_channel=TraversyMedia)
    * Google [documentation](https://developers.google.com/maps/documentation/javascript/overview)

* OMDB 
    * [OMDB API](http://www.omdbapi.com/) provides the movie data presented in the table and the poster link.

* TMDB API 
    * The link for the trailers on youtube are created using a key returned by the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)

* Open Weather API
    * Weather data presented on the site is supplied by the [Open Weather API](https://openweathermap.org/api)


## Additional Resources:
[Font Awesome](https://fontawesome.com/) is used for icons
[Google Fonts](https://fonts.google.com/) is used for fonts
[TinyJPG](https://tinyjpg.com/) is used for image compression

## Testing Resources
JavaScript validated using [JSHint](https://jshint.com/about/)
HTML validated using the [W3C markup validation service](https://validator.w3.org/)
CSS validated using the [W3C CSS validation service](https://jigsaw.w3.org/css-validator/)

Responsiveness tested/checked using: 
* [Responsinator](https://www.responsinator.com/)
* [Google mobile friendly test](https://search.google.com/test/mobile-friendly)

Accessibility
* https://www.webaccessibility.com/


## Main Issues Overcome

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

## How to Open map in Terrain Mode by Default
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

### How to Improve Contact Form Functionality with Confirmation and Reset
Initial testing of the form showed it to be working but not giving any indication to the user that it was working. This was improved by showing an alert on submit and also resetting/clearing the form.

Resources:
[Stack Overflow for Show Alert](https://stackoverflow.com/questions/22294787/show-alert-when-form-submitted)



## Other resources:
Dot notation (accessing the required data from the weather API): https://www.sitepoint.com/back-to-basics-javascript-object-syntax/

Google maps icon: https://commons.wikimedia.org/wiki/File:Google_Maps_icon.svg

OpenWeather logo: https://mebee.info/2019/10/08/post-1670/


Show alert after form submitted:
https://stackoverflow.com/questions/22294787/show-alert-when-form-submitted










