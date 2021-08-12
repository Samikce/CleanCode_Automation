const Page = require('./page');
class LoginPage extends Page {
    
    get email () { return $('//input[@name="email"]') }
    get password () { return $('//input[@name="password"]') }
    get loginButton() { return $('//button[@class = "button-primary "]') } 

    /* This enterEmail function will navigate to the application login page through the URL and enter the credentials
    and login to the account */

    enterLoginCredentials (){
        browser.url('https://my.staging.answerconnect.app/');
        browser.setting(this.email,'rufus@answerconnect.com');
        browser.setting(this.password,'test123123');
        browser.clicking(this.loginButton);
    }
}
module.exports = new LoginPage();
