# MS2 - Film Anseo
![Responsive Site](/images/readme/film-anseo-responsive.png)
Live site: [Film Anseo](https://workingedge.github.io/MS2-FilmAnseo/)

This is my MS2 project - a responsive web app for movie lovers visiting or living in Ireland who may like to visit locations where famous movies have had scenes shot.

# Site purpose
The purpose of the site is to be a quick and easy look into the Irish landscape to see where well-known or loved movies have had scenes shot - irrespective of whether the location served as itself (as in Man of Aran, for example) or as a fictional or even fantastical place (as in Princess Bride or Star Wars). 

## UX
The site aims to be simple and quick to use with a mobile-first design approach. It may not always have the full attention of the user so it should be clutter free and straighforward. It should have an upbeat, adventurous feel that aligns with people on holidays or taking an outing.
At the same time, it should have enough informational value to keep a user engaged or to make return visits worth their while.
Becasue the site is intuitive and straighforward, any instructional content that a user might want to consult on their first visit should be easy for them to ignore on subsequent visits.
The direction of travel on the site is map -> movie, not the other way around (there is no functionality to search for a movie, for example). Therefore,the map is the central focus.

## Target Audience/User Stories
* I am one of a group of tourists sitting at a cafe table after lunch wondering where we'll go for the afternoon. After finding the site, we can easily view the map, discuss the films, chat about the movie trivia and make a decision on whether or not to go to the location based on weather info.
* As a first-time user of the site, the information I need to use the map and understand what is being presented is clearly accessible.
* As a repeat user of the site, I do not need to consult the directions of how to interact with the site. The information that is acessible for a first-time user does not impinge on my use of the map - ie the info can easily be ignored.
* As a tourist/visitor who has been impressed with their visit to a location, I would like to keep the experience alive by following up with some connected activity. For example, after visiting the Cliffs of Moher, I can check the site and then decide to watch Princess Bride on the bus ride back to Dublin.
* As a group of friends spending time together for a weekend and looking for a diversion, the site serves as a source of valuable location-specific weather info and also as a talking point.
* As an administrator at a local tourist office, I can easily get in touch with the site curator to highlight a movie made in the vicinity, thus adding to the list of local tourist attractions.

## Design
### Wireframe 
The [wireframe](wireframes/wireframe.pdf) served as a general guiding principle for the design but was not followed exactly.

### Color Palette
Thinking about colours, my main aim was to:
* Have a sense of the cinema (that is, black) surrounding the trailer and perhaps elsewhere, mimicking movie credits.
* Incorporate green as the color most associated with the Irish landscape.
* Have upbeat colours that add to a sense of fun in the site without feeling childish or undermining the information.

The initial color palett was based on the above consideration but it has modified during the design and testing phases.
See: [Initial color pallete](/color/palette-for-film-anseo.pdf)

In relation to finding color threads to follow from images, the following site was a useful resource: [ImageColorPicker](https://imagecolorpicker.com/)

### Typography
There are two aims for the typography on the site:
* Add to the sense of adventure/holidays/non-serious nature of the content
* Allow quick and easy reading of text details.

To achieve this, the main section headers and page title use the font [Bangers](https://fonts.google.com/specimen/Bangers?preview.text_type=custom#glyphs) - based on "the style of mid-20th century superhero comics".
In contrast, the detail text used on the site uses [Open Sans](https://fonts.google.com/specimen/Open+Sans?preview.text_type=custom#about) with a "neutral, yet friendly appearance".

### Imagery
There are only two static images used on the site but they are very prominent.
The first serves as an intriguing but vague depiction of a brooding Irish coastal landscape. The aim is to set up the cinematic feel and to be enticing for the user to know more. 
The second image is a still from a movie featured on the site and together with the colour change and quote in Bangers font, it is meant to kick the users attention further into gear and get them excited to interact with the site.

Note on usage:
The Young Offenders image is copyright but used here for educational purposes and with 'fair use'.
The coastal image is freely used under the terms of [Unsplash](https://unsplash.com/license). The photographer is creditied in the site footer and in the Credits section of the ReadMe.

## Features
#### Map
The map is the focus of the site and sits directly in front of the user, below the hero image, the moment they land on the page. The zoom level is appropriate that they can quickly see the entire country and choose markers in any area - where they are, where they were, or where they intend to be.
The map functionality is provided by the Google Maps JavaScript API.
The map uses the familiar default Google markers but displays the 'terrain' view - deempahsizing roads and everyday locations to allow the focus to be on the landscape and the imaginative world of film.
When clicked, the map markers open an infowindow displaying only the film title and the name of the location. The rest of the film data is displayed dynamically in the main body of the page.

### Weather Info
Because the user of the map may be thinking about a trip to a location featured on the map, adding weather info for the selected location means they don't need to leave the app to check that.
The weather data section initially shows an icon only. By tapping or clicking the icon, the user is shown more detailed info:
* Quick description of weather conditions 
* Actual tempaerature and 'feels like' temperature
* Chance of rain during next six hours

Although this information might be important for the user, it should be easy to hide it and shift the focus to the movie info. This is achieved by the ability to toggle the weather info display.

The weather data comes from the [Open Weather API](https://openweathermap.org/api) and the same lat and lng coordinates as are used to place the markers are used to make a call to the API. To be as useful as possible for a user, the weather data displayed is specific to each film location, not a general forecast for Ireland.

### Film Info
By default, the textual data for a selected film is limited to just just the title and the plot. The user can choose to show or hide the remaining data (director, actors, awards etc).

Below that, a promotional poster for the film gives a further sense of the time period (1950s or 2010s), and genre.


### Film trailer
A trailer or some other promotional clip is an important aspect of the iformation about any film and this is shown as the third segment of the film data - after the table and the poster. The trailer container is set to be reponsive and will therefore allow a user to view the trailer at a reasonable size regardless of device.


### Contact Form
The list of film on the map is obviously incomplete. The contact form gives the option to users to provide information about movies that are not already on the map or to provide any other feedback or otherwise get in touch.
The design of the form is very simple and designed to be straighforward for a user even if they don't speak English as a their first language. Also, in an effort to be allow the user to breathe (figuratively) and not feel constricted as they make a connection, the form is well spaced out and has minimal styling.

For the site user, it is importnat to feel like their communication will be properly heard. To that end, an alert displays to let them know the form has sent successfully and a copy of the communication is also sent to the email address they have provided in the form.

To ensure intended communication with the site is not lost, the form gives feedback to the user if they have failed to fill a required field or given an invalid format for their email address.

![Email sent from contact form](/images/readme/emailjs-result.png)

### Audio Clip for Irish Pronunciation
Toursits are one of the target audiences of the site. They (as well as many Irish people) will not be familiar with the meaning or pronunciation of the word 'anseo'. If the meaning is not already clear from the various site elements and the How to Use the Map instructions, a translation of *anseo* and an audio clip with its pronunciation is included in the About section of the page. 

### Sub-Features
#### Hero Image
The site features a hero image of the Irish coastal landscape that reflects several of the site's underlying design decisions - 
* It is not tied to any specific place/time and 
* It hints at a sort of poetic landscape open to becoming something else in a filmic world
* It highlights the cinematic beauty of the location - ie an island in the north Atlantic.

#### Fun Call to Action 
The call to action is presented in the map instructions. The poetic,misty cinematic image of the Skelligs (islands) switches abruptly to the more mischievous and energising image and quote from [The Young Offenders](https://www.theyoungoffenders.com/). The quote lends a further sense of adventure and whimsical mischief to the site and helps it to be a fun engagement by itself, without any follow-on action.

#### Navigation and logo
The site has a navigation bar that includes a hamburger icon (links to the contact form and about sections of the page). It also contains the site title and an icon (marker) that immediately helps to explain the site purpose.


## Features to Implement in the Future
Thinking about a second iteration, the following features would be nice to have: 
* Directions to a marker from the user's location.
* More markers and perhaps a separate set of markers for TV series.
* Some more information about the locations - some snippet of local history, the meaning of the placename etc.

## Main Langauages, Frameworks, Technologies Used
* HTML
    * Basic skelton of the site structure / Layout of elements
    * Semantic markup (eg, nav, aside, footer)
    * In main.js (in template literals) to facilitate the generation of the dynamic sections of the page

* CSS
    * Styling of the page - colour, fonts, layout fine tuning
    * Aiding interaction and clarity of purpose (eg. cursor:pointer to show presence of a clickable element)
    * Allowing the page to load without empty sections before any marker is clicked. This was achieved using display:none which is overridden by jQuery when a user clicks a marker or other interactive page element.
    * Interactivity (together with jQuery) - for example, switching the class of a div to change the background image.

* JavaScript and jQuery
    * The main interactive functionality of the site is achieved using JS. Functions are used to manipulate and display data returned by APIs, play audio, send emails.
    * The jQuery library is used to achive interactivity on user actions, for example by toggling the display of additional information.
    * jQuery is also used to aid in selecting DOM elements and change their appearance or content.
    
     
* XMLHttpRequest (XHR)
    XHR is used to interact with the API services and get the relevant data.
    Useful info/practice taken from: 
    * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    * [W3Schools](https://www.w3schools.com/xml/xml_http.asp)

* EmailJS is used to make the contact form function. 
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
* [Font Awesome](https://fontawesome.com/) is used for icons
* [Google Fonts](https://fonts.google.com/) is used for fonts
* [TinyJPG](https://tinyjpg.com/) is used for image compression
* [Git](https://git-scm.com/) is used for version control
* [GitHub](https://github.com) is used to sore the project files and host the live site (GitHub Pages)
* [GitPod](https://www.gitpod.io/) is the IDE used.
* [Audacity](https://www.audacityteam.org/) was used to create the audio file.
* [IconArchive](https://iconarchive.com/show/small-n-flat-icons-by-paomedia/map-marker-icon.html) was used as source of the favicon.


## Testing

For results of manual testing see [Testing](testing/testing.md)


## Main Issues Overcome

### How to Access the ID for the Movie
The [IMDb](https://www.imdb.com/) ID is the central piece of info to allow the API to return results for a particular movie. My problem was how to link the key for a specific move with a specific marker so that the correct API request was sent for the marker.
Initially, I included the key as innerHTML in a hidden "<p>" element in the InfoWindow content. However, this seemed like a clumsy approach and was confirmed as such by my mentor (Antonio) who advised providing a property in the marker object to hold this info rather than the HTML. This was an easy fix and once identified I could simply reassign the idForSearch variable:
From:
```JavaScript
let idForSearch = document.getElementById("IMDB").innerHTML;
```
To 
```JavaScript
let idForSearch = activeInfoWindow.anchor.movieId; 
```
### Get Trailer Data
The [OMDb](http://www.omdbapi.com/) API being used to return the results does not provide a convenient way to access a trailer. [TMDB](https://www.themoviedb.org/) is a another free movie API that does provide an ID (key) that can be used to build a url to access a youtube trailer. For that reason, I switch to the TMDB API to furnish the details for the trailer.

Code snippet accessing the required key:
```JavaScript
let trailerInfo = this.responseText;
                        let jsonTrailer = JSON.parse(trailerInfo);
                        youtubeTrailerId = jsonTrailer.results[0].key;
                        displayTrailer(youtubeTrailerId);
```

So, why not just use the TMDB API altogether?
Initially, I looked at both and just preferred using the OMDB API. I had the site functioning before realising that I would not be able to provide a trailer link with OMDb. At that point, I considered switching everything to TMDB but it seems to make sense to utilise both. If there is a problem with one service (service is down, problem with API key etc), at least some information will still be able to come through via the other API.

For more on the OMDb issue, see: https://github.com/omdbapi/OMDb-API/issues/180


### How to Access the Required Info from the TMDB Response
It took a little bit of time to figure out how to access the various elements of the API responses - see code snippet in preceding section. However, once this fell into place, it suddenly became quite straighforward. A similar process is reqired for accessing the required info from the weather API.

Resources consulted on this:
https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
https://www.samanthaming.com/tidbits/76-converting-object-to-array/


### How to Populate the HTML Cleanly
Because there is quite a bit of data used to populate the HTML divs,the code was initially looking like it would end up being messy and hard to read.
This was resolved by separating the build-out of the HTML sections to separate functions. The HTML was set up using template literals.
Excellent resource that served as the base for this approach: https://www.youtube.com/watch?v=DG4obitDvUA&t=1818s

### How to Open map in Terrain Mode by Default
The hybrid mode in which the Google map opens by default is not in keeping with the intended look and feel of the site. In terrain mode, the color aligns with the color scheme of the site and it empahsizes the landscape of the country which is more in keeping with the site purpose.
To open in terrain mode by default, I added the following code to the initmap() function:
```JavaScript
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.TERRAIN
``` 
Source: https://stackoverflow.com/questions/8607036/google-maps-v3-terrain-view-by-default

### How to Fix Issue with No Listener for jQuery Selector
I had an issue whereby the following code did nothing:
```JavaScript
$("#toggle-button").click (function (){
      $("#optional-rows").toggle(1000);    
});
```
in researching this, the following were some blind alleys:
* Is the issue with CSS (display: none)? No, seemed like the jQuery show() method should override that.
* Is it an issue with placement of the jQuery file? Checked - seemed fine.
* Is it an issue with '$'? Replaced that with 'jQuery', no change.
Checked jQuery debugging strategy outlined here: https://www.simonbattersby.com/blog/debugging-jquery-a-beginners-guide/

Finally, on this post (https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art044), checking the DOM for an event listener on the selector was mentioned. I did that and found that there was nothing being listened for

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

### Centering the Wrapper
How to cente the wrapper so that it sits nicely in the center of the viewport and ahs all its content as intended:

https://stackoverflow.com/questions/8701054/how-to-center-a-wrapper-div-and-not-the-content
https://css-tricks.com/best-way-implement-wrapper-css/

### How to Manipulate the Weather API Reponse to Show the Data in a User-Friendly Way
In the weather section of the page, the chance of rain is given as a percentage, but the API gives this as a number between 0 and 1.
Similarly, the temperature is given as a whole number but the API gives it to two decimal places. To manipulate the display of this data I used the following JS:
toFixed() - https://www.w3schools.com/jsref/jsref_tofixed.asp
parseInt() - https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number
Thesed were also covered in teh course content so were not completely new.

### How to Show Degrees C Symbol
Instead of displaying 'degrees C", I wanted to use the degree symbol, found here:
https://www.toptal.com/designers/htmlarrows/symbols/degree-celsius/

### How to Allow for a Responsive Trailer Size Appropriate to the User's Device
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

## Deployment
The site is deployed using [GitHub Pages](https://pages.github.com/). 

I deployed to GitHub Pages as follows:
1. On GitHub, in the project repository, choose *Settings*.
2. Verify the repo name and go to the *GitHub Pages* section.
3. Enter the details where required, in this case:
* Branch is master and the directory is the default top level (root).
* Theme: None, custom domain: none
* HTTPS is enforced by default. 
4. After a couple of minutes the site is available online.

To run a copy of the site locally, [download a zip file](https://stackoverflow.com/questions/2751227/how-to-download-source-in-zip-format-from-github#:~:text=To%20simply%20download%20a%20repository,file%20of%20the%20whole%20lot.&text=It%20then%20gives%20you%20a%20zip%20file%20to%20download.) of the repository contents or [clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the repository and run that in your IDE or local machine.

Once deployed, all testing was done on the live site at: https://workingedge.github.io/MS2-FilmAnseo/

## Known Issues
There is a an error with the responsiveness of the footer on some devices whereby the TMDB icon resizes (down) to a greater extent than its neighbouring icons. 

## Credits 

The following youtube tutorials were foundational for this project:

* [Brad Traversy - Google Maps Javascript API](https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=5s&ab_channel=TraversyMedia)
* [LearnWebCode - Template Literals/JSON to HTML Tutorial](https://www.youtube.com/watch?v=DG4obitDvUA&t=1818s)

My mentor Antonio gave really good advice and took time to work through questions on improving the code.

The corresponding sections of the course material were very helpful in thinking about how to overcome issues - for example, displaying temperatue as an integer or making HTTPRequests.

## Additional Acknowledgements
* The main site image is from [Mark de Jong on Unsplash](https://unsplash.com/photos/Fnp3Y3M0wkA)
* OpenWeather logo is from https://mebee.info/2019/10/08/post-1670/
* The Google Maps icon is from https://commons.wikimedia.org/wiki/File:Google_Maps_icon.svg 
* Resources consulted for film info are included [here](MovieInfo.md).

Over the course of development, there were too many resources consulted to mention them all. The main ones that provided useful, clear answers or clearly explained code solutions are mentioned together with the corresponding issues in the Issues Overcome section above.

## Disclaimer
This website is for educational purposes only.













