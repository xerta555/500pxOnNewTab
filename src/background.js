function Download500pximgs() {	

	// Check if files exist, if yes, rename them, if no continue
	
	var result = doesFileExist("/wall/Image4.jpeg")
	if (result == true) {
		var destination = IO.newFile("null", "Image6.jpeg")
		var result = file.moveTo("destination", "")
	}
	
	var result = doesFileExist("/wall/Image5.jpeg")
	if (result == true) {
		var destination = IO.newFile("null", "Image7.jpeg")
		var result = file.moveTo("destination", "")
	}
	
	var result = doesFileExist("/wall/Image6.jpeg")
	if (result == true) {
		var destination = IO.newFile("null", "Image8.jpeg")
		var result = file.moveTo("destination", "")
	}
	
	var result = doesFileExist("/wall/Image7.jpeg")
	if (result == true) {
		var destination = IO.newFile("null", "Image9.jpeg")
		var result = file.moveTo("destination", "")
	}
	
	var parents = document.getElementsByClassName("itemcontent");
	var data = canvas.toDataURL("http://feed.500px.com/500px-best/jpeg");
	var img = document.createElement('imgs');
	var totalImages = 3;
	imgs.src = data;
	var done = false;
	var result = [];
	imgs.setAttribute("walls", "Image1.jpeg");
	imgs.setAttribute("href", data);
	imgs.appendChild(img);

		for(var i = 0; i < parents.length && !done; i++) {
			var images = parents[0].getElementsByTagName("img");

			for(var j = 0; j < images.length && !done; j++) {     
				result.push(images[j].src);
			if(result.length == totalImages)
				done = true;    
			}
		}
	
	
	
	var file = IO.newFile("walls", "Image1.jpeg");
	var destination = IO.newFile("null", "MainImage.jpeg")
	file.moveTo(destination, "");
	
	var file = IO.newFile("walls", "Image2.jpeg");
	var destination = IO.newFile("null", "Image1.jpeg")
	file.moveTo(destination, "");
	
	var file = IO.newFile("walls", "Image3.jpeg");
	var destination = IO.newFile("null", "Image2.jpeg")
	file.moveTo(destination, "");

}
setInterval(Download500pximgs, 10800000);
