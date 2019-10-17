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
		$("#lenght").text(lenght);
		$("#myMarsBar").text(getMars);
		
		
		
		
		/**  part for JSON  **/
		
		
		
		// STORING nutritional information of a mars choco bar.
		
		var marsBarInfo= {
			"Calories" : "230g",
			"Total fat" {
				"Total fat" : "8.6g",
				"Saturated fat" : "4.2g",
				"Trans fat" : "0g"
			}
			"Cholesterol" : "0mg",
			"Sodium": "0mg",
			"Potassium" : "0mg",
			"Total Carbohydrate" {
				"Total Carbohydrate" : "35.3g",
				"Dietary Fiber" : "0g",
				"Sugars" "30.5g"
			}
			"Protein": "2.2g",
			"Vitamins" {
				"Vitamin A" : "0%",
				"Calcium" : "0%",
				"Vitamin C" : "0%",
				"Iron" : "0%"
			}
			
		}
		
		//MAKE mars into a string. haha
		var chocoBarAsAString = JSON.stringify(marsBarInfo);
		
		//STORE it into local storage
		window.localStorage.setItem("adress", chocoBarAsAString);
		
		//ACCESS mars as a string
		var getMars = window.localStorage.getItem("adress");
		
		//UNSTRING mars bar
		var barJSON =JSON.parse(getMars);
		
		
		/** The end of JSON **/
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
	alert("device ready");
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
		$("#lenght").text(lenght);
		$("#myMarsBar").text(getMars);
		
		
		
		
		/**  part for JSON  **/
		
		
		
		// STORING nutritional information of a mars choco bar.
		
		var marsBarInfo= {
			"Calories" : "230g",
			"Total fat" {
				"Total fat" : "8.6g",
				"Saturated fat" : "4.2g",
				"Trans fat" : "0g"
			}
			"Cholesterol" : "0mg",
			"Sodium": "0mg",
			"Potassium" : "0mg",
			"Total Carbohydrate" {
				"Total Carbohydrate" : "35.3g",
				"Dietary Fiber" : "0g",
				"Sugars" "30.5g"
			}
			"Protein": "2.2g",
			"Vitamins" {
				"Vitamin A" : "0%",
				"Calcium" : "0%",
				"Vitamin C" : "0%",
				"Iron" : "0%"
			}
			
		}
		
		//MAKE mars into a string. haha
		var chocoBarAsAString = JSON.stringify(marsBarInfo);
		
		//STORE it into local storage
		window.localStorage.setItem("adress", chocoBarAsAString);
		
		//ACCESS mars as a string
		var getMars = window.localStorage.getItem("adress");
		
		//UNSTRING mars bar
		var barJSON =JSON.parse(getMars);
		
		
		/** The end of JSON **/
    }
