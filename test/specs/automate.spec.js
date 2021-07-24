const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
const { expect, should } = require("chai")
const CartPage = require('../pageobjects/cart.page')
const pricePage = require('../pageobjects/price.page')
const AddCartPage  = require('../pageobjects/addcart.page');
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
        let itemDetails = AddCartPage.addingCart(TestData.item);
        //var itemDetails = item.forEach((element)=>{AddCartPage.addingCart(element)}); // returning undefind
        //console.log(itemDetails + "Hello");
        Checkout.clickcart.click();
        let productName = itemDetails.itemName;
        let productPrice = itemDetails.itemPrice;
        expect(Common.heading.getText()).to.equal('YOUR CART');
        let cartDetails = CartPage.cart_items(productName);
        let cartItemName = cartDetails.itemNameinCart;
        let cartItemPrice  = cartDetails.itemPriceinCart;
        expect(cartItemName).to.deep.include.members(productName);
        expect(cartItemPrice).to.deep.include.members(productPrice);
        Checkout.checkout.click();
        expect(Common.heading.getText()).to.equal('CHECKOUT: YOUR INFORMATION');
        InfoPage.firstname.setValue(TestData.firstName);
        InfoPage.lastname.setValue(TestData.lastName);
        InfoPage.zipcode.setValue(TestData.zipCode);
        InfoPage.continue_btn.click();
        expect(Common.heading.getText()).to.equal('CHECKOUT: OVERVIEW');
        let finishDetails = CartPage.cart_items(TestData.item);
        let finishItemName = finishDetails.itemNameinCart;
        let finishItemPrice  = finishDetails.itemPriceinCart;
        expect(finishItemName).to.deep.include.members(productName);
        expect(finishItemPrice).to.deep.include.members(productPrice);
        expect(Overview.payment.getText()).to.equal('SauceCard #31337');
        expect(Overview.shipping.getText()).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(productPrice.reduce((a,b)=>a+b));
        Overview.finish.click();
        expect(Overview.thank_message.getText()).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
      });
})