chrome.tabs.query(queryInfo, function (tabs) {

    document.querySelector('#popupbck img').src = request.getPopupPath() + '.jpg';

    document.querySelector('#clickSettings').textContent = browser.i18n.getMessage('Click_Popup')
    document.querySelector('#clickAbout').textContent = browser.i18n.getMessage('Click_About')
    document.querySelector('#clickSettings').addEventListener('click', async (event) => {
        event.preventDefault();
        if ((await browser.storage.local.get()).showOptionsInDedicatedTab)
            void browser.tabs.create({ url: browser.runtime.getURL('/html/Options.html') });
        else
            void browser.runtime.openOptionsPage();
    });


    function listenForClicks() {
        document.addEventListener("click", (e) => {

            function MenuNamesToURL(MenuNames) {
                switch (MenuNames) {
                    case data - i18n: "Click_Popup" =
                        return browser.extension.getURL("html/Options.html");
                    case data - i18n: "Click_About":
                        return browser.extension.getURL("html/About.html");
                    case data - i18n: "Click_Home":
                        return browser.extension.getURL("html/Home.html");
                }
            }
        }
        }

}
