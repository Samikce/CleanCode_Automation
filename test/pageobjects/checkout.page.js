const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkout extends Page {
    /**
     * define selectors using getter methods
     */
    get addcart () { return $('#add-to-cart-sauce-labs-bike-light') }
    get clickcart () { return $('#shopping_cart_container') }
    
    get checkout() { return $('#checkout')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
        //await (await this.addcart).setValue(user-name);
       // await (await this.password).setValue(password);
       // await (await this.btn).click();
   // }

    /**
     * overwrite specifc options to adapt it to page object
     */
   // open () {
        //return super.open('login');
   // }
}

module.exports = new Checkout();
