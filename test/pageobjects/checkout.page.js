const { expect } = require('chai');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkout extends Page {
    /**
     * define selectors using getter methods
     */
    //get addcart () { return $('[class = 'btn btn_primary btn_small btn_inventory']') }
    get clickcart() { return $('#shopping_cart_container') }
    get checkout() { return $('#checkout')}
     
   adding_cart(item_name)
    {
        var details = {
            item_nam : [],
            item_price : []
        };
        var common_selector = $$(".inventory_item_name");
        // var product_name =[];
        // common_selector.map((ele)=>{
        //     console.log(ele.getText());
        // })
        // var len = item_name.length;
        // for (let i=1;i<=len;i++)
        // {
        //     if(product_name[i] === item_name)
        //     {
        //         var ele = product_name[i];
        //         details.item_name.push(ele);
        //         var button_cart = $$('.inventory_item button')[index];
        //         let item_price = $$('.inventory_item_price')[index];
        //         let text = item_price.getText();
        //         let price_number = Number(text.slice(1));
        //         console.log(price_number);
        //         details.item_price.push(price_number);
        //         details.item_index.push(i);
        //         button_cart.click();
        //     }
        // }
        //return item_name;
        
        common_selector.map((ele,index) =>
        {
            console.log(ele.getText(),item_name +"Welcome");
            if(item_name.includes(ele.getText()))
            {
                var product = ele.getText();
                //console.log("hello"+product);
                details.item_nam.push(product);
                //console.log(details.item_nam);
                //console.log(ele.getText());
                var button_cart = $$('.inventory_item button')[index];
                let item_price = $$('.inventory_item_price')[index];
                let text = item_price.getText();
                let price_number = Number(text.slice(1));
                details.item_price.push(price_number);
                button_cart.click();
                //details.item_name.push(ele.getText());
                // let item = ele.getText();
                // let lower = item.toLowerCase();
                // let text = '#add to cart '+lower; 
                // let arr = text.split(" ");
                // let selector_name = arr.join('-');
                // let selector = $(selector_name);
                // selector.click();
                // let price = $$('.inventory_item_price':eq(index));
                // console.log(price.getText());
            }
            
         })
         return details;
    }    


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
