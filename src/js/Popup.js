document.querySelector('#options').addEventListener('click', async () => {
    if (await Settings.get('showOptionsInDedicatedTab'))
        void browser.tabs.create({ url: browser.runtime.getURL('options.html') });
    else
        void browser.runtime.openOptionsPage();
});
