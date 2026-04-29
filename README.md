# Fantasy Word Generator
**Generate fantasy names, alien languages, or realistic-sounding words from any Wikipedia topic!** <br><hr>
Fantasy Word Generator is a **JS library** that generates fictional words **inspired by any language**!   
It is a stochastic language model that uses live **Wikipedia extracts** as training data, combined with **N-gram** modeling, to generate linguistically consistent fictional words.<br><br>

# TEST IT OUT!
Try the generator instantly in your browser at:<br>
https://fantasywordforge.github.io/.<br><br>

**Examples:** <br>
Input: ```Dragon```, ```EN```. <br>
Output: ```levolevia```, ```atureas```, ```beneas```, ```amduas```, ```resun```, ```adrieurite```, ```tutairus```.<br><br>
Input: ```Eldstöð``` (Icelandic for volcano), ```IS```. <br>
Output: ```hawaitað```, ```vatnsgufur```, ```gjóskugosi```, ```dreinum```, ```hraum```, ```yfist```.
<br><br>

<div>
  <img src="demo.png" width="500">
</div>
<br><br>

# USE CASES:
- Fantasy character and place names
- Worldbuilding and writing
- Game development
- Procedural content generation
<br>

# LINKING:
Simply add the **CDN link** below to a `<script>` tag in your HTML:
https://cdn.jsdelivr.net/gh/EpicAMPlifier/FantasyWordGenerator@latest/wordgen.js<br><br>

# USAGE:
```javascript
async function createResult(title,lang) {
  // CONFIG:
  WordGen.letterLimit = 10; // Controls the maximum length of generated words.
  WordGen.sliceMin = 0;
  WordGen.sliceMax = 500; // N-gram size can be adjusted by changing the difference between sliceMin and sliceMax. Increasing usually leads to more realistic words.
  WordGen.realGuard = true; // Removes most real words from the output. True by default; to keep real words, set to false.

  const result = await WordGen.create(title, lang);
  console.log(result());
}
createResult("Hotel", "en");

// "Hotel" is the name of the Wikipedia article. Change to match your word theme.
/* Abstract titles can create different themed words.
E.g. science-related titles will lead to more technical-looking terms.
Try out "Volcano", or "Fairy". 
*/

/* "EN" is the language code. Based on ISO 639-1, with some exceptions.
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
<br>

> - Returns a function (```result()```) that generates **one** new word on each call. <br>
> - The quality of the generated words depends on the content of the source article and the size of the N-gram. <br>
> - N-gram size can be adjusted using ```sliceMin``` and ```sliceMax```, as shown above. <br>
> - ```realGuard``` attempts to filter out most real words **but may not always succeed**. Some outputs may therefore resemble real words or appear to be portmanteaus.
<br>
<br>

*This library was created as an experiment in language generation.*


