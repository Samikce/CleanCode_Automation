const allure  = require('@wdio/allure-reporter').default
module.exports = {
    getting : function (element) {
        element.waitForDisplayed();
        return element.getText();
    },
    setting : function(element,text,message = "Setted Sucessfully.") {
        element.waitForDisplayed();
        element.setValue(text);
        allure.addStep("The value is " + message);
    },
    clicking : function(element,message = "Clicked Sucessfully."){
        element.waitForDisplayed();
        element.click();
        allure.addStep("Clicking to the element is  " + message);
    }
}
/*This file consist of common commands alone which is frequently used in the test*/