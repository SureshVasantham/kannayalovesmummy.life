// ✅ Elements
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var clickHereButton = document.getElementById('clickHereButton');
var typingMessage = document.getElementById('typing-message');
var surpriseMessage = document.getElementById('surprise-message');
var finalMessage = document.getElementById('final-message'); 
var secondClickHereButton = document.getElementById('secondClickHereButton'); // ✅ Replaced Back Button

// ✅ Fade-in Play Button on Load
window.onload = () => {
    setTimeout(() => {
        playButton.style.opacity = '1';
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

// ✅ First Click Here Button - Fade Out & Show Final Message
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

        // ✅ Ensure the 2nd Click Here Button appears **6 SECONDS** after both sentences are displayed
        setTimeout(() => {
            secondClickHereButton.style.visibility = 'visible';
            secondClickHereButton.style.opacity = '1';
        }, 9000); // ⏳ 9 seconds total (3s sentence fade-in + 6s wait)
    }, 2000);
});




// ✅ Second Click Here Button - Fade Out All Text (But Keep Hearts)
secondClickHereButton.addEventListener('click', () => {
    // Select all text elements (but NOT the floating hearts)
    const allTextElements = document.querySelectorAll("#final-message, #typing-message, #surprise-message, #clickHereButton, #secondClickHereButton");

    // Smoothly fade out all text
    allTextElements.forEach(element => {
        element.style.transition = "opacity 2s ease-out"; // Smooth fade-out
        element.style.opacity = "0";
    });

    // Hide elements after fade-out
    setTimeout(() => {
        allTextElements.forEach(element => {
            element.style.display = "none";
        });
    }, 2000); // Text disappears after 2 seconds
});



