const LoginPage = require('../pageobjects/login.page')
const Common = require('../pageobjects/common.page')
const Checkout = require('../pageobjects/checkout.page')
const InfoPage = require('../pageobjects/info.page')
const Overview = require('../pageobjects/overview.page')
const { expect, should } = require("chai")
const CartPage = require('../pageobjects/cart.page')
const pricePage = require('../pageobjects/price.page')
const AddCartPage  = require('../pageobjects/addcart.page');
const AddingCartPage = require('../pageobjects/addingcart.page')
const TestData = require('../data/testdata.data')
const LogoutPage = require('../pageobjects/logout.page')
const FilterPage =  require('../pageobjects/filter.page')
describe ("Ordering the Product",function () { 
    before(() => {
        browser.maximizeWindow();
        browser.url('https://www.saucedemo.com/');
    });
    it("Login Functionality ", function(){
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        let title = browser.getting(LoginPage.heading);
        expect(title).to.equal("PRODUCTS");
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
    });
    it("Filter",function (){
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.aToZ,"Clicked Sucessfully");
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.zToa,"Clicked Sucessfully");
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.lowTohigh,"Clicked Sucessfully");
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.highTOlow,"Clicked Sucessfully");
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
    });
    it('Ordering Products from A to Z', function () {
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.aToZ,"Clicked Sucessfully");
        expect(browser.getting(LoginPage.heading)).to.equal("PRODUCTS");
        let itemDetails = AddCartPage.addingCart(TestData.item);
        let productName = itemDetails.itemName;
        let productPrice = itemDetails.itemPrice;
        //console.log(itemDetails + "Hello Full");
        browser.clicking(Checkout.clickcart,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('YOUR CART');
        let cartDetails = CartPage.cart_items(productName);
        let cartItemName = cartDetails.itemNameinCart;
        let cartItemPrice  = cartDetails.itemPriceinCart;
        expect(cartItemName).to.deep.include.members(productName);
        expect(cartItemPrice).to.deep.include.members(productPrice);
        browser.clicking(Checkout.checkout,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: YOUR INFORMATION');
        browser.setting(InfoPage.firstname,TestData.firstName,"Value Setted");
        browser.setting(InfoPage.lastname,TestData.lastName,"Value Setted");
        browser.setting(InfoPage.zipcode,TestData.zipCode,"Value Setted");
        browser.clicking(InfoPage.continue_btn,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: OVERVIEW');
        let finishDetails = CartPage.cart_items(TestData.item);
        let finishItemName = finishDetails.itemNameinCart;
        let finishItemPrice  = finishDetails.itemPriceinCart;
        expect(finishItemName).to.deep.include.members(productName);
        expect(finishItemPrice).to.deep.include.members(productPrice);
        expect(browser.getting(Overview.payment)).to.equal('SauceCard #31337');
        expect(browser.getting(Overview.shipping)).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(productPrice.reduce((a,b)=>a+b));
        browser.clicking(Overview.finish,"Clicked Sucessfully");
        expect(browser.getting(Overview.thank_message)).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
     });
     it('Ordering Products from Z to A', function () {
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.zToa,"Clicked Sucessfully");
        expect(browser.getting(LoginPage.heading)).to.equal("PRODUCTS");
        let itemDetails = AddCartPage.addingCart(TestData.item);
        let productName = itemDetails.itemName;
        let productPrice = itemDetails.itemPrice;
        //console.log(itemDetails + "Hello Full");
        browser.clicking(Checkout.clickcart,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('YOUR CART');
        let cartDetails = CartPage.cart_items(productName);
        let cartItemName = cartDetails.itemNameinCart;
        let cartItemPrice  = cartDetails.itemPriceinCart;
        expect(cartItemName).to.deep.include.members(productName);
        expect(cartItemPrice).to.deep.include.members(productPrice);
        browser.clicking(Checkout.checkout,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: YOUR INFORMATION');
        browser.setting(InfoPage.firstname,TestData.firstName,"Value Setted");
        browser.setting(InfoPage.lastname,TestData.lastName,"Value Setted");
        browser.setting(InfoPage.zipcode,TestData.zipCode,"Value Setted");
        browser.clicking(InfoPage.continue_btn,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: OVERVIEW');
        let finishDetails = CartPage.cart_items(TestData.item);
        let finishItemName = finishDetails.itemNameinCart;
        let finishItemPrice  = finishDetails.itemPriceinCart;
        expect(finishItemName).to.deep.include.members(productName);
        expect(finishItemPrice).to.deep.include.members(productPrice);
        expect(browser.getting(Overview.payment)).to.equal('SauceCard #31337');
        expect(browser.getting(Overview.shipping)).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(productPrice.reduce((a,b)=>a+b));
        browser.clicking(Overview.finish,"Clicked Sucessfully");
        expect(browser.getting(Overview.thank_message)).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
     });
     it('Ordering Products from Low to High', function () {
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.lowTohigh,"Clicked Sucessfully");
        expect(browser.getting(LoginPage.heading)).to.equal("PRODUCTS");
        let itemDetails = AddCartPage.addingCart(TestData.item);
        let productName = itemDetails.itemName;
        let productPrice = itemDetails.itemPrice;
        //console.log(itemDetails + "Hello Full");
        browser.clicking(Checkout.clickcart,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('YOUR CART');
        let cartDetails = CartPage.cart_items(productName);
        let cartItemName = cartDetails.itemNameinCart;
        let cartItemPrice  = cartDetails.itemPriceinCart;
        expect(cartItemName).to.deep.include.members(productName);
        expect(cartItemPrice).to.deep.include.members(productPrice);
        browser.clicking(Checkout.checkout,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: YOUR INFORMATION');
        browser.setting(InfoPage.firstname,TestData.firstName,"Value Setted");
        browser.setting(InfoPage.lastname,TestData.lastName,"Value Setted");
        browser.setting(InfoPage.zipcode,TestData.zipCode,"Value Setted");
        browser.clicking(InfoPage.continue_btn,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: OVERVIEW');
        let finishDetails = CartPage.cart_items(TestData.item);
        let finishItemName = finishDetails.itemNameinCart;
        let finishItemPrice  = finishDetails.itemPriceinCart;
        expect(finishItemName).to.deep.include.members(productName);
        expect(finishItemPrice).to.deep.include.members(productPrice);
        expect(browser.getting(Overview.payment)).to.equal('SauceCard #31337');
        expect(browser.getting(Overview.shipping)).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(productPrice.reduce((a,b)=>a+b));
        browser.clicking(Overview.finish,"Clicked Sucessfully");
        expect(browser.getting(Overview.thank_message)).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
     });
     it('Ordering Products from high to low', function () {
        browser.loginProcedure(LoginPage.username,LoginPage.password,LoginPage.btn);
        browser.clicking(FilterPage.filterbutton,"Clicked Sucessfully");
        browser.clicking(FilterPage.highTOlow,"Clicked Sucessfully");
        expect(browser.getting(LoginPage.heading)).to.equal("PRODUCTS");
        let itemDetails = AddCartPage.addingCart(TestData.item);
        let productName = itemDetails.itemName;
        let productPrice = itemDetails.itemPrice;
        //console.log(itemDetails + "Hello Full");
        browser.clicking(Checkout.clickcart,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('YOUR CART');
        let cartDetails = CartPage.cart_items(productName);
        let cartItemName = cartDetails.itemNameinCart;
        let cartItemPrice  = cartDetails.itemPriceinCart;
        expect(cartItemName).to.deep.include.members(productName);
        expect(cartItemPrice).to.deep.include.members(productPrice);
        browser.clicking(Checkout.checkout,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: YOUR INFORMATION');
        browser.setting(InfoPage.firstname,TestData.firstName,"Value Setted");
        browser.setting(InfoPage.lastname,TestData.lastName,"Value Setted");
        browser.setting(InfoPage.zipcode,TestData.zipCode,"Value Setted");
        browser.clicking(InfoPage.continue_btn,"Clicked Sucessfully");
        expect(browser.getting(Common.heading)).to.equal('CHECKOUT: OVERVIEW');
        let finishDetails = CartPage.cart_items(TestData.item);
        let finishItemName = finishDetails.itemNameinCart;
        let finishItemPrice  = finishDetails.itemPriceinCart;
        expect(finishItemName).to.deep.include.members(productName);
        expect(finishItemPrice).to.deep.include.members(productPrice);
        expect(browser.getting(Overview.payment)).to.equal('SauceCard #31337');
        expect(browser.getting(Overview.shipping)).to.equal('FREE PONY EXPRESS DELIVERY!');
        pricePage.sub_price(productPrice.reduce((a,b)=>a+b));
        browser.clicking(Overview.finish,"Clicked Sucessfully");
        expect(browser.getting(Overview.thank_message)).to.deep.equal("THANK YOU FOR YOUR ORDER");
        Overview.home.click();
        browser.logoutProcedure(LogoutPage.menu,LogoutPage.logoutbutton);
     });
    
})