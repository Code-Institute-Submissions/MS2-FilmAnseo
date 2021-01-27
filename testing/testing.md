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

## Mobile-Friendly
