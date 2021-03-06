var assert  = require('assert'),
  expect = require("chai").expect;

var settings = {
  commands: [
    'ackbar',
    'bitcoin',
    'eval',
    'hi',
    'imageme',
    'karma',
    'tell',
    'pugme',
    'quotes',
    'rps',
    'rules',
    'uptime',
    'urban',
    'youtube'
  ],
  debug: true,
  debugREPL: true,
  redis: false,
  botname: 'AWESOM-0'
};

describe('AWESOM0', function (){
  var awesom0;

  it('can be imported without blowing up', function () {
    awesom0 = require('./awesom0');
    assert(awesom0 !== undefined);
  });

  it('can import scripts without blowing up', function () {
    awesom0.init(settings);
  });

  it('can say hi back', function () {
    var response;
    awesom0.testMsg('AWESOM-0 hi!');
    response = awesom0.lastMsg();

    expect(response).to.contain('TestUser');
  });

  it('can store a note and retreive a note for a given user', function () {
    var response;

    awesom0.testMsg('AWESOM-0 tell TestUser hello');
    awesom0.testMsg('AWESOM-0 notes');
    response = awesom0.lastMsg();

    expect(response).to.contain('hello');
  });

  it('can list the rules', function () {
    var response;

    awesom0.testMsg('AWESOM-0 what are the rules');
    response = awesom0.lastMsg();

    expect(response).to.contain('may not injure a human being');
    expect(response).to.contain('must obey any orders given to it by human beings');
    expect(response).to.contain('protect its own existence');
  });
});
