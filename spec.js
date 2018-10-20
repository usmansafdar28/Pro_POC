var PageObjectSum = require('./pageObjects/pageObjectSum');

describe('Protractor Arithmatic Operations', function() {

  var pageObjectSum = new PageObjectSum();

  beforeEach(function() {
    browser.driver.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    pageObjectSum.firstNumber.sendKeys(1);
    pageObjectSum.secondNumber.sendKeys(2);

    pageObjectSum.goButton.click();

    expect(pageObjectSum.latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    pageObjectSum.firstNumber.sendKeys(6);
    pageObjectSum.secondNumber.sendKeys(4);

    pageObjectSum.goButton.click();
    expect(pageObjectSum.latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function() {
    pageObjectSum.firstNumber.sendKeys(1);
    expect(pageObjectSum.firstNumber.getAttribute('value')).toEqual('1');
  });
});