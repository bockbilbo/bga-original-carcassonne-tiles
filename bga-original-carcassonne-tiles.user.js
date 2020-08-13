// ==UserScript==
// @name         Original Carcassone Tiles
// @namespace    https://github.com/bockbilbo/bga-original-carcassonne-tiles
// @version      1.0
// @description  Displays the original carcassone tiles in boardgamearena.com when selecting the "Latest" "Artwork edition" from the playing menu.
// @author       bockbilbo
// @match        https://boardgamearena.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle (".second_edition { background-image: url('https://raw.githubusercontent.com/bockbilbo/bga-original-carcassonne-tiles/master/original-tiles.jpg') !important; }");
})();
