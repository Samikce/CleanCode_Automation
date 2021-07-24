const Page = require('./page');
class AddCartPage extends Page {
    get clickToCart() { return $('#shopping_cart_container') }
    get checkOut() { return $('#checkout')}
    get commonSelector() { return $$('.inventory_item_name')}
    get addCart() {return $$('.inventory_item button')}
    get getingPrice() { return $$('.inventory_item_price')}
    addingCart(item)
    {
        var details = {itemName: [],itemPrice : []};
        this.commonSelector.forEach((element,index) =>
        {
            if(item.includes(element.getText()))
            {
                details.itemName.push(element.getText());
                this.addCart[index].click();
                details.itemPrice.push(this.slicingFromDollar(this.getingPrice[index].getText()));
            }
         });
         return details;
    }    
    slicingFromDollar(priceString)
    {
        return Number(priceString.slice(1));
    }
}
module.exports = new AddCartPage();