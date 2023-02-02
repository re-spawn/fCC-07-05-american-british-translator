const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const spanStart = '<span class="highlight">';
const spanEnd = '</span>';

suite('Unit Tests', () => {

  suite('American to British', () => {
    const locale = 'american-to-british';
    test('01. Mangoes are my favorite fruit.', () => {
      let text = 'Mangoes are my favorite fruit.';
      let translation = text.replace('favorite', spanStart + 'favourite' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('02. I ate yogurt for breakfast.', () => {
      let text = 'I ate yogurt for breakfast.';
      let translation = text.replace('yogurt', spanStart + 'yoghurt' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test("03. We had a party at my friend's condo.", () => {
      let text = "We had a party at my friend's condo.";
      let translation = text.replace('condo', spanStart + 'flat' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('04. Can you toss this in the trashcan for me?', () => {
      let text = 'Can you toss this in the trashcan for me?';
      let translation = text.replace('trashcan', spanStart + 'bin' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('05. The parking lot was full.', () => {
      let text = 'The parking lot was full.';
      let translation = text.replace('parking lot', spanStart + 'car park' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('06. Like a high tech Rube Goldberg machine.', () => {
      let text = 'Like a high tech Rube Goldberg machine.';
      let translation = text.replace('Rube Goldberg machine', spanStart + 'Heath Robinson device' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('07. To play hooky means to skip class or work.', () => {
      let text = 'To play hooky means to skip class or work.';
      let translation = text.replace('play hooky', spanStart + 'bunk off' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('08. No Mr. Bond, I expect you to die.', () => {
      let text = 'No Mr. Bond, I expect you to die.';
      let translation = text.replace('Mr.', spanStart + 'Mr' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('09. Dr. Grosh will see you now.', () => {
      let text = 'Dr. Grosh will see you now.';
      let translation = text.replace('Dr.', spanStart + 'Dr' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('10. Lunch is at 12:15 today.', () => {
      let text = 'Lunch is at 12:15 today.';
      let translation = text.replace('12:15', spanStart + '12.15' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
  });

  suite('British to American', () => {
    const locale = 'british-to-american';
    test('11. We watched the footie match for a while.', () => {
      let text = 'We watched the footie match for a while.';
      let translation = text.replace('footie', spanStart + 'soccer' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('12. Paracetamol takes up to an hour to work.', () => {
      let text = 'Paracetamol takes up to an hour to work.';
      let translation = text.replace('Paracetamol', spanStart + 'Tylenol' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('13. First, caramelise the onions.', () => {
      let text = 'First, caramelise the onions.';
      let translation = text.replace('caramelise', spanStart + 'caramelize' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('14. I spent the bank holiday at the funfair.', () => {
      let text = 'I spent the bank holiday at the funfair.';
      let translation = text.replace('bank holiday', spanStart + 'public holiday' + spanEnd);
      translation = translation.replace('funfair', spanStart + 'carnival' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('15. I had a bicky then went to the chippy.', () => {
      let text = 'I had a bicky then went to the chippy.';
      let translation = text.replace('bicky', spanStart + 'cookie' + spanEnd);
      translation = translation.replace('chippy', spanStart + 'fish-and-chip shop' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test("16. I've just got bits and bobs in my bum bag.", () => {
      let text = "I've just got bits and bobs in my bum bag.";
      let translation = text.replace('bits and bobs', spanStart + 'odds and ends' + spanEnd);
      translation = translation.replace('bum bag', spanStart + 'fanny pack' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('17. The car boot sale at Boxted Airfield was called off.', () => {
      let text = 'The car boot sale at Boxted Airfield was called off.';
      let translation = text.replace('car boot sale', spanStart + 'swap meet' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('18. Have you met Mrs Kalyani?', () => {
      let text = 'Have you met Mrs Kalyani?';
      let translation = text.replace('Mrs', spanStart + 'Mrs.' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test("19. Prof Joyner of King's College, London.", () => {
      let text = "Prof Joyner of King's College, London.";
      let translation = text.replace('Prof', spanStart + 'Prof.' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
    test('20. Tea time is usually around 4 or 4.30.', () => {
      let text = 'Tea time is usually around 4 or 4.30.';
      let translation = text.replace('4.30', spanStart + '4:30' + spanEnd);
      assert.deepEqual(translator.translate(text, locale), {
        text: text,
        translation: translation
      });
    });
  });

  suite('Highlight Translations', () => {
    test('21. Mangoes are my favorite fruit.', () => {
      let text = 'Mangoes are my favorite fruit.';
      let translation = text.replace('favorite', spanStart + 'favourite' + spanEnd);
      assert.deepEqual(translator.translate(text, 'american-to-british'), {
        text: text,
        translation: translation
      });
    });
    test('22. I ate yogurt for breakfast.', () => {
      let text = 'I ate yogurt for breakfast.';
      let translation = text.replace('yogurt', spanStart + 'yoghurt' + spanEnd);
      assert.deepEqual(translator.translate(text, 'american-to-british'), {
        text: text,
        translation: translation
      });
    });
    test('23. We watched the footie match for a while.', () => {
      let text = 'We watched the footie match for a while.';
      let translation = text.replace('footie', spanStart + 'soccer' + spanEnd);
      assert.deepEqual(translator.translate(text, 'british-to-american'), {
        text: text,
        translation: translation
      });
    });
    test('24. Paracetamol takes up to an hour to work.', () => {
      let text = 'Paracetamol takes up to an hour to work.';
      let translation = text.replace('Paracetamol', spanStart + 'Tylenol' + spanEnd);
      assert.deepEqual(translator.translate(text, 'british-to-american'), {
        text: text,
        translation: translation
      });
    });
  });

});
