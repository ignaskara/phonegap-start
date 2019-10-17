var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
	var key = "pen";
		var value = "blue colour";
				
		window.localStorage.setItem(key, value);
		
		var key = "headset";
		var value = "Green";
				
		window.localStorage.setItem(key, value);
		
		var key = "mouse";
		var value = "small";
				
		window.localStorage.setItem(key, value);
		
		var key = "window";
		var value = "clear";
				
		window.localStorage.setItem(key, value);
		
		var key = "carpet";
		var value = "old";
				
		window.localStorage.setItem(key, value);
		
		var value = window.localStorage.getItem(key);
		
		//document.getElementById("myText").innerHTML = value;
		$("#myText").text(value);
    }
