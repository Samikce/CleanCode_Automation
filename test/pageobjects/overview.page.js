const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Overview extends Page {
    /**
     * define selectors using getter methods
     */
    get finish() { return $('#finish') }
    get item_price() { return $('.inventory_item_price')}
    get payment() { return $$('.summary_value_label')[0]}//Find elements
    get shipping() { return $$('.summary_value_label')[1]}//Find elements
    get item_total() { return $('.summary_subtotal_label')}
    get tax() { return $('.summary_tax_label')}
    get total() { return $('.summary_total_label')}
    get thank_message() { return $('.complete-header')}
    get home() { return $('#back-to-products')}
    
    //get heading () { return $('<span />') }
    //get checkout() { return $('#checkout')}

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

module.exports = new Overview();
