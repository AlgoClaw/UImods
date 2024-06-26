// ==UserScript==
// @name        Zoho UI Fix
// @homepageURL https://github.com/AlgoClaw/UImods/blob/main/Zoho_UI_Fix.user.js
// @downloadURL https://raw.githubusercontent.com/AlgoClaw/UImods/main/Zoho_UI_Fix.user.js
// @updateURL   https://raw.githubusercontent.com/AlgoClaw/UImods/main/Zoho_UI_Fix.user.js
// @match       *://*.zoho.com/*
// @description null
// @version     0.003
//
// ==/UserScript==
//
var CSSMod = /** @class */ (function () {
    function CSSMod() {
        var _this = this;
        this.isEmbedded = window.top !== window.self;
        document.body.classList.add("CSS-fix");
    };
    //
    CSSMod.prototype.applyFix = function () {
        this.addCSS();
        var _this = this;
    };
    //
    CSSMod.prototype.addCSS = function () {
        var css = "";
        var StyleId = "CSSFix-Style";
        //
        css = this.applyCSSFix(css);
        //
        var style = document.getElementById(StyleId);
        style = document.createElement("style");
        style.id = StyleId;
        style.textContent = css;
        document.head.appendChild(style);
    };
    //
    CSSMod.prototype.applyCSSFix = function (css) {
        //
        // Toolbars on All Sites
        css += ".zmLHSBlk.zmLHSLight {width: fit-content !important;}\n"; // Reduce width of left toolbar
        css += ".zmLHSBlk.zmLHSLight {max-width: 250px !important;}\n"; // Reduce width of left toolbar
        css += ".zmTreeNode {padding-left: 0px !important;}\n"; // Increase width of left icons (into padding/border)
        css += ".zmTreeNode {width: 100% !important;}\n"; // Increase width of left icons (into padding/border)
        css += ".zmTreeNDWra {overflow: visible !important;}\n"; // Increase width of left icons (into padding/border)
        css += ".zmTreeText {max-width: 100% !important;}\n"; // Increase width of left icons (into padding/border)
        css += ".zmAccSwitchBox {padding-left: 0px !important;}\n"; // Accounts box padding
        css += ".zmAccSwitchBox {padding-right: 0px !important;}\n"; // Accounts box padding
        css += ".zmAccSwitchBox {padding-top: 0px !important;}\n"; // Accounts box padding
        css += ".zmAccSwitchBox {padding-bottom: 0px !important;}\n"; // Accounts box padding
        css += ".zmAccSwitchBoxImg {display: none !important;}\n"; // Hide Account "@" symbol
        css += ".zwp__header {height: 25px !important;}\n"; // Shorten Top Toolbar
        css += "[role=tablist] {display: none !important;}\n"; // Remove Top-Left Toolbar
        css += ".zmRhsNav.rhsBottomNav {display: none !important;}\n"; // Right Side Panel - Remove Bottom Buttons
        css += ".zmTopNav {display: none !important;}\n"; // Remove "Enable Offline" Button
        css += "#wmstoolbar {display: none !important;}\n"; // Remove Bottom Toolbar
        css += ".zwp__footer {display: none !important;}\n"; // Remove Bottom Toolbar Area
        //css += " .zmDoubleIcon {display: none !important;}\n"; // Left Toolbar Icons
        css += "[title=Resources] {display: none !important;}\n"; // Left Toolbar - Remove "Resources"
        css += "[title=Bookmarks] {display: none !important;}\n"; // Left Toolbar - Remove "Bookmarks"
        css += "[title=Notes] {display: none !important;}\n"; // Left Toolbar - Remove "Notes"
        css += ".zmRhsBar {width: 100% !important;}\n"; // Right Toolbar - Reduce Width
        css += ".zmTopBar  {height: unset !important;}\n"; // Top Toolbar - Reduce some vertical padding
        css += ".zwp-tab-block {width: unset !important;}\n"; // Top Toolbar - Reduce Width to Minimum
        css += "#jsAppNameHeader {padding-top: 0px !important;}\n"; // Reduce some vertical padding
        css += "#jsAppNameHeader {padding-bottom: 0px !important;}\n"; // Reduce some vertical padding
        css += ".zmbadge-wrapper__cv5w0v {display: none !important;}\n"; // Remove notification bell
        css += ".zmTreeNode.zmCurTree {background-color: unset !important}\n"; // Remove highlighting of selected folder (it does not update properly)
        //
        // Keep Left Toolbar Visible When Window Width is Reduced
        css += ".zmLHSWra {visibility: visible !important;}\n";
        css += ".zmLHSWra {opacity: 1 !important;}\n";
        css += ".zmLHSWra {transform: unset !important;}\n";
        css += ".zmAppsBar {visibility: visible !important;}\n";
        css += ".zmAppsBar {opacity: 1 !important;}\n";
        css += ".zmAppsBar {transform: unset !important;}\n";
        //
        // Mail
        css += ".zmLFrom {max-width: none !important;}\n"; // Sender Column Visible
        css += ".zmLDate {max-width: none !important;}\n"; // Date Column Visible
        css += ".zmLDate {text-align: left !important;}\n"; // Date Align Left
        css += "#zmStreamTree {display: none !important;}\n"; // Remove "Streams"
        css += "#zmlviewH {display: none !important;}\n"; // Remove "Views"
        css += "#zmllabelH {display: none !important;}\n"; // Remove "Tags"
        css += ".zmTreeNode[title=Templates] {display: none !important;}\n"; // Remove "Templates"
        css += ".zmTreeNode[title=Snoozed] {display: none !important;}\n"; // Remove "Snoozed"
        css += ".zmTreeNode[title=Sent] {display: none !important;}\n"; // Remove "Sent" (custom search one is better)
        css += ".zmTreeTitle {display: none !important;}\n"; // Remove Category Headers
        css += "div#zmlTreeH.zmTreeBlk {padding-top: 0px !important;}\n"; // Remove Headers Top Padding
        css += ".zmPVActions {padding-top: 0px !important;}\n"; // Mail Toolbar - Height Reduction
        css += ".zmPVActions {padding-bottom: 0px !important;}\n"; // Mail Toolbar - Height Reduction
        css += ".msi-mailopen  {display: none !important;}\n"; // Remove Tab Icons
        css += ".jsTabDragDrop  {min-width: 150px !important;}\n"; // Set Minimum Tab Width
        css += ".zmLTct  {display: none !important;}\n"; // Remove gap between checkbox and text
        css += ".zmPVHeading {padding-bottom: 0px !important;}\n"; // Decrease padding around subject line
        //
        // Mail (inbox) Top Toolbar
        css += ".zmmenu-separator {display: none !important;}\n"; // Remove Seperator
        css += "[type=button][menu-btn-id=filter] {display: none !important;}\n"; // Remove "Views" Button
        css += "[type=button][id=tag] {display: none !important;}\n"; // Remove "Tag as" Button
        css += "[type=button][id=move] {display: none !important;}\n"; // Remove "Move to" Button
        css += "[type=button][menu-btn-id=snooze] {display: none !important;}\n"; // Remove "Snooze" Button
        css += "[type=button][id=archiveFilter] {display: none !important;}\n"; // Remove "View archived" Button
        css += "[type=button][menu-btn-id=attachmentFilter] {display: none !important;}\n"; // Remove "Attachment Options" Button
        //
        // Mail (individual email) Toolbar
        css += ".zmmenu-separator__6cs96d {display: none !important;}\n"; // Vertical seperator
        css += "[type=button][id=reminder] {display: none !important;}\n"; // Remove "Reminder" Button
        css += "[type=button][id=associateTask] {display: none !important;}\n"; // Remove "Add task" Button
        css += "[type=button][id=shareAsLink] {display: none !important;}\n"; // Remove "Permalink" Button
        css += "[type=button][id=snooze] {display: none !important;}\n"; // Remove "Snooze" Button
        //
        // Calendar
        css += "#zcl_mcalH {display: none !important;}\n"; // Remove "My Calendars" header
        css += "#zcl_sucalH {display: none !important;}\n"; // Remove "Subscribed Calendars" header
        css += ".zcl_hd-btn--with-icon{display: none !important;}\n"; // Remove "Yet to respond" and print buttons
        //
        //Tasks
        css += "#delayed.zmTSectionWrapper {display: none !important;}\n"; // Remove "Delayed"
        css += "#today.zmTSectionWrapper {display: none !important;}\n"; // Remove "Today"
        css += "#week.zmTSectionWrapper {display: none !important;}\n"; // Remove "Week"
        css += "#month.zmTSectionWrapper {display: none !important;}\n"; // Remove "Month"
        css += "#upcoming.zmTSectionWrapper {display: none !important;}\n"; // Remove "Upcoming"
        css += ".zmTSectionHeaderWra {display: none !important;}\n"; // Remove "No due date" header
        css += ".zmTList.zmTLEditable {height: unset !important;}\n"; // Make Tasks More Compact
        //
        // Search Bar Fixes
        css += ".msi-close {display: block !important;}\n"; // Keep "X" visible at all times
        css += ".zmSearchBub {margin-right: 10px !important;}\n"; // Stop margin width from randomly shifting (causing weird jitters)
        css += ".js-fvalue {padding-right: 5px !important;}\n"; // Stop padding width from randomly shifting (causing weird jitters)
        //
        // Contacts
        css += ".msi-invite-zoho  {display: none !important;}\n"; // Remove "Invite to Zoho" Button
        css += ".msi-invite-chat  {display: none !important;}\n"; // Remove "Invite to Chat" Button
        //
        // Drating Email
        css += ".zmCRow {padding-top: 0px !important;}\n"; // Remove padding around "To", "CC", and "BCC" bars
        css += ".zmCRow {padding-bottom: 0px !important;}\n"; // Remove padding around "To", "CC", and "BCC" bars
        css += ".zmattachment-section-header__1dhb1fv {padding-top: 0px !important;}\n"; // Remove padding around "Attachments" bar
        css += ".zmattachment-section-header__1dhb1fv {padding-bottom: 0px !important;}\n"; // Remove padding around "Attachments" bar
        css += ".zeSpellCheckBtnWra {display: none !important;}\n"; // Remove "Errors" sticky overlay
        //
        // Settings Menus and Headers
        css += ".zmsettings-page-header {padding-top: 0px !important;}\n";
        css += ".zmsettings-page-header {padding-bottom: 0px !important;}\n";
        css += ".zmsettings-page-header {padding-left: 0px !important;}\n";
        css += ".zmsettings-page-header {padding-right: 0px !important;}\n";
        css += ".zmsettings-page-header-data {padding-top: 0px !important;}\n";
        css += ".zmsettings-table-select {padding-top: 0px !important;}\n";
        css += ".zmsettings-table-select {padding-bottom: 0px !important;}\n";
        css += ".zmsettings-table-select {padding-left: 0px !important;}\n";
        css += ".zmsettings-table-select {padding-right: 0px !important;}\n";
        css += ".zmsettings-app-switch {padding-top: 0px !important;}\n";
        css += ".zmsettings-app-switch {padding-bottom: 0px !important;}\n";
        css += ".zmsettings-app-switch {padding-left: 0px !important;}\n";
        css += ".zmsettings-app-switch {padding-right: 0px !important;}\n";
        css += ".zmsettings-block {padding-top: 0px !important;}\n";
        css += ".zmsettings-page-content {padding-left: 0px !important;}\n";
        css += ".zmsettings-page-content {padding-right: 0px !important;}\n";
        css += ".zmsettings-tab-panel {padding-top: 0px !important;}\n";
        css += ".zmsettings-table-actions {margin-bottom: 0px !important;}\n";
        css += ".zmsettings-nav-action-primary {padding-top: 0px !important;}\n";
        css += ".zmsettings-nav-action-primary {padding-bottom: 0px !important;}\n";
        css += ".zmsettings-nav-action-primary {padding-left: 0px !important;}\n";
        css += ".zmsettings-nav-action-primary {padding-right: 0px !important;}\n";
        css += ".zmsettings-nav-list-item {margin-left: 0px !important;}\n";
        css += ".zmsettings-nav-list-item {margin-right: 0px !important;}\n";
        css += ".zmsettings-nav-list-item {min-height: unset !important;}\n";
        css += "[class*='zmset-filter-table-row-'] {padding-top: 0px !important;}\n";
        css += "[class*='zmset-filter-table-row-'] {padding-bottom: 0px !important;}\n";
        css += "[class*='zmset-filter-table-row-'] {padding-left: 0px !important;}\n";
        css += "[class*='zmset-filter-table-row-'] {padding-right: 0px !important;}\n";
        css += "[class='zmsettings-search'] {display: none !important;}\n";
        css += ".zmsettings-primary-nav h6 {padding-top: 0px !important;}\n";
        css += ".zmsettings-primary-nav h6 {padding-bottom: 0px !important;}\n";
        css += ".zmsettings-primary-nav h6 {padding-left: 0px !important;}\n";
        css += ".zmsettings-primary-nav h6 {padding-right: 0px !important;}\n";
        css += ".zmsettings-block {flex: unset !important;}\n";
        //
        css += "[class=zmTreeBlk] {padding-top: 0px !important;}\n";
        css += "[class=zmTreeWrapper] {padding-right: 0px !important;}\n";
        css += "[class*=zmList] {padding-top: 2px !important;}\n";
        css += "[class*=zmList] {padding-bottom: 2px !important;}\n";
        css += "[class*=zmList] {padding-left: 2px !important;}\n";
        css += "[class*=zmList] {padding-right: 2px !important;}\n";
        css += "[class=zmLSender] {padding-right: 5px !important;}\n";
        //
        //
        // Remove rounded corners
        //css += " {border-radius: none !important;}\n";
        //
        return css;
    };
    return CSSMod;
}());
new CSSMod().applyFix();
