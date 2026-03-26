window.WordGen = {
  sliceMin: 0,
  sliceMax: 500,
  letterLimit: 10, // Word letter limit

  create: async function (articleTitle, langCode) {
    let count = 0;
    const min = this.sliceMin;
    const max = this.sliceMax;
    const genLimit = this.letterLimit;

    let genLetter = '';
    let totalPieces = [];
    let alphabetList = {};
    let startLetters = [];

    const text = await getWikiText(articleTitle, langCode);

    const lowerWords = text.toLocaleLowerCase(langCode === 'tr' ? 'tr-TR' : undefined);
    const words = lowerWords.match(/[\p{L}]{2,}/gu); // UPDATED: Now allows any letters in the Unicode Standard! As of [v2.0] overhaul.
    words.slice(min, max).forEach((word) => {  // Now with Turkish, Greek, Vietnamese and Cyrillic characters! As of [v2.0].
      let pieces = word.split(/(?<=[aeiouy\u0131öüäàâéèêëíìîïóòôúùûαεηιουωάέήίόύώаеёиоуыэюяєіїàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+)/gu).filter((p) => p !== '');
      totalPieces.push(pieces);
    });

    compileNGram();

    /* SCRAPER */
    async function getWikiText(articleTitle, langCode) {
      const baseURL = `https://${langCode}.wikipedia.org/w/api.php`;
      const params = new URLSearchParams({
        action: 'query',
        prop: 'extracts',
        explaintext: true,
        titles: articleTitle,
        format: 'json',
        origin: '*',
      });

      const response = await fetch(`${baseURL}?${params.toString()}`);
      const data = await response.json();

      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      const content = pages[pageId].extract;
      return content;
    }

    /* MAPPER (CHUNKER) FUNCTION */
    function compileNGram() {
      totalPieces.forEach((chunk) => {
        chunk.forEach((letter, index) => {
          if (!chunk[index - 1]) {
            startLetters.push(letter);
          }
          if (alphabetList[letter]) {
            if (
              chunk[
                index + 1
              ] /*&& !alphabetList[letter].includes(chunk[index+1])*/
            ) {
              alphabetList[letter].push(chunk[index + 1]);
            }
          } else {
            alphabetList[letter] = [];
            if (chunk[index + 1]) {
              alphabetList[letter].push(chunk[index + 1]);
            }
          }
          if (index === chunk.length - 1) {
            alphabetList[letter].push('ESC');
          }
        });
      });
      // console.log(alphabetList);
      // console.log(startLetters);
    }

    /* WORD CONSTRUCTOR */
    function generateWord() {
      let retries = 0;

      while (retries < 50) {
        let genLength = 0;
        let generatedWord = '';

        let currentChunk = startLetters[Math.floor(Math.random() * startLetters.length)];
        generatedWord = currentChunk;

        while (
          currentChunk !== 'ESC' &&
          alphabetList[currentChunk] &&
          alphabetList[currentChunk].length > 0 &&
          genLength < genLimit
        ) {
          genLetter =
            alphabetList[currentChunk][
              Math.floor(Math.random() * alphabetList[currentChunk].length)
            ];

          if (
            genLetter !== 'ESC' &&
            generatedWord.length + genLetter.length <= genLimit
          ) {
            generatedWord += genLetter;
          }
          currentChunk = genLetter;
          genLength++;
        }

        // Vowel Guard (Now with Turkish, Greek, Vietnamese and Cyrillic characters! As of [v2.0].)
        if (/([\p{M}aeiouy\u0131öüäàâéèêëíìîïóòôúùûαεηιουωάέήίόύώаеёиоуыэюяєіїàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+)/gu.test(generatedWord) && generatedWord.length <= genLimit) {
          return (
            generatedWord ||
            'Error: Config "WordGen.letterLimit" might be too small.'
          );
          break;
        }
        retries++;
      }
    }

    // return await train(articleTitle, langCode);
    return generateWord;
  },
};
