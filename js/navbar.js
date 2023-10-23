function show_responsive_bar() {
	var vnb = document.getElementById("vertical_nav_bar");
	var vnb_blur = document.getElementById("vnb_blur");
	if (vnb.style.display === "block") {
		vnb.style.right = "-500px";
		
		setTimeout(() => {
			vnb.style.display = "none";
		}, 100);
	}
	
	else {
		// vnb.style.right = "0px";
		vnb.style.display = "block";
		vnb_blur.style.display = "block";
		setTimeout(() => {
			vnb.style.right = "0px";
		}, 100);
	}
}
function animate_ham_menu() {
	var e_h_m = document.getElementById("entire_ham_menu");
	var hammenu_line_one = document.getElementById("hammenu_line_one");
	var hammenu_line_two = document.getElementById("hammenu_line_two");
	var hammenu_line_three = document.getElementById("hammenu_line_three");
  
  if (e_h_m.classList.contains("mobilenavbarison")) { //Closes nav bar
	vnb_blur.style.display = "none";	  
	e_h_m.classList.remove("mobilenavbarison"); // Removes the class
	
	hammenu_line_three.style.animation = "move_then_reappear 0.3s;";	
	hammenu_line_three.classList.remove("line_three_ani");

	  // Runs after the default accordion is clicked
	  setTimeout(() => {
		hammenu_line_two.classList.remove("line_two_ani");
		// Runs after the default accordion is clicked
		setTimeout(() => {
		  hammenu_line_one.classList.remove("line_one_ani");
		  setTimeout(() => {
			e_h_m.classList.remove("ham_menu_spin");		
			  setTimeout(() => {
				show_responsive_bar()
			  }, 100); //Opens the navigation bar
		  }, 100); //Spins the entire menu
		}, 100); //Animates top line
	  }, 100); //Animates middle line

  } //End of if statement
  
  else { //Opens nav bar
	  e_h_m.classList.add("mobilenavbarison");
	  hammenu_line_three.classList.add("line_three_ani"); // Adds the class

	  // Runs after the default accordion is clicked
	  setTimeout(() => {
		hammenu_line_two.classList.add("line_two_ani");
		// Runs after the default accordion is clicked
		setTimeout(() => {
		  hammenu_line_one.classList.add("line_one_ani");
		  setTimeout(() => {
			e_h_m.classList.add("ham_menu_spin");		
			  setTimeout(() => {
				show_responsive_bar()
			  }, 100); //Opens the navigation bar
		  }, 100); //Spins the entire menu
		}, 100); //Animates top line
	  }, 100); //Animates middle line
  }
  
  
} //End of function

// Creates download popup options
function removeDownloadOptions() {
	document.body.removeChild(document.getElementById("backgroundBlurID"));
	document.body.removeChild(document.getElementById("modalID"));
}
function displayDownloadOptions() {
	// if already opened, remove it
	if (document.getElementById("backgroundBlurID") || document.getElementById("modalID")) {
		removeDownloadOptions();
	}
	// else
	else {
		let backgroundBlur = document.createElement("div");
		backgroundBlur.setAttribute("id", "backgroundBlurID");
		backgroundBlur.classList.add("downloadOptionsBackgroundBlur");
		backgroundBlur.onclick = function() {
			removeDownloadOptions();
		} 

		let modal = document.createElement("div");
		modal.setAttribute("id", "modalID");
		modal.classList.add("downloadOptions");
		
		let title = document.createElement("h2");
		title.textContent = "Which version of Provent do you want? Both are free!"
		title.classList.add("downloadOptionTitle")
		modal.appendChild(title);

		let crossMark = document.createElement("h3");
		crossMark.textContent = "x"
		crossMark.classList.add("downloadOptionCrossMark")
		crossMark.onclick = function() {
			removeDownloadOptions();
		} 
		modal.appendChild(crossMark);

		// left column
		let columnLeft = document.createElement("div");

		let provent = document.createElement("a");
		provent.href = "https://chrome.google.com/webstore/detail/provent-pomodoro-new-tab/cnilpijpbkkefelbjobbfgdhpcdfpilg";
		provent.textContent = "Provent - includes everything"
		provent.classList.add("downloadOptionsButton")

		// right column
		let columnRight = document.createElement("div");
		
		let proventZero = document.createElement("a");
		proventZero.href = "https://chrome.google.com/webstore/detail/provent-zero-pomodoro-sit/mdkafpakfmfighaiblggaeabfckpbaee";
		proventZero.text = "Provent Zero - everything but custom tab"
		proventZero.classList.add("downloadOptionsButton")

		modal.appendChild(provent);
		modal.appendChild(proventZero);
		document.body.appendChild(backgroundBlur);
		document.body.appendChild(modal);
	}
}