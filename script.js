// ✅ Elements
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var clickHereButton = document.getElementById('clickHereButton');
var typingMessage = document.getElementById('typing-message');
var surpriseMessage = document.getElementById('surprise-message');
var finalMessage = document.getElementById('final-message'); 
var backButton = document.getElementById('backButton');

// ✅ Fade-in Play Button on Load
window.onload = () => {
    setTimeout(() => {
        playButton.style.opacity = '1';
        playButton.style.visibility = 'visible';
    }, 500);
};

// ✅ Floating Hearts Animation
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

// ✅ Typing & Backspace Animation
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

// ✅ Backspace Effect
function backspaceWriter(element, text, callback) {
    let i = text.length;
    const interval = setInterval(() => {
        if (i > 0) {
            element.textContent = element.textContent.slice(0, -1);
            i--;
        } else {
            clearInterval(interval);
            setTimeout(callback, 1000);
        }
    }, 50);
}

// ✅ Start Experience (Play Music, Hearts, Typing)
playButton.addEventListener('click', () => {
    audio.play();
    setInterval(createHeart, 300);

    playButton.style.opacity = '0';
    setTimeout(() => { 
        playButton.style.display = 'none'; 

        setTimeout(() => {
            typeWriter("Hi Mummy, it's a surprise from your Kannaya💖....", "typing-message", 100, () => {
                typingMessage.style.display = 'none';
                surpriseMessage.style.display = 'block';
                setTimeout(() => { surpriseMessage.style.opacity = '1'; }, 100);
                
                setTimeout(() => {
                    clickHereButton.style.visibility = 'visible';
                    clickHereButton.style.opacity = '1';
                }, 6000);
            });
        }, 2000);

    }, 2000);
});

// ✅ Click Here Button - Show Final Message & Delay 2nd Click Here Button
clickHereButton.addEventListener('click', () => {
    typingMessage.style.opacity = '0';
    surpriseMessage.style.opacity = '0';
    clickHereButton.style.opacity = '0';

    setTimeout(() => {
        finalMessage.style.display = 'block'; 
        setTimeout(() => { 
            finalMessage.style.opacity = '1'; 
            finalMessage.classList.add('show-heading'); 
        }, 100);

        // ✅ Ensure 2nd Click Here button appears *exactly* after 6 seconds
        setTimeout(() => {
            backButton.style.visibility = 'visible';
            backButton.style.opacity = '1';
        }, 12000);
    }, 2000);
});

// ✅ 2nd Click Here Button - Smooth Fade Out (Text Only)
backButton.addEventListener('click', () => {
    const fadeOutElements = [typingMessage, surpriseMessage, finalMessage, playButton, clickHereButton, backButton];

    fadeOutElements.forEach(element => {
        element.style.transition = 'opacity 1.5s ease-out';
        element.style.opacity = '0';
    });

    setTimeout(() => {
        fadeOutElements.forEach(element => element.style.display = 'none');
    }, 1500);
});
