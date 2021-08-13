const allure  = require('@wdio/allure-reporter').default
module.exports = {
    customGetText : function (element) {
        element.waitForDisplayed();
        return element.getText();
    },
    customSetValue : function(element,text,message = "The value") {
        element.waitForDisplayed();
        element.setValue(text);
        allure.addStep(message + " Entered Sucessfully.");
    },
    customClick : function(element,message = "Element"){
        element.waitForDisplayed();
        element.waitForClickable();
        element.click();
        allure.addStep(message + " Clicked Sucessfully");
    }
}
/*This file consist of common commands alone which is frequently used in the test*/