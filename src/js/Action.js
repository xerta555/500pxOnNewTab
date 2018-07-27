/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
    document.addEventListener("click", (e) => {

        /**
         * Given the name of a beast, get the URL to the corresponding image.
         */
        function beastNameToURL(beastName) {
            switch (beastName) {
                case "Frog":
                    return browser.extension.getURL("beasts/frog.jpg");
                case "Snake":
                    return browser.extension.getURL("beasts/snake.jpg");
                case "Turtle":
                    return browser.extension.getURL("beasts/turtle.jpg");
            }
        }
    },
 },