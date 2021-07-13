const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
const { expect, should } = require("chai")
const CartPage = require('../pageobjects/cart.page')
const pricePage = require('../pageobjects/price.page')
const TestData = require('../data/testdata.data')
describe ("Ordering the Product",function () { 
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.saucedemo.com/');
    });
    it("Login Functionality ", function(){
        LoginPage.username.setValue(TestData.userName);
        LoginPage.password.setValue(TestData.passWord);
        LoginPage.btn.click();
    });
    it('Adding the item to the cart utill it get placing the order',()=>
    {
        // var item = ['Sauce Labs Backpack','Sauce Labs Bike Light',
        // 'Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie',
        // 'Test.allTheThings() T-Shirt (Red)'];
        var detail = Checkout.adding_cart(loginData.item);
        console.log(detail);
        Checkout.clickcart.click();
        var item_name = detail.item_nam;
        var price = detail.item_price;
        console.log(item_name,price);
        expect(Common.heading.getText()).to.equal('YOUR CART');
        var cart_Details = CartPage.cart_items(item_name);
        //console.log(cart_Details);
        var cart_Item_Name = cart_Details.item_Name;
        var cart_Item_Price  = cart_Details.item_Price;
        expect(cart_Item_Name).to.deep.include.members(item_name);
        expect(cart_Item_Price).to.deep.include.members(price);
        Checkout.checkout.click();
        expect(Common.heading.getText()).to.equal('CHECKOUT: YOUR INFORMATION');
        InfoPage.firstname.setValue('sami');
        InfoPage.lastname.setValue('J');
        InfoPage.zipcode.setValue('621212');
        InfoPage.continue_btn.click();
        expect(Common.heading.getText()).to.equal('CHECKOUT: OVERVIEW');
        var finish_Details = CartPage.cart_items(item_name);
        //console.log(cart_Details);
        var finish_Item_Name = cart_Details.item_Name;
        var finish_Item_Price  = cart_Details.item_Price;
        expect(finish_Item_Name).to.deep.include.members(item_name);
        expect(finish_Item_Price).to.deep.include.members(price);
        expect(Overview.payment.getText()).to.equal('SauceCard #31337');
        expect(Overview.shipping.getText()).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(price.reduce((a,b)=>a+b));
        Overview.finish.click();
        expect(Overview.thank_message.getText()).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
      });
})