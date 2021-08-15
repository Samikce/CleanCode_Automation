const Page = require('./page');
const addingTeam = require("./addingteam.page");
class EditTeam extends Page {

    get editButton () { return $('span.add-plus')}
    get teamMembers () { return $$('//ul[@class = "manage-list"]/li/a')}
    get saveButton () {return $('//div/button[@class = "g-btn-primary "]')}

    editMembers(teamMembersToEdit,id)
    {
        for(let i=0;i<teamMembersToEdit.length;i++)
        {
            browser.customSetValue(addingTeam.searchbar,teamMembersToEdit[i],"On the search bar name of the member is");
            var n = addingTeam.members.length
            for(let j=0;j<n;j++)
            {
                browser.pause(3000); // If we didn't use pause here it will add the member very random like it adding the members apart from the list we passed it happens in some times
                if(id[i] == addingTeam.members[j].getAttribute("id"));
                {
                    browser.customClick(addingTeam.members[j],"The removed button is clicked");
                    break;
                }
            }
            addingTeam.searchbar.clearValue();
        }
    }
    verifyMembers()
    {
        var members =[];
        for(let i=0;i<this.teamMembers.length;i++)
        {
           members.push(this.teamMembers[i].getAttribute("id")); 
        }
        return members;
    }

}
module.exports = new EditTeam();