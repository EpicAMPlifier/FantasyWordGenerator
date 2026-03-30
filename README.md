# Fantasy Word Generator
Fantasy Word Generator is a **JS library** that allows you to generate fictional words **inspired by a language of your choice**!   
It uses **Wikipedia extracts** and an **N-gram** to generate words that sound like they belong to the language you selected.

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
