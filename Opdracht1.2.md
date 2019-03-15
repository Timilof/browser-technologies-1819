# Browser Technologies
## Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA Web App? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

### Ik heb getest op verschillende features, met de onderstaande features was de pagina nog redelijk bruikbaar:  

  #### Afbeeldingen uitzetten  
        zonder afbeeldingen doet hij het niet omdat mijn app gebouwd is rond afbeeldingen.
  #### Custom fonts uitzetten 
        zonder custom fonts doet hij het ook omdat ik een fallback gebruik met font-family.
  #### Javascript (volledig)  
      zonder javascript runt hij prima omdat hij geheel server side gerendert wordt.
  #### Cookies en localStorage
      zonder cookies en localstorage runt hij prima omdat hij geheel server side gerendert wordt en geen localstorage nodig heeft.

### Met deze features had ik interessante resultaten:

  #### Kleur uitzetten & kleurenblindheid instellen  
  Voor mensen met een kleurenblinde afwijking ziet de website er natuurlijk anders uit maar is hij nog steeds prima te navigeren. De contrasten zijn groot genoeg.
  
  #### Muis/Trackpad werkt niet
 Dit bracht grote problemen want je kunt niet heel makkelijk tabben en elementen selecteren op mijn oude site, op de hernieuwde wel. Verder leest de screenreader de waardes van de checkboxes niet op dus daar kan echt een verbetering in komen.
  
  #### Bandwidth
 Op een sloom 3g netwerk duurt de site bijna twaalf seconden om helemaal te laden en kun je voor een paar secondes niet klikken op interactieve elementen. 

  


### Criteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van alle features die je hebt getest
  - een beschrijving van de Device lab test en screenreader test.
  - beschrijf hoe je de problemen hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben
