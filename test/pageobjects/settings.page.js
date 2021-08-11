const Page = require('./page');
class SettingsPage extends Page {
    
    get settings () { return $('#side-bar a[compname = "settings"]') }
    get myDirectory () { return $('//aside/ul/li[4]/a')}
    get addTeam () { return $('//section/div[2]/div[2]/div[1]/div/button')}
}
module.exports = new SettingsPage();
