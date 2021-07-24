const allure  = require('@wdio/allure-reporter').default
module.exports = {
    clicking : function(element,message){
        element.waitForDisplayed();
        element.click()
        allure.addStep("Clicking " + message )
        //console.log("clicking" )
    },
    getting : function (element,message) {
        element.waitForDisplayed();
        return element.getText();
    },
    setting : function(element,text,message) {
        element.waitForDisplayed();
        element.setValue(text);
        allure.addStep("Seting " + message )
    }
}