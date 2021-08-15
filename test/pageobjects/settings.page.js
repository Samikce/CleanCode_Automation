const Page = require('./page');
class SettingsPage extends Page {
    
    get settings () { return $('#side-bar a[compname = "settings"]') }
    get myDirectory () { return $('//aside/ul/li/a[@href="/settings/my-directory"]')} // Chnged the locator from the previous loator from aside/ul/li[4]/a
    get addTeam () { return $('//section/div[2]/div[2]/div[1]/div/button')}
}
module.exports = new SettingsPage();
