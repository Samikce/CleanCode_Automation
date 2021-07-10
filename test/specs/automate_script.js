const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
const { expect, should } = require("chai")
const CartPage = require('../pageobjects/cart.page')
const pricePage = require('../pageobjects/price.page')
describe ("Ordering the Product",function () { 
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.saucedemo.com/');
    });
    it("Login Functionality ", function(){
        LoginPage.username.setValue('standard_user');
        LoginPage.password.setValue('secret_sauce');
        LoginPage.btn.click();
    });
    it('Add cart to checkout',()=>
    {
        var item = ['Sauce Labs Backpack','Sauce Labs Fleece Jacket'];
        var detail = Checkout.adding_cart(item);
        Checkout.clickcart.click();
        expect(detail.item_nam).to.include(item);
        expect(Common.heading.getText()).to.equal('YOUR CART');
        CartPage.price('Sauce Labs Backpack',29.99);
        CartPage.price('Sauce Labs Bike Light',9.99);
        Checkout.checkout.click();
        expect(Common.heading.getText()).to.equal('CHECKOUT: YOUR INFORMATION');
        InfoPage.firstname.setValue('sami');
        InfoPage.lastname.setValue('J');
        InfoPage.zipcode.setValue('621212');
        InfoPage.continue_btn.click();
    });
    it('Finish Order', ()=>
    {
        expect(Common.heading.getText()).to.equal('CHECKOUT: OVERVIEW');
        CartPage.price('Sauce Labs Backpack',29.99);
        CartPage.price('Sauce Labs Bike Light',9.99);
        expect(Overview.payment.getText()).to.equal('SauceCard #31337');
        expect(Overview.shipping.getText()).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(29.99+9.99);
        Overview.finish.click();
        expect(Overview.thank_message.getText()).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
     });
})