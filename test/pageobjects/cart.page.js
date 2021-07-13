const Page = require('./page');
const { expect, should } = require("chai");
const AddCartPage = require('./addcart.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    cart_items(item)
    {
        var cartDetails = {
            itemNameinCart : [],
            itemPriceinCart : []
        }
        AddCartPage.commonSelector.forEach((element,index) =>
        {
            if(item.includes(element.getText()))
            {
                cartDetails.itemNameinCart.push(element.getText());
                cartDetails.itemPriceinCart.push(this.slicingFromDollar(AddCartPage.getingPrice[index].getText()));
            }
         });
         return cartDetails;
    } 
    slicingFromDollar(priceString)
    {
        return Number(priceString.slice(1));
    }
}
module.exports = new CartPage();