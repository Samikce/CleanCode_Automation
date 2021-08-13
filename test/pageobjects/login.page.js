const Page = require('./page');
class LoginPage extends Page {
    
    get email () { return $('//input[@name="email"]') }
    get password () { return $('//input[@name="password"]') }
    get loginButton() { return $('//button[@class = "button-primary "]') } 

    /* This enterEmail function will navigate to the application login page through the URL and enter the credentials
    and login to the account */

    enterLoginCredentials (){
        browser.url('https://my.staging.answerconnect.app/');
        browser.customSetValue(this.email,'rufus@answerconnect.com',"The Email");
        browser.customSetValue(this.password,'test123123',"The Password");
        browser.customClick(this.loginButton,"The login button is");
    }
}
module.exports = new LoginPage();
