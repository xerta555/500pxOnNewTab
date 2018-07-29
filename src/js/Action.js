document.querySelector('#options-content').textContent = browser.i18n.getMessage('Click_Popup')

var renderPopup = function () {
    var elem, text;

    if (popupData.tabTitle) {
        document.title = popupData.appname + ' - ' + popupData.tabTitle;
    }

    elem = document.body;
    elem.classList.toggle('advancedUser', popupData.advancedUserEnabled);
        'off',
        popupData.pageURL === '' || !popupData.netFilteringSwitch
    );
}
