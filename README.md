# Fantasy Word Generator
Fantasy Word Generator is a **JS library** that allows you to generate fictional words **inspired by the language of your choice**!   
It is a stochastic language model that uses live **Wikipedia extracts** as training data, combined with **N-gram** modeling, to generate linguistically consistent fictional words.

# TEST IT OUT!
You can play around with the generator at:
https://fantasywordforge.github.io/

**Example:** <br>
Input => ```Eldstöð``` (Icelandic for volcano), ```IS```. <br>
Output => ```hawaitað```, ```vatnsgufur```, ```gjóskugosi```, ```dreinum```, ```hraum```, ```yfist```.

# LINKING
Simply add the **CDN link** below to a `<script>` tag in your HTML:
https://cdn.jsdelivr.net/gh/EpicAMPlifier/FantasyWordGenerator@latest/wordgen.js

# USAGE
```javascript
async function createResult(title,lang){
  // CONFIG:
  WordGen.letterLimit = 10; // CONTROLS THE MAXIMUM AMOUNT OF CHARACTERS THE WORD(S) CAN CONTAIN.
  WordGen.sliceMin = 0;
  WordGen.sliceMax = 500; // ADJUST TO INCREASE OR DECREASE THE SIZE OF THE N-GRAM. INCREASING USUALLY LEADS TO MORE REALISTIC WORDS.
  WordGen.realGuard = true; // REMOVES REAL WORDS FROM THE OUTPUT. TRUE BY DEFAULT; TO KEEP REAL WORDS SET TO FALSE.

  const result = await WordGen.create(title,lang);
  console.log(result());
}
createResult("Hotel", "en");

// "HOTEL" IS THE NAME OF THE WIKIPEDIA ARTICLE. CHANGE TO MATCH YOUR WORD THEME.
/* ABSTRACT TITLES COULD CREATE DIFFERENT THEMED WORDS.
E.g. science-related titles will lead to more science.
Try out "Volcano", or "Fairy". 
*/

/* "EN" IS THE LANGUAGE CODE. Based on ISO 639-1, with some exceptions.
Examples:
> EN: English
> ES: Spanish
> FR: French
> DE: German
> NL: Dutch
> IS: Icelandic
> PL: Polish
> TR: Turkish
> VI: Vietnamese
> UK: Ukrainian
> RU: Russian
*/
```

It returns the function ```result()```, which generates new words on each call.
