/**
 * Created by Administrator on 5/29/2018.
 */

var pageObjectSum = function() {
    this.firstNumber = element(by.model('first'));
    this.secondNumber = element(by.model('second'));
    this.goButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('latest'));
};
module.exports = pageObjectSum;
