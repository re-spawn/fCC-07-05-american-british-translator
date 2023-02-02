const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

function objectFlip(obj) {
  return Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key;
    return ret;
  }, {});
}

class Translator {

  translate(text, locale) {
    if (text == undefined || locale == undefined) {
      return {
        error: 'Required field(s) missing'
      };
    }
    if (text == '') {
      return {
        error: 'No text to translate'
      };
    }
    let titles, timeRegexp, timeReplacement, only, spelling;
    switch(locale) {
      case 'american-to-british':
        titles = {...americanToBritishTitles};
        timeRegexp = /(\d{1,2}):(\d\d)/g;
        timeReplacement = '$1.$2';
        only = {...americanOnly};
        spelling = {...americanToBritishSpelling};
        break;
      case 'british-to-american':
        titles = {...objectFlip(americanToBritishTitles)};
        timeRegexp = /(\d{1,2}).(\d\d)/g;
        timeReplacement = '$1:$2';
        only = {...britishOnly};
        spelling = {...objectFlip(americanToBritishSpelling)};
        break;
      default:
        return {
          error: 'Invalid value for locale field'
        };
    }
    let translation = text;
    const spanStart = '<span class="highlight">';
    const spanEnd = '</span>';
    // titles
    Object.keys(titles).forEach((key) => {
      translation = translation.replaceAll(
        new RegExp(key + '(?!' + spanEnd + ')', 'gi'),
        spanStart + titles[key].substring(0, 1).toUpperCase() +
          titles[key].substring(1).trimEnd() + spanEnd + ' ');
    });
    // time
    translation = translation.replaceAll(
      timeRegexp,
      spanStart + timeReplacement + spanEnd);
    // only
    Object.keys(only).forEach((key) => {
      translation = translation.replaceAll(
        new RegExp(key + '(?!' + spanEnd + ')' + '(\\W)', 'gi'),
        spanStart + only[key] + spanEnd + '$1');
    });
    // spelling
    Object.keys(spelling).forEach((key) => {
      translation = translation.replaceAll(
        new RegExp(key + '(?!' + spanEnd + ')' + '(\\W)', 'gi'),
        spanStart + spelling[key] + spanEnd + '$1');
    });
    if (translation == text) {
      translation = 'Everything looks good to me!';
    }
    // console.log("text:", text);
    // console.log("translation:", translation);
    return {
      text: text,
      translation: translation
    };
  }

}

module.exports = Translator;
