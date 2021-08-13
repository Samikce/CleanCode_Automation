const addingTeam = require("../pageobjects/addingteam.page");
const LoginPage = require("../pageobjects/login.page");
const settingsClick = require("../pageobjects/settings.page");
const testData = require('../data/testdata.data');
const verifyingTeam = require("../pageobjects/verifyteamname.page");
const { expect } = require("chai");
describe('Automation test for answerconnect', function (){
    before(() => {
        browser.maximizeWindow();
    });
    it('Add Team functionality on Answerconnect', () => {
        LoginPage.enterLoginCredentials();
        browser.customClick(settingsClick.settings,"The Settings icon is");
        browser.customClick(settingsClick.myDirectory,"The My Directory is");
        browser.customClick(settingsClick.addTeam, "The Add Team button is");
        let initialCount = verifyingTeam.verifyTeamName(testData.teamName);
        browser.customSetValue(addingTeam.addingTeamName,testData.teamName,"The Team Name");
        browser.customClick(addingTeam.clickToAddMembers,"The Add members button is");
        addingTeam.addMembers(testData.members,testData.id);
        browser.customClick(addingTeam.saveButton,"The save Button is");
        verifyingTeam.notificationWraper.waitForDisplayed();
        let text = browser.customGetText(verifyingTeam.notificationWraper);
        expect("Team Created Successfully").to.equal(text);
        let lastCount = verifyingTeam.verifyTeamName(testData.teamName);
        console.log("***" + text + " " + (initialCount +1) + " " + lastCount);
        expect(initialCount + 1).to.equal(lastCount)
    });
});