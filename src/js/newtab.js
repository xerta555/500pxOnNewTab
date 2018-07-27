const NEW_TAB_PAGE = 'html/newtab.html';

{
    background_color: '#ffffff',
        focus_website : true,
            local_file : '/js/settings.js',
                storage_schema : '1',
                    type : 'custom_url',
                        url : 'about:newtab'

    var title = browser.i18n.getMessage("NewTabTitle");

    browser.menus.create(
        createProperties, // command
        function () { _execute_browser_action } // icons: {"32": "img/image32.png"}
    )
}

