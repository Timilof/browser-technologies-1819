# Browser Technologies | Tosti App

[Live site here](https://browser-t.herokuapp.com/)

The task for this subject was to make an application with which you could put together a tostie and export the ingredients as a list. This App is extremely simple but works nicely with and without javascript.

## Core functionality of my tosti app

The core functionality of this application is to add tostie ingredients/items to a list and export said list.

This app is buildt with progressive enhancement in mind (however still may or may not break (but only visually) on certain devices... handle with care (this is very unlikely because I've tested it in the devicelab and things went smoothly)).

I made a wireflow prior to making the app so as to visualise the flow of the user thrugh the app.  

![wireflow app](/app/src/img/schetsen1.png)  

![home screen](/app/src/img/screen1.png)  

## flow through app
On opening he app the user is presented with a list of ingredients which they can use to assemble their tostie. The user can select any desired ingredients and they will be added to the list at the bottom-end of the page. The user then has the ability to export this list either to their clipboard or have the list e-mailed to their email.

The entire application is rendered server-side but if the user has javascript enabled will work just as fine. Javascript is only seen as an enhancement.



#### Functional layer  
The core functionality will work in any scenario. Without javscript, Css, images and even on slow internet the app still is very functional and easy to use.

#### Usable layer  
My tostie app works even without JavaScript. However real-time filling in of selected options doesn't happen.  

#### Pleasurable layer  
For the pleasurable state I've made it possible for the user to stay on a single page and still have all the functionalities instead of being routed to a secondary page. Also it's a lot easier to adjust items in the list when all functionalities are available.

## Designing for possible breakpoints  

#### Images
If images are turned off the alt tag is displayed with a description of the ingredient.

#### Custom fonts
I used a custom font for the app 'Germania-One'. But if it can't load it it will show avenir... And if that doesn't work then the user will be served sans-serif.

#### Colours
I've tested the app with a plugin that simulates different types of colourblindness and the contrast is sufficient in each. Also my lighthouse audits show that the app is quite accessible.

#### Mouse/trackpad
You can navigate through to app with the tab, spacebar and enter key. 

#### No fast internet
As far as possible all files are optimized to a smaller size. So everything will load as fast as possible. The app is also rendered serverside and is quite fast.

#### JavaScript disabled
If JavaScript is disabled, the app still works ver well, the user will simply be routed to a second page where they have all the functionalities of a premium user. 

#### Screenreader
The screenreader reads everything as shown on the page and all the values of the ingredient lists are read to the user.



## feature detection

I've used elements and styling of which i was sure wouldn't break on older browsers with fewer/worse feature support.
I applied feature detection in Javascript and css.

For the Javascript feature detect I check if the browser supports each and every of the following functions and if so the user will be given the javascript enhanced version. If not then they will be served the non-javascript version. I decided to do it this way because both versions work very well and I wanted to avoid any bugs and or conflicts with older browsers this way.
```
function enableScript() {
   return featureCheck('classList', document.body)
       && featureCheck('Array', Array.prototype, 'function')
       && featureCheck('querySelectorAll', document.body, 'function')
       && featureCheck('getElementById', document.body)
}
```



