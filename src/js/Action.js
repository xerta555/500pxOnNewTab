var renderPopup = function () {
    var elem, text;

    if (popupData.tabTitle) {
        document.title = popupData.appname + ' - ' + popupData.tabTitle;
    }

    elem = document.body;
    elem.classList.toggle('advancedUser', popupData.advancedUserEnabled);
    elem.classList.toggle(
        'off',
        popupData.pageURL === '' || !popupData.netFilteringSwitch
    );
