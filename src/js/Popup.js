document.querySelector('#clickSettings').addEventListener('click', async (event) => {
    event.preventDefault();
    if ((await browser.storage.local.get()).showOptionsInDedicatedTab)
        void browser.tabs.create({ url: browser.runtime.getURL('/html/Options.html') });
    else
        void browser.runtime.openOptionsPage();
});
