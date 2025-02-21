// Get elements
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var clickHereButton = document.getElementById('clickHereButton');

// Initially hide buttons
playButton.style.opacity = '0';
playButton.style.visibility = 'hidden';
clickHereButton.style.opacity = '0';
clickHereButton.style.visibility = 'hidden';

// Function to play/pause audio
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause Music';
    } else {
        audio.pause();
        playButton.textContent = 'Play Music';
    }
}

// Event listener for Play Music button
playButton.addEventListener('click', toggleAudio);

// Event listener for Click Here button (redirects to another page)
clickHereButton.addEventListener('click', function() {
    window.location.href = 'newpage.html';
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = "❤️";
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// Continuously create hearts every 300ms
setInterval(createHeart, 300);

// Typing Effect with backspace
function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => backspaceWriter(element, text, callback), 1200);
        }
    }, speed);
}

// Backspace Effect
function backspaceWriter(element, text, callback) {
    let i = text.length;
    const interval = setInterval(() => {
        if (i > 0) {
            element.textContent = element.textContent.slice(0, i - 1);
            i--;
        } else {
            clearInterval(interval);
            setTimeout(callback, 1000);
        }
    }, 50);
}

// Show Typing Effect, then Show Buttons in Order
window.onload = () => {
    typeWriter("Hi Mummy, it's a surprise from your Kannaya💖....", "typing-message", 100, () => {
        document.getElementById('typing-message').style.display = 'none';
        document.getElementById('surprise-message').style.display = 'block';

        setTimeout(() => {
            playButton.style.visibility = 'visible';
            playButton.style.opacity = '1';
            setTimeout(() => {
                clickHereButton.style.visibility = 'visible';
                clickHereButton.style.opacity = '1';
            }, 6000);
        }, 3000);
    });
};
