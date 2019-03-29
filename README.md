# Browser Technologies | Tosti App

[Live site here](https://browser-t.herokuapp.com/)

The task for this subject was to make an application with which you could put together a tostie and export the ingredients as a list. This App is extremely simple but works nicely with aswell as without javascript.

Core functionality of my tosti app

The core functionality of this application is to add tostie ingredients/items to a list and export said list.

This app is buildt with progressive enhancement in mind however still may or may not break (but only visually) on certain devices... handle with care.

![home screen](/src/img/screen1.png)

### feature detection

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
![wireflow app](/src/img/schetsen1.png)
