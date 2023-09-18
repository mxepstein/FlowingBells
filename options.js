// Saves options to chrome.storage
const saveOptions = () => {
	const minuteBell = document.getElementById('minuteBell').value;
	const startBell = document.getElementById('startBell').value;
	const endBell = document.getElementById('endBell').value;
	const volume = document.getElementById('volume').value;

	chrome.storage.sync.set({
			chosenMinuteBell: minuteBell,
			chosenStartBell: startBell,
			chosenEndBell: endBell,
			chosenVolume: volume
		},
		() => {
			// Update status to let user know options were saved.
			//SAVE BUTTON WAS REMOVED
			/*
			const status = document.getElementById('status');
			status.textContent = 'Options saved.';
			setTimeout(() => {
				status.textContent = '';
			}, 750);
			*/
			////////
		}
	);
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
	chrome.storage.sync.get({
			chosenMinuteBell: "alternating",
			chosenStartBell: "alarm",
			chosenEndBell: "train",
			chosenVolume: 75
		},
		(items) => {
			document.getElementById('minuteBell').value = items.chosenMinuteBell;
			document.getElementById('startBell').value = items.chosenStartBell;
			document.getElementById('endBell').value = items.chosenEndBell;
			document.getElementById('volume').value = items.chosenVolume;
		}
	);
};

document.addEventListener('DOMContentLoaded', restoreOptions);
//SAVE BUTTON WAS REMOVED document.getElementById('save').addEventListener('click', saveOptions);

document.getElementById('minuteBell').addEventListener('change', saveOptions);
document.getElementById('startBell').addEventListener('change', saveOptions);
document.getElementById('endBell').addEventListener('change', saveOptions);
document.getElementById('volume').addEventListener('change', saveOptions);







///////////////////////////
///Sound on dropdown
const dropdowns = document.querySelectorAll('select');
let audio = null;

// Function to play the selected sound
function playSound(soundFile) {
	  if (audio) {
        audio.pause(); // Pause any currently playing sound
      }
	audio = new Audio(soundFile);
	var vol = document.getElementById('volume').value
	audio.volume=vol/100;
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