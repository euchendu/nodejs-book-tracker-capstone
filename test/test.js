/**
 * test/test.js
 * Basic tests for Auth system API
 */
const chai = require('chai');
const expect = chai.expect;

// Start app (REST API)
const app = require('../api/app');

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})