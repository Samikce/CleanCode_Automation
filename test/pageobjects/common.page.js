const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Common extends Page {
    /**
     * define selectors using getter methods
     */
    

     get product () { return $('.inventory_item_name') }
     get heading () { return $('.header_secondary_container') }
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

module.exports = new Common();
