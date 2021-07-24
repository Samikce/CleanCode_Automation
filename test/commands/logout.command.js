module.exports = {
    logoutProcedure : function(menu,button){
        menu.waitForClickable();
        menu.click();
        button.waitForClickable();
        button.click();
    }
}