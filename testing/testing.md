## Manual test for overlapping locations
The Cliffs of Moher had 2 films listed. Using the same location details for both meant that only one marker displayed.
Resolution - move one marker slightly.

Console


## JSHint
JSHint is used to validate the JS code.

Several warnings were found.

#### Unused Variable in audio.js (Function Name)
JSHint says that a function is an unused variable. I have looked into this and find there to be no error, so leaving as is:
```Javascript
let playAnseo = document.getElementById("anseo-audio");

function playAudio(){
    playAnseo.play();
}
```

#### Unused Variables in main.js relating to Google or jQuery
JSHint reports 'google' to be an undefined variable on the following line:
```Javascript
mapTypeId: google.maps.MapTypeId.TERRAIN
```
It reports '$' to be an undefined variable on the following line:
```Javascript
$('#optional-movie-details').on('click', '#toggle-bar', function () {
```

As above, I have looked into these JSHint warnings and found there to be no issue.


#### Unused Variables in sendEmail.js
Similar to issue described above, JSHint reports an undefined variable and an unused variable for 'sendMail' and 'emailjs' in the following lines:
```Javascript
function sendMail(contactForm){
    emailjs.send("service_xm6go8k","template_bk2ro5o",{
```
Based on previous finding - have ignored this.

#### JSHint Warnings re ES6
For main.js, JSHint reported 51 warnings as follows:
 	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
    'template literal syntax' is only available in ES6 (use 'esversion: 6').

After looking into this, I resolved the issue by adding the following line to the top of the Javascript file (also for other Javascript files):
```Javascript
/*jshint esversion: 6*/
```
After adding this line, wrnings disappear. For more, see discussion on CI Slack.

## CSS
CSS was validated periodically at https://jigsaw.w3.org/css-validator/validator and all reported errors checked and resolved. For example, the line for padding-right below returned "Value Error : padding-right Too many values or values are not recognized : 0 10px 0"
Resolved by changing 'padding-right' to 'padding'.
As of Jan 27, only warnings in relation to uploaded style sheets are present and these have been ignored, for example: "Imported style sheets are not checked in direct input and file upload modes"

## HTML
There is only one HTML page for this site. As for the CSS, it has been periodically validated. 
Validation tool: Direct input at https://validator.w3.org/#validate_by_input
As of Jan 27, one warning repeated 4 times remains:
"The type attribute is unnecessary for JavaScript resources."

## Console Errors
Checking the console for errors initially revealed the following:
![Missing Favicon](../images/readme/missing-favicon.png)
Some research showed this to be coming from a missing favicon. It was resolved by adding the following code to the head of index.html:
```HTML
<link rel="icon" 
      type="image/png" 
      href="images/map-marker-icon.png">
```
The icon itself was sourced from [IconArchive](https://iconarchive.com/show/small-n-flat-icons-by-paomedia/map-marker-icon.html)

Resources consulted:
* [Stack Overflow](https://stackoverflow.com/questions/39149846/why-am-i-seeing-a-404-not-found-error-failed-to-load-favicon-ico-when-not-usin)
* [W3.org](https://www.w3.org/2005/10/howto-favicon)
* [Stack Overflow](https://stackoverflow.com/questions/43904246/can-i-use-a-fontawesome-character-as-favicon-in-xhtml)

Currently, console is showing no errors on initial page load or during the user interaction.

## Testing Contact Form Functionality
It took me a little bit of time to get the contact form working as I wanted but trial and error and lots of test messages later, it is working as intended. Functionality has been tested on several broswers on mobile and desktop device.
See Issues Overcome in main README for details on the issue of form refresh.

## Testing the Map Functionality
An issue found early on when testing the map was that when clicking a second or third marker, the information displayed was a repeat of the output for previous marker clicked. Essentially, there wasn't a clean break between one marker click and the next. 
After researchingthe issue, I resolved it by setting the infowindow as active infowindow and then closing the 'active' info window when a marker is clicked: 
```javascript
if (activeInfoWindow) { activeInfoWindow.close(); }
[...]
infowindow.open(map, marker);
activeInfoWindow = infowindow;
```
Resource: 
* [Stack Overflow re infoWindow](ttps://stackoverflow.com/questions/35428563/how-to-close-all-infowindow-of-markers-on-the-map?rq=1)

Also consulted: 
* https://support.advancedcustomfields.com/forums/topic/google-map-infowindow-close/
* https://hashnode.com/post/google-maps-api-onclick-on-marker-close-infowindow-of-other-markers-ciou68dw708x33353les71nyi

## Testing API Functionality
After getting a handle on the API responses and the dot notation required to access the required information, the focus of testing was:
* Is the correct info returned for each movie?
* Is the weather data correct per location?
* If the page is displaying information for one location/movie and the user then clicks another marker in the map, does the info update correctly (weather for the new location and data for the new movie).

The process for this was manual testing.

Issue found:

When the details for a location/movie are shown and the user then clicks another location, the trailer does not update if no trailer key is found in the response from the TMDB API for the second movie. That is, the trailer for the previous movie selected is still shown. After figuring out that the issue here was not a problem with the API itself but rather with the data maintained for a movie, the obvious solution was to contribute the missing data to TMDB. This was not required for any mainstream movies but Man of Aran and The Silver Branch were both wwithout any video content on the TMDB API until it was added by providing relevant youtube links. 