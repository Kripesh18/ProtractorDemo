let homepage = require('../pages/homepage');   //tut 9 included this line

describe('demo calculator tests', function () {

    it('addition test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/'); tut 9 made this as a comment

        homepage.get('http://juliemr.github.io/protractor-demo/');


        //element(by.model('first')).sendKeys('10'); tut 9 made this as a comment
        homepage.enterFirstNumber('10');


        //element(by.model('second')).sendKeys('20'); tut 9 made this as a comment
        homepage.enterSecondNumber('20');

        //element(by.css('[ng-click="doAddition()"]')).click(); tut 9 made this as a comment
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','30')); tut 9 made this as a comment

        //expect(result.getText()).toEqual('30'); tut 9 made this as a comment
        homepage.VerifyResult('30');


        browser.sleep(3000)

    });

    it('subtraction test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/'); tut 9 made this as a comment

        homepage.get('http://juliemr.github.io/protractor-demo/');


        //element(by.model('first')).sendKeys('10'); tut 9 made this as a comment
        homepage.enterFirstNumber('10');


        //element(by.model('second')).sendKeys('20'); tut 9 made this as a comment
        homepage.enterSecondNumber('20');

        //element(by.css('[ng-click="doAddition()"]')).click(); tut 9 made this as a comment
        homepage.clickGo1();

        //let result = element(by.cssContainingText('.ng-binding','30')); tut 9 made this as a comment

        //expect(result.getText()).toEqual('30'); tut 9 made this as a comment
        homepage.VerifyResult('30');


        browser.sleep(3000)

    });


});