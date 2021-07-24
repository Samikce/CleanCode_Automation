const Page = require('./page');
class LogoutPage extends Page {
    get menu () { return $('#react-burger-menu-btn') }
    get logoutbutton () { return $('#logout_sidebar_link') }

}
module.exports = new LogoutPage();
