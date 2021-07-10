const Page = require('./page');
const { expect, should } = require("chai")
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    cart_items(item_name)
    {
        var cart_details = {
            item_Name : [],
            item_Price : []
        }
        var cart_selector = $$('.inventory_item_name');
        cart_selector.map(function check(ele,index) 
        {
            console.log(ele.getText());
            if(item_name.includes(ele.getText()))
            {
                console.log(item_name)
                console.log(index);
                var product = ele.getText();
                console.log(product);
                cart_details.item_Name.push(product);
                let item_price = $$('.inventory_item_price')[index];
                let text = item_price.getText();
                let price_number = Number(text.slice(1));
                cart_details.item_Price.push(price_number);
                console.log(price_number);
            }

        })
        return cart_details;
}
}
module.exports = new CartPage();
