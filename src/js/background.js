function openPage() {
    browser.window.create({

    });
}

browser.browserAction.onClicked.addListener(openPage);


function Download500pximgs() {	

	// Check if files exist, if yes, rename them, if no continue

    const req = new XMLHttpRequest();
    req.open('GET', 'http://feed.500px.com/500px-best', false);
    req.send(null);

    if (req.status === 200) {
        
    }

    var fs = require('fs');
    fs.rename('/walls/Image1.jpeg', '/walls/Image2.png', function (err) {
        if (err) console.log('ERROR: ' + err);
    });

}
setInterval(Download500pximgs, 10800000);

function openPage() {
    browser.popup.create({

    })
}
