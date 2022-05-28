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
		vnb.style.right = "0px";
		vnb.style.display = "block";
		vnb_blur.style.display = "block";
		
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