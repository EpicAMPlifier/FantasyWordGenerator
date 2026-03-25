# FantasyWordGenerator
This is a JS library that allows you to generate fictional words inspired by a language of your choice!   
It uses Wikipedia extracts and N-grams to generate words that sound like they belong to the language you selected.

# LINKING
Simply add this to your External Resources:
https://cdn.jsdelivr.net/gh/EpicAMPlifier/FantasyWordGenerator@latest/wordgen.js

# USAGE
```javascript
async function createResult(title,lang){
  // CONFIG:
  WordGen.letterLimit = 10; // THIS CONTROLS HOW MANY CHARACTERS THE GENERATED WORD CONTAINS.
  WordGen.sliceMin = 0;
  WordGen.sliceMax = 500; // ADJUST THIS TO INCREASE THE SIZE OF THE N-GRAM.
  
  const result = await WordGen.create(title,lang);
  console.log(result());
}
createResult("Hotel", "en");

// "HOTEL" IS THE NAME OF THE WIKIPEDIA ARTICLE. CHANGE TO MATCH YOUR WORD THEME.
// ABSTRACT TITLES COULD CREATE MORE MYSTICAL WORDS. Try out "Volcano", or "Fairy".

// "EN" IS THE LANGUAGE CODE. EN is English, ES is Spanish, DE is German, et cetera. Based on ISO 639-1.
```
