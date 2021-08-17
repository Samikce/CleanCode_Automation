const Page = require('./page');
const verifyingTeam = require("./verifyteamname.page");
class DeletePage extends Page {

    //get teamDeleteButton () { return $$('li.card button')}
    get deleteButtonPop() { return $('button.g-btn-danger')}

    deletingTeam (teamName)
    {
        for(var i=0;i<verifyingTeam.teamNameVerify.length;i++)
        {
            if(teamName == browser.customGetText(verifyingTeam.teamNameVerify[i]))
            {
                verifyingTeam.teamNameVerify[i].scrollIntoView();
                verifyingTeam.teamNameVerify[i].moveTo();
                browser.customClick(verifyingTeam.teamNameVerify[i].nextElement());
                browser.customClick(this.deleteButtonPop);
            }
        }
    }
}
module.exports = new DeletePage()