permutive.ready( function(){
 	if(document.getElementsByTagName("h2").length == 1){
		var page_title = document.getElementsByTagName("h2")[0].innerHTML;
		}else{var page_title = document.getElementsByTagName("a")[0].innerHTML};
	
		if(document.getElementsByTagName("b")[0] != null){
			var page_author = document.getElementsByTagName("b")[0].innerHTML;
		}else{var page_author = ""}

		var categorylist = document.getElementsByTagName("meta");
		var i;
		var categories = "";
		for (i = 0; i < categorylist.length; i++) {
			if(categorylist[i].name == "categories"){
				var categories = categorylist[i].content;
				var cat_array = categories.split(",");
			}
		}
		console.log("Article  = " + page_title + "\nAuthor: " + page_author + "\nCategories: " + cat_array)
	
//TASK 1. Track a Pageview event on every page
		permutive.track('Pageview',{
		title: page_title,
		author: page_author,
		categories: cat_array
		});	
}, "initialised");


//TASK 3. Send Permutive cohorts to Google Ad Manager
permutive.segment(6912, function(result) {
	if (result) {
	console.log("The user is in the Gamers Cohort.");
	window.googletag = window.googletag || {};
	window.googletag.cmd = window.googletag.cmd || [];
	window.googletag.cmd.push(function () {
	window.googletag.pubads().setTargeting('permutive', 'gaming');
	console.log("Gaming Ad Displaying");
	})} else {
	console.log("The user is not in the Gamers Cohort.");
	}
});	


//TASK 2. Track Scroll events on every page

var ScrollPos = window.pageYOffset; //current vertical scroll position
window.onscroll = function() {detectScroll()};
	
function detectScroll(){
var winHeight = window.innerHeight; //the height of the viewing window in pixels
var docSize = document.body.scrollHeight; //total scrollable height of the entire document body
//topPosition = 0;
var docBottom = docSize - winHeight; //document body height - window height provides at what point (in pixels) the scrollbar would stop at the bottom
var scroll_depth = (ScrollPos / docBottom).toFixed(2); //update output to two decimal places

	  if(ScrollPos < window.pageYOffset){ //When user is scrolling down
		  if(scroll_depth == .25){
			console.log(0.25); //25% scrolled
		  }
		  if(scroll_depth == .50){
			console.log(0.50); //50% scrolled
		  }	  
		  if(scroll_depth == .75){
			console.log(0.75); //75% scrolled
		  }
		  if(scroll_depth == 1){
			console.log(scroll_depth); //Bottom of page
		  }
	  }
	  	  ScrollPos = window.scrollY; //Capture new scroll position for direction monitoring
}


//TASK 4. Integrate Permutive with a Dailymotion video player
window.addEventListener("DOMContentLoaded", (event) => {
dailymotion.createPlayer("myPlayer", {
    video: "x6feo7b",
  })
  .then((player) => {
  const callback = (state) => {
		  console.log("Permutive Tracking:\n");
		  console.log("Sending to Permutive EventName: " + state.eventName);
		  console.log("Sending to Permutive Played: " + state.played); 
		  console.log("Sending to Permutive VideoID: " + state.videoId); 
		  console.log("Sending to Permutive Advertiser Name: " + state.adAdvertiserName); 
		  console.log("Sending to Permutive Ad Duration: " + state.adDuration); 
		  console.log("Sending to Permutive Video Duration: " + state.videoDuration); 
		  console.log("Sending to Permutive Ad Position: " + state.adPosition); 
		  console.log("Sending to Permutive Ad Is Skippable: " + state.adIsSkippable); 
		  console.log("Sending to Permutive Player is Viewable: " + state.playerIsViewable); 
		  console.log("Sending to Permutive Player is Muted: " + state.playerIsMuted);
		  console.log("Sending to Permutive Ad Title: " + state.adTitle);
		  console.log("Sending to Permutive Video Title: " + state.videoTitle);
		  console.log("Sending to Permutive Ad ID: " + state.adId);
		  console.log("Sending to Permutive Ad Ended Reason: " + state.adEndedReason);	
		
  		permutive.track('DailymotionState',{
		  eventName: state.eventName,
		  played: state.played,
		  videoId: state.videoId, 
		  adAdvertiserName: state.adAdvertiserName, 
		  adDuration: state.adDuration, 
		  videoDuration: state.videoDuration, 
		  adPosition: state.adPosition, 
		  adIsSkippable: state.adIsSkippable, 
		  playerIsViewable: state.playerIsViewable, 
		  playerIsMuted: state.playerIsMuted, 
		  adTitle: state.adTitle, 
		  videoTitle: state.videoTitle, 
		  adId: state.adId, 
		  adEndedReason: state.adEndedReason, 
		});		
}
		var state;
        player.on(dailymotion.events.PLAYER_START, callback),
	    player.on(dailymotion.events.VIDEO_START, callback),
		player.on(dailymotion.events.VIDEO_PLAY, callback),
		player.on(dailymotion.events.VIDEO_PAUSE, callback),
		player.on(dailymotion.events.AD_START, callback),
		player.on(dailymotion.events.AD_PLAY, callback),
		player.on(dailymotion.events.AD_PAUSE, callback),
		player.on(dailymotion.events.AD_CLICK, callback)
	
    }).catch((e) => console.error(e));
});



