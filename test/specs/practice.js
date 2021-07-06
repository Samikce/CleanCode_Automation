const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
const { expect, should } = require("chai")
const { setvalue_, button_, check_ } = require('../utilites/helper')
const { default: resource } = require('../resource')
describe ("Ordering the Product",function () { 
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.saucedemo.com/');
    });
    it("Login Functionality ", function(){

        setvalue_(LoginPage.username,'standard_user');
        setvalue_(LoginPage.password,'secret_sauce');
        button_(LoginPage.btn);
    });
    it('Add cart to checkout',()=>
    {
        button_(Checkout.addcart);
        button_(Checkout.clickcart);
        check_(Common.heading,'YOUR CART');
        check_(Common.product,resource.product);
        button_(Checkout.checkout);
    });
    it('Entering Information' ,()=> 
    {
        check_(Common.heading,'CHECKOUT: YOUR INFORMATION');
        setvalue_(InfoPage.firstname,'sam');
        setvalue_(InfoPage.lastname,'VJ');
        setvalue_(InfoPage.zipcode,'621212');
        button_(InfoPage.continue_btn);
    });
    it('Finish Order', ()=>
    {
        check_(Common.heading,'CHECKOUT: OVERVIEW');
        check_(Common.product,'Sauce Labs Bike Light');
        check_(Overview.payment,'SauceCard #31337');
        check_(Overview.shipping,'FREE PONY EXPRESS DELIVERY!');
        check_(Overview.item_price,'$9.99');
        check_(Overview.tax,'Tax: $0.80');
        check_(Overview.total,'Total: $10.79');
        button_(Overview.finish);
        check_(Overview.thank_message,'THANK YOU FOR YOUR ORDER');
        button_(Overview.home);
    });
})