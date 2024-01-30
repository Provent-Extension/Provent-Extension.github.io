// List of sentences that will be type_sentenced out.
function shuffle(array) {
    for (let i=0; i < array.length; i++) {
        randomIndex = Math.floor(Math.random() * (array.length));
        console.log(randomIndex);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    } 
    return array;
}

var sentences_to_type_sentence = [
    "Around 20% of adults chronically procrastinate.",
    "Around 80% – 95% of students procrastinate.",
    "Students report procrastination occupies over 1/3 of their daily activities.",
    "Procrastinators tend to experience less stress early on in the semester, but more stress later on in the semester.",
    "Procrastinators are more likely to remain single and more likely to get separated.",
    "Procrastination is associated with mental and physical health issues.",
    "Procrastinators often reported going to bed later than planned due to bedtime procrastination."
];

sentences_to_type_sentence = shuffle(sentences_to_type_sentence);


// The current sentence being processed
var current_sentence = 0;

// Character number of the current sentence being processed 
var current_sentence_letter = 0;

// Holds the handle returned from setInterval
var typing_interval;

// Element that holds the text
var changing_text_id = document.querySelector("#home_changing_text");

// Cursor element 
var blinking_line_id = document.querySelector("#blinking_line");

// Implements typing effect
function type_sentence() { 
	// Get substring with 1 characater added
	var sentence_text =  sentences_to_type_sentence[current_sentence].substring(0, current_sentence_letter + 1);
	changing_text_id.innerHTML = sentence_text;
	current_sentence_letter++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(sentence_text === sentences_to_type_sentence[current_sentence]) {
		clearInterval(typing_interval);
		setTimeout(function() {
			typing_interval = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var sentence_text =  sentences_to_type_sentence[current_sentence].substring(0, current_sentence_letter - 1);
	changing_text_id.innerHTML = sentence_text;
	current_sentence_letter--;

	// If sentence has been deleted then start to display the next sentence
	if(sentence_text === '') {
		clearInterval(typing_interval);

		// If current sentence was last then display the first one, else move to the next
		if(current_sentence == (sentences_to_type_sentence.length - 1))
			current_sentence = 0;
		else
			current_sentence++;
		
		current_sentence_letter = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			blinking_line_id.style.display = 'inline-block';
			typing_interval = setInterval(type_sentence, 100);
		}, 200);
	}
}

// Start the typing effect on load
typing_interval = setInterval(type_sentence, 100);
