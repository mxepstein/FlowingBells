// Saves options to chrome.storage
const saveOptions = () => {
	const minuteBell = document.getElementById('minuteBell').value;
	const startBell = document.getElementById('startBell').value;
	const endBell = document.getElementById('endBell').value;


	chrome.storage.sync.set({
			chosenMinuteBell: minuteBell,
			chosenStartBell: startBell,
			chosenEndBell: endBell
		},
		() => {
			// Update status to let user know options were saved.
			const status = document.getElementById('status');
			status.textContent = 'Options saved.';
			setTimeout(() => {
				status.textContent = '';
			}, 750);
		}
	);
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
	chrome.storage.sync.get({
			chosenMinuteBell: "alternating",
			chosenStartBell: "alarm",
			chosenEndBell: "train"
		},
		(items) => {
			document.getElementById('minuteBell').value = items.chosenMinuteBell;
			document.getElementById('startBell').value = items.chosenStartBell;
			document.getElementById('endBell').value = items.chosenEndBell;
		}
	);
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);








///Sound on dropdown
const dropdowns = document.querySelectorAll('select');
let audio = null;

// Function to play the selected sound
function playSound(soundFile) {
	  if (audio) {
        audio.pause(); // Pause any currently playing sound
      }
	audio = new Audio(soundFile);
	audio.play();
}

// Add event listeners to the dropdowns
dropdowns.forEach(dropdown => {
	dropdown.addEventListener('change', function() {
		const selectedOption = this.options[this.selectedIndex];
		const soundFile = "bells/"+selectedOption.getAttribute('value')+".mp3";

		if (soundFile) {
			playSound(soundFile);
		}
	});
});