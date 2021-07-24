const testData = require("../data/testdata.data")
module.exports = {
    loginProcedure : function(username,password,button){
        username.waitForDisplayed();
        username.setValue(testData.userName);
        password.waitForDisplayed();
        password.setValue(testData.passWord);
        button.waitForClickable();
        button.click();
    },
}