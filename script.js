// Get the audio element and button
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');

// Initially hide the play button
playButton.style.display = 'none';

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

// Typewriter Effect with backspace removal and delay
function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = ""; // Clear any existing text
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            backspaceWriter(element, text, callback); // Call the backspace function after typing completes
        }
    }, 120); // Faster typing speed (previously 100ms)
}

// Backspace effect to remove the typed message
function backspaceWriter(element, text, callback) {
    let i = text.length;
    const interval = setInterval(() => {
        if (i > 0) {
            element.textContent = element.textContent.slice(0, i - 1); // Remove last character
            i--;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                callback(); // After 1 second, show the surprise message and play button
            }, 1000); // Wait for 1 second
        }
    }, 50); // Faster backspace speed (previously 100ms)
}

// Show the typing message first and then show the surprise message
window.onload = () => {
    const typingMessage = "Hi Mummy, it's a surprise from your Kannaya💖....";
    typeWriter(typingMessage, "typing-message", 50, () => {
        const typingMessageElement = document.getElementById('typing-message');
        typingMessageElement.style.display = 'none'; // Hide the typing message after typing and backspace
        const surpriseMessage = document.getElementById('surprise-message');
        surpriseMessage.style.display = 'block'; // Show the surprise message
        
        // Wait for 3 seconds before showing the play button
        setTimeout(() => {
            playButton.style.display = 'block'; // Show the play button after 3 seconds
        }, 3000); // 3000ms = 3 seconds
    });
};
