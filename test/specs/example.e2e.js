const LoginPage = require('../pageobjects/login.page')
//const LoginPage = require('../pageobjects/login.page').LoginPage
//mport LoginPage from '../pageobjects/login.page'
const { expect } = require("chai")
//const assert = require('assert');
//const expect = require('chai').use(require('chai-as-promised')).expect;
describe ("Interaction with web element",function () { 
    before(() => {
        browser.url('https://www.saucedemo.com/');
    });
    it("Login Functionality ", function(){

        //LoginPage.open();

        LoginPage.username.setValue('standard_user');

        LoginPage.password.setValue('secret_sauce');
    
        LoginPage.btn.click();

    });
})


