	var numOfBackgrounds = 34;
	var n = Math.floor((Math.random() * numOfBackgrounds) + 1);
	document.body.style.backgroundImage = "url('bg/"+n+".jpg')";

	appBtn.addEventListener("click", function(){
		chrome.tabs.update({
            url:'chrome://apps'
        });
	});