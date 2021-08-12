const Page = require('./page');
class LoginPage extends Page {
    
    get email () { return $('//input[@name="email"]') }
    get password () { return $('//input[@name="password"]') }
    get loginButton() { return $('//button[@class = "button-primary "]') } 

    /* This enterEmail function will navigate to the application login page through the URL and enter the credentials
    and login to the account */

    enterEmail (){
        browser.url('https://my.staging.answerconnect.app/');
        this.email.setValue('rufus@answerconnect.com');
        this.password.setValue("test123123")
    }
}
module.exports = new LoginPage();
