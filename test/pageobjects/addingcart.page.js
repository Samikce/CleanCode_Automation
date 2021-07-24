const Page = require('./page');
class AddingCartPage extends Page {
    get clickToCart() { return $('#shopping_cart_container') }
    get checkOut() { return $('#checkout')}
    get commonSelector() { return $$('.inventory_item_name')}
    get addCart() {return $$('.inventory_item button')}
    get getingPrice() { return $$('.inventory_item_price')}
    addingCart(item)
    {
        var details = {itemName: " " , itemPrice :" "};
        var productDetailArray = [];
        this.commonSelector.forEach((element,index) =>
        {
            if(item == element.getText())
            {
                details.itemName = element.getText();
                this.addCart[index].click();
                details.itemPrice = this.slicingFromDollar(this.getingPrice[index].getText());
            }
            console.log(details + "DETAILS");
            productDetailArray.push(details);
            console.log(productDetailArray[0] + " productDetails")
         });
         return productDetailArray;
    }    
    slicingFromDollar(priceString)
    {
        return Number(priceString.slice(1));
    }
}
module.exports = new AddingCartPage();