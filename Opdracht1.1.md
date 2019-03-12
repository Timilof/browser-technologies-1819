# Browser Technologies
## Opdracht 1.1 - Breek het web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet.

### Doel van deze opdracht
Het doel van deze opdracht is om erachter komen dat je misschien aannames hebt die niet kloppen, en om je in te laten leven in de eindgebruiker.

Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
Beschrijf hoe je dit kan fiksen
Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken


## Custom fonts en Local storage (en een klein beetje ad blockers)
  ### research naar custom fonts 
  * Custom fonts zijn een beetje zwaar en kunnen de performance van je site omlaag halen.
  * vaak ben je gelimiteerd tot open source fonts
  * sommige fonts zijn te zwaar om te downloaden
  
verder niet bijzonder veel gevonden over custom fonts.
fallback fonts voor wanneer een font niet beschikbaar is op een device voor wat voor reden dan ook.
misschien zo?
``` css
font-family: comic-sans, sans-serif;
```

  ### local storage
  * groot support (alleen opera mini heeft geen local storage)
  * toegang tot data is snel en makkelijk
  * het is erg moeilijk om de local storage afzonderlijk uit te zetten (vaak moeten de cookies ook uit en dan doen sommige grote sites het niet)
  * De gebruiker heeft geen internet connectie nodig om je site te zien
  
  sommige sites doen het dus niet als je je localstorage (en cookies) uit hebt, zoals facebook, github, slack, de action en zegmaar alles waar je ingelogd bent.
  De meeste sites kijken of er local storage beschikbaar is voordat ze nieuwe requests maken maar heb dit niet kunnen testen omdat mijn manier van de local storage uit zetten ookde cookies disabelt.
  
 Navigeer naar instellingen in je browser en zet je local storage uit en probeer dan een van de onderstaande sites te bezoeken.
  
  [facebook](facebook.com)
  [slack](https://minor-web-1819.slack.com/)
  [action](https://www.action.com/nl-nl/)
  [github](https://github.com/Timilof/browser-technologies-1819)
  
### Ad blockers
  content die wordt verstopt omdat je je ad blocker aan hebt
  * sommige sites herkennen dat je ad block aan hebt en vragen of je ze wil whitelisten
  * sommige sites vervangen de lege plekken die door jou ad block worden gemaakt met hun eigen content / placeholder [reddit](https://www.reddit.com) en geven het als een error in de console [Google](google.com)
  
bronnen:
https://www.swarmonline.com/using-custom-fonts-in-web-design/
https://www.quora.com/What-are-the-pros-and-cons-of-using-an-HTML5-local-storage-vs-cookies
https://getrevising.co.uk/grids/local_storage
