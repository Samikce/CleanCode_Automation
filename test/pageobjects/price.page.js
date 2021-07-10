const { expect } = require('chai');
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PricePage extends Page {

    sub_price(price)
    {
        const sub_selector = $('.summary_subtotal_label');
        let text_price = sub_selector.getText();
        let value_price = Number(text_price.slice(13));
        expect(price).to.equal(value_price);

        console.log(price,value_price);
        const tax_selector = $('.summary_tax_label');
        let text_tax = tax_selector.getText();
        let value_tax = Number(text_tax.slice(6));
        let fixed_Tax  = value_tax.toFixed(2);
        let value_tax_amount = value_price/12.49;
        let tax = value_tax_amount.toFixed(2);
        expect(Number(tax)).to.equal(Number(fixed_Tax));

        console.log(Number(fixed_Tax),tax);
        const total_selector = $('.summary_total_label');
        let text_total = total_selector.getText();
        let value_total = Number(text_total.slice(8));
        let total_Decimal = Number(tax)+value_price;
        let total = total_Decimal.toFixed(2);
        expect(value_total).to.equal(Number(total));
    }
}

module.exports = new PricePage();
