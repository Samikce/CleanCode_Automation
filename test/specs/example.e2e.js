const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
//const LoginPage = require('../pageobjects/login.page').LoginPage
//import LoginPage from '../pageobjects/login.page'
const { expect, should } = require("chai")
//const assert = require('assert');
//const expect = require('chai').use(require('chai-as-promised')).expect;
describe ("Interaction with web element",function () { 
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.saucedemo.com/');
    });
    // beforeEach(() => {
    //     browser.refresh();
    // });
    it("Login Functionality ", function(){
        //LoginPage.open();
        LoginPage.username.setValue('standard_user');
        LoginPage.password.setValue('secret_sauce');
        LoginPage.btn.click();


    });
    it('Add cart to checkout',()=>
    {
        Checkout.addcart.click();
        Checkout.clickcart.click();
        expect(Common.product.getText()).to.equal('Sauce Labs Bike Light');
        expect(Common.heading.getText()).to.equal('YOUR CART')
        Checkout.checkout.click();
    });
    it('Entering Information' ,()=> 
    {
        expect(Common.heading.getText()).to.equal('CHECKOUT: YOUR INFORMATION')
        InfoPage.firstname.setValue('sam');
        InfoPage.lastname.setValue('VJ');
        InfoPage.zipcode.setValue('621212');
        InfoPage.continue_btn.click();
    });
    it('Finish Order', ()=>
    {
        expect(Common.heading.getText()).to.deep.equal('CHECKOUT: OVERVIEW') // it will used instead of using === 
        expect(Common.product.getText()).to.eql('Sauce Labs Bike Light');
        expect(Overview.payment.getText()).to.equal('SauceCard #31337');
        expect(Overview.shipping.getText()).to.equal('FREE PONY EXPRESS DELIVERY!');
        expect(Overview.item_price.getText()).to.equal('$9.99');
        expect(Overview.tax.getText()).to.equal('Tax: $0.80');
        expect(Overview.total.getText()).to.equal('Total: $10.79');
        // const txt = 'Sauce Labs Bike Light';
        // console.log(txt == val);
        Overview.finish.click();
        Overview.home.click();
           
    });
})
// Total of 49 Lines if ignored the comments Shrinked from 162 lines