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

## feature detection

I've used elements and styling of which i was sure wouldn't break on older browsers with fewer/worse feature support.
I applied feature detection in Javascript and css.

```
function enableScript() {
   return featureCheck('classList', document.body)
       && featureCheck('Array', Array.prototype, 'function')
       && featureCheck('querySelectorAll', document.body, 'function')
       && featureCheck('getElementById', document.body)
}
```

### opdracht wireflow schetsen

