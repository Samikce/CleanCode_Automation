const  AddingTeamPage = require("../pageobjects/addingteam.page");
const LoginPage = require("../pageobjects/login.page");
const SettingsPage = require("../pageobjects/settings.page");
const TestData = require('../data/testdata.data');
const expect = require("chai");
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
        AddingTeamPage.addingTeamName.waitForDisplayed();
        AddingTeamPage.addingTeamName.setValue("FULL");
        AddingTeamPage.clickToAddMembers.waitForDisplayed()
        AddingTeamPage.clickToAddMembers.click();
        AddingTeamPage.addMembers(TestData.members,TestData.id);
        AddingTeamPage.saveButton.waitForDisplayed()
        AddingTeamPage.saveButton.click();
        browser.pause(5000);
    });
});