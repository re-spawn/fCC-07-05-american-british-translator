const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

// const server = require('../server.js');
require('dotenv').config();
if (process.env.HOST === 'repl') {
  var server = 'http://fCC-07-05-american-british-translator.respawn709.repl.co';
} else {
  var server = require('../server.js');
}

chai.use(chaiHttp);

suite('Functional Tests', () => {
  const route = '/api/translate';
  const spanStart = '<span class="highlight">';
  const spanEnd = '</span>';
  test('1. Translation with text and locale fields', (done) => {
    const text = 'Mangoes are my favorite fruit';
    const locale = 'american-to-british';
    const translation = text.replace('favorite', spanStart + 'favourite' + spanEnd);
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        text: text,
        locale: locale
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'text', text);
          assert.propertyVal(res.body, 'translation', translation);
        }
        done();
      });
  });
  test('2. Translation with valid text and invalid locale fields', (done) => {
    const text = 'Mangoes are my favorite fruit';
    const locale = 'invalid-locale';
    const error = 'Invalid value for locale field';
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        text: text,
        locale: locale
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'error', error);
        }
        done();
      });
  });
  test('3. Translation with missing text field', (done) => {
    const locale = 'american-to-british';
    const error = 'Required field(s) missing';
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        locale: locale
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'error', error);
        }
        done();
      });
  });
  test('4. Translation with missing locale field', (done) => {
    const text = 'Mangoes are my favorite fruit';
    const error = 'Required field(s) missing';
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        text: text 
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'error', error);
        }
        done();
      });
  });
  test('5. Translation with empty text', (done) => {
    const text = '';
    const locale = 'american-to-british';
    const error = 'No text to translate';
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        text: text,
        locale: locale
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'error', error);
        }
        done();
      });
  });
  test('6. Translation with text that needs no translation', (done) => {
    const text = 'Mangoes are my favourite fruit';
    const locale = 'american-to-british';
    const translation = 'Everything looks good to me!';
    chai
      .request(server)
      .post(route)
      .type('form')
      .send({
        text: text,
        locale: locale
      })
      .end((err, res) => {
        if (err) {
          console.error(err);
        } else {
          assert.strictEqual(res.status, 200);
          assert.propertyVal(res.body, 'text', text);
          assert.propertyVal(res.body, 'translation', translation);
        }
        done();
      });
  });

});
