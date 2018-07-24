'use strict';

/* global URI_REGEX, PERMISSION_HOMEPAGE, defaults, utils */

const BACKGROUND_COLOR_PAGE = 'html/background_color.html';
const HOME_PAGE_MISSING_PERMISSION = 'html/homepage_permission_needed.html';
const LOCAL_FILE_PAGE = 'html/local_file.html';
const LOCAL_FILE_MISSING_PAGE = 'html/local_file_missing.html';
const FEED_PAGE = 'html/feed.html';
const NEW_TAB_PAGE = 'html/newtab.html';

@-moz-document url-prefix(about:blank), url-prefix(about:newtab) {
  html, body, #newtab-customize-overlay {
  background: url("/walls/image1.jpeg") no-repeat fixed center !important;
  }
}
