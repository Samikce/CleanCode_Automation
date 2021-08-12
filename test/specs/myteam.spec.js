const  AddingTeamPage = require("../pageobjects/addingteam.page");
const LoginPage = require("../pageobjects/login.page");
const SettingsPage = require("../pageobjects/settings.page");
const TestData = require('../data/testdata.data');
const VerifyPage = require("../pageobjects/verifyteamname.page");
const { expect } = require("chai");
describe('Automation test for answerconnect', function (){
    before(() => {
        browser.maximizeWindow();
    });
    it('Add Team functionality on Answerconnect', () => {
        LoginPage.enterEmail();
        SettingsPage.settings.waitForDisplayed({timeout : 80000})
        SettingsPage.settings.click();
        SettingsPage.myDirectory.waitForDisplayed({timeout : 80000})
        SettingsPage.myDirectory.click();
        SettingsPage.addTeam.waitForDisplayed({timeout : 80000})
        SettingsPage.addTeam.click();
        let initialCount = VerifyPage.verifyTeamName(TestData.teamName);
        AddingTeamPage.addingTeamName.waitForDisplayed();
        AddingTeamPage.addingTeamName.setValue(TestData.teamName);
        AddingTeamPage.clickToAddMembers.waitForDisplayed()
        AddingTeamPage.clickToAddMembers.click();
        AddingTeamPage.addMembers(TestData.members,TestData.id);
        AddingTeamPage.saveButton.waitForDisplayed()
        AddingTeamPage.saveButton.click();
        VerifyPage.notificationWraper.waitForDisplayed();
        let text = VerifyPage.notificationWraper.getText();
        expect("Team Created Successfully").to.equal(text);
        let lastCount = VerifyPage.verifyTeamName(TestData.teamName);
        //console.log("***" + text + " " + initialCount + " " + lastCount);
        expect(initialCount + 1).to.equal(lastCount)
    });
});