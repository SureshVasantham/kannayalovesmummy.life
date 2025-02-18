// Get the audio element and button
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');

// Function to handle play/pause toggle
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause Music';
    } else {
        audio.pause();
        playButton.textContent = 'Play Music';
    }
}

// Add event listener to the button
playButton.addEventListener('click', toggleAudio);

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('span'); // Create a new heart element
    heart.innerHTML = "❤️"; // Heart emoji
    heart.classList.add('heart'); // Apply the CSS class

    // Set a random horizontal position across the full width of the screen
    heart.style.left = `${Math.random() * 100}vw`; 

    // Set a random size for the hearts (small to big)
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;

    // Random animation duration (between 3s to 6s)
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; 

    document.body.appendChild(heart); // Add the heart to the page

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Continuously create hearts every 300ms
setInterval(createHeart, 300);

window.onload = () => {
    const surpriseMessage = document.getElementById('surprise-message');
    surpriseMessage.style.display = 'block'; // Display the surprise message after the page loads
};
