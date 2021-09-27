// background.js

let color =  '#51fas3';

chrome.tabs.query({active:true,currentWindow:true}, function(tabs) {

	var activeTab = tabs[0];
	var activeTabUrl = activeTab.url;
	console.log(activeTabUrl);
});
