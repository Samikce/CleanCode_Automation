const Page = require('./page');
class FilterPage extends Page {
    get filterbutton () {return $('.product_sort_container')}
    get aToZ () { return $('.product_sort_container option[value = "az"]') }
    get zToa () { return $('.product_sort_container option[value = "za"]') }
    get lowTohigh () { return $('.product_sort_container option[value = "lohi"]') }
    get highTOlow () { return $('.product_sort_container option[value = "hilo"]') }

}
module.exports = new FilterPage();