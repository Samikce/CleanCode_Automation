const Page = require('./page');
class VerifyPage extends Page {
    get notificationWraper () { return $('div.ib-notify-wrapper').$('div.g-notification')}
    get teamNameVerify () { return $$('li.card h6')}
    verifyTeamName(teamName)
    {
        var val =[];  
        var count =0; 
        for(let i=0;i<this.teamNameVerify.length;i++)
        {
            //val.push(this.teamNameVerify[i].getText() + "  |  ");
            if(teamName == this.teamNameVerify[i].getText())
            {
                // this.teamNameVerify[i].waitForDisplayed();
                // console.log(this.teamNameVerify[i].getText() + " Hello");
                count = count + 1;
            }
        }
        return count;
        //console.log(count + " ****Hello ")
    }
}
module.exports = new VerifyPage();