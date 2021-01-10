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

## Features

### Map

### Info table

### Image

### Contact

### Features to implement in the future

## Technologies Used
HTML/CSS/JS/jQuery

APIs: Google Maps, OMDB, TMDB, JSMail

## Additional Resources

## Testing
Separate file

## Main Issues Overcome

### Restrict Googlemaps InfoWindows to One
Via the DOM, the infowindow provides the base information (ID) for the selected movie so it is important that only a single infowindow be open at any one time. I had some issues implementing this at first but it was finally resolved by setting the infowindow as active infowindow and then closing the 'active' info window when a marker is clicked: 
```javascript
if (activeInfoWindow) { activeInfoWindow.close(); }
...
infowindow.open(map, marker);
activeInfoWindow = infowindow;
```
Resource: 
https://stackoverflow.com/questions/35428563/how-to-close-all-infowindow-of-markers-on-the-map?rq=1
Also consulted: 
https://support.advancedcustomfields.com/forums/topic/google-map-infowindow-close/
https://hashnode.com/post/google-maps-api-onclick-on-marker-close-infowindow-of-other-markers-ciou68dw708x33353les71nyi

### How to Access the Required Info from the TMDB Response
The app uses two movie APIs. The main one is OMDB, but this does not provide any info to access a trailer. TMDB does - but to access it required dot and bracket notation:
```javascript
youtubeTrailerId = jsonTrailer.results[0].key;
```

Resources consulted on this:
https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
https://www.samanthaming.com/tidbits/76-converting-object-to-array/

## How to Populate the HTML Cleanly
Because there is quite a bit of data used to populate the HTML divs, the code was initially looking like it would end up being messy and hard to read.
This was resolved by separating the build out of the HTML sections to separate functions. The HTML was set up using template literals.
Excellent resource that served as the base for this approach: https://www.youtube.com/watch?v=DG4obitDvUA&t=1818s

## How to get the required movie ID from the clicked map marker to JS
I'm not sure if the approach I've taken here is the best, but it seems to work ok. My problem was how to make the connection from what happens on the map (info  changes dynamically depending on the marker clicked) and the main HTML page. The resolution I've gone with is to use jQuery to acces the value of a hidden paragraph and use that value as the basis for querying the movie APIs and populating the HTML.

## How to Open map in terrain Mode by Default
The hybrid mode in which the map opens is not in keeping with the intended look and feel of the site. In terrain mode, the color aligns with the colr scheme of the site and it empahsizes the landscape of the country which is more in keeping with the site purpose.
To open in terrain mode by default, added the following code to the initmap() function:
```JavaScript
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.TERRAIN
    ``` 

Source: https://stackoverflow.com/questions/8607036/google-maps-v3-terrain-view-by-default






