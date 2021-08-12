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
        LoginPage.enterLoginCredentials();
        SettingsPage.settings.waitForDisplayed({timeout : 80000})
        SettingsPage.settings.click();
        browser.clicking(SettingsPage.myDirectory);
        browser.clicking(SettingsPage.addTeam);
        let initialCount = VerifyPage.verifyTeamName(TestData.teamName);
        browser.setting(AddingTeamPage.addingTeamName,TestData.teamName);
        browser.clicking(AddingTeamPage.clickToAddMembers);
        AddingTeamPage.addMembers(TestData.members,TestData.id);
        browser.clicking(AddingTeamPage.saveButton);
        VerifyPage.notificationWraper.waitForDisplayed();
        let text = browser.getting(VerifyPage.notificationWraper);
        expect("Team Created Successfully").to.equal(text);
        let lastCount = VerifyPage.verifyTeamName(TestData.teamName);
        //console.log("***" + text + " " + initialCount + " " + lastCount);
        expect(initialCount + 1).to.equal(lastCount)
    });
});