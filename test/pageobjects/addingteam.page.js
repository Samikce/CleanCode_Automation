const Page = require('./page');
class AddingTeamPage extends Page {
    
    get addingTeamName () { return $('//input[@placeholder = "Team name"]') }
    get clickToAddMembers () { return $('.add-plus')}
    get searchbar() { return $('//input[@class = "ignore-click"]')}
    get members () { return $$('li.has-avatar span')} // Common locator for the members drop down
    get saveButton() { return $('//div/button[@class = "g-btn-primary "]')}

    /* This addMember function will execute the funtionality of adding teamname,searching the members and adding the
    members according to the matching id's*/

    addMembers(membersList,id){
        for(let i=0;i<membersList.length;i++)
        {
            browser.customSetValue(this.searchbar,membersList[i],"On the search bar name of the member is");
            var n = this.members.length
            for(let j=0;j<n;j++)
            {
                browser.pause(3000); // If we didn't use pause here it will add the member very random like it adding the members apart from the list we passed it happens in some times
                if(id[i] == this.members[j].getAttribute("id"));
                {
                    browser.customClick(this.members[j],"The add button in members list");
                    break;
                }
            }
            this.searchbar.clearValue();
        }
    }
}
module.exports = new AddingTeamPage();
