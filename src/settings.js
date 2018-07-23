'use strict';

const BACKGROUND_COLOR_PAGE = 'html/background_color.html';
const NEW_TAB_PAGE = 'html/NewTab.html';




/**
 * @exports newtab
 */
const newtab = {
	/**
   * This method is used to navigate to the set the new tab wallpaper update period page.
   *
   * @returns {void}
   */
   async init () {
    const options = await browser.storage.local.get(defaults);

	switch (options.type) {
		case 'every_hours':