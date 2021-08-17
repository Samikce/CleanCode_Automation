const addingTeam = require("../pageobjects/addingteam.page");
const loginPage = require("../pageobjects/login.page");
const settingsClick = require("../pageobjects/settings.page");
const testData = require('../data/testdata.data');
const verifyingTeam = require("../pageobjects/verifyteamname.page");
const editTeam = require("../pageobjects/editteam.page")
const deleteTeam = require("../pageobjects/deleteteam.page")
const { expect } = require("chai");
describe('Automation test for answerconnect', function (){
    before(() => {
        browser.maximizeWindow();
    });
    it('Add Team functionality on Answerconnect', () => {
        loginPage.enterLoginCredentials();
        browser.customClick(settingsClick.settings,"The Settings icon is");
        browser.customClick(settingsClick.myDirectory,"The My Directory is");
        browser.customClick(settingsClick.addTeam, "The Add Team button is");
        let initialCount = verifyingTeam.verifyTeamName(testData.addTeam.teamName);
        browser.customSetValue(addingTeam.addingTeamName,testData.addTeam.teamName,"The Team Name");
        browser.customClick(addingTeam.clickToAddMembers,"The Add members button is");
        addingTeam.addMembers(testData.addTeam.members,testData.addTeam.id);
        browser.customClick(addingTeam.saveButton,"The save Button is");
        verifyingTeam.notificationWraper.waitForDisplayed();
        let text = browser.customGetText(verifyingTeam.notificationWraper);
        expect("Team Created Successfully").to.equal(text);
        let lastCount = verifyingTeam.verifyTeamName(testData.addTeam.teamName);
        console.log("***" + text + " " + (initialCount +1) + " " + lastCount);
        expect(initialCount + 1).to.equal(lastCount);
    });
    it('Edit Team functionality on the Answerconnect', () => {
        browser.customClick(editTeam.editButton, "The edit button is");
        editTeam.editMembers(testData.editTeam.members,testData.editTeam.id);
        browser.customClick(addingTeam.saveButton,"The save Button is");
        let text = browser.customGetText(verifyingTeam.notificationWraper);
        expect("Team Details Updated!").to.equal(text);
        //editTeam.verifyMembers();
        expect(testData.editTeam.id).to.not.includes(editTeam.verifyMembers());
        browser.pause(3000);
    });
    it('Deleting the team on the answerconnect', () => {
        deleteTeam.deletingTeam('FULL');
        let lastCount = verifyingTeam.verifyTeamName(testData.addTeam.teamName);
        expect(0).to.equal(lastCount);
        browser.pause(3000);
    });
});