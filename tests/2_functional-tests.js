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

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

});
