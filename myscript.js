let mydiv = document.createElement("div");
mydiv.textContent = "HOOOLA";
document.body.prepend(mydiv);
function test(){
	chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
		let currentTab = tabs[0];
		let currentTabUrl = currentTab.url;
		let tabId = currentTab.id;	
		let isOnYoutube = currentTabUrl == "youtube.com";
		let isPlayingSong = isOnYoutube && currentTabUrl == "youtube.com/watch?v=......";
		
		function modifyDOM(){
			console.log("ESCRIPT");
			console.log(document.body);
			let songTitleDiv = document.getElementsByClassName("ytd-video-primary-info-renderer")[0];
			let currentSongTitle = songTitleDiv.textContent;
			console.log("CURR SONG TIT"+currentSongTitle);
			return document.body.innerText;
		}

		chrome.scripting.executeScript({
			target:{tabId:tabId},
			function: modifyDOM,
		}, (results) => {
			console.log(results[0]);
		} );
		//if(isPlayingSong) {
			// if we on youtube, and there's a song playing
			// we get songTitleDiv
			// And extract the song title from it
			// then we search in the genius api 
			//searchTitleInGenius(title);
			// and update the view with the content of it

		//}
		
	});
}

function searchTitleInGenius(title) {
	let geniusUrl = "https://genius.com/api/";
	fetch(geniusUrl).then(r => r.text()).then(result => {
		// Result
	});
}

document.getElementById('mybtn').onclick=test;
