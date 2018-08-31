const options = {

    toggleVisibility(el, condition) {
        condition ? el.classList.remove('hidden') : el.classList.add('hidden');
    },

};



var enteredText = document.getElementById("settings-intro").value;
var numberOfLineBreaks = (enteredText.match(/\n/g) || []).length;
alert('Number of breaks: ' + numberOfLineBreaks);



var enteredText = document.getElementById("auto-option").value;
var numberOfLineBreaks = (enteredText.match(/\n/g) || []).length;
alert('Number of breaks: ' + numberOfLineBreaks);



var enteredText = document.getElementById("perm-req-text").value;
var numberOfLineBreaks = (enteredText.match(/\n/g) || []).length;
alert('Number of breaks: ' + numberOfLineBreaks);



Settings.get('showOptionsInDedicatedTab').then(async v => {
    if (!v) return
    const tab = await browser.tabs.getCurrent()
    if (!tab || !tab.url ||
        tab.url.toLowerCase().startsWith(location.origin.toLowerCase())) return
    await browser.tabs.create({ url: location.href })
    location.href = 'about:blank'
})



let typeSelect = document.getElementById("type")
typeSelect.addEventListener("change", function () {
    let admOptionValue = document.getElementById("local").value;
    if (admOptionValue == typeSelect.value) {
        document.getElementById("admDivCheck").style.display = "block";
    }
    else {
        document.getElementById("admDivCheck").style.display = "none";
    }
});


