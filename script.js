// ✅ Elements
var audio = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var clickHereButton = document.getElementById('clickHereButton');
var typingMessage = document.getElementById('typing-message');
var surpriseMessage = document.getElementById('surprise-message');
var finalMessage = document.getElementById('final-message'); 
var backButton = document.getElementById('backButton');
var poemContainer = document.getElementById('poem-container');
var clickHereButton3 = document.getElementById('clickHereButton3');
var poemLines = document.querySelectorAll('.poem-line');
var poemHeading = document.querySelector('.poem-heading');
var closingMessage = document.getElementById('closing-message');
var thankYouText = document.getElementById('thankYouText');
var finalWishText = document.getElementById('finalWishText');
var replayButton = document.getElementById('replayButton');

// ✅ Hide all "Click Here" buttons and Replay button at the start
clickHereButton.style.opacity = "0";
clickHereButton.style.visibility = "hidden";
clickHereButton3.style.opacity = "0";
clickHereButton3.style.visibility = "hidden";
replayButton.style.opacity = "0";
replayButton.style.visibility = "hidden";

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

// ✅ Start Experience (Play Music, Hearts, Typing + Backspace)
playButton.addEventListener('click', () => {
    audio.play();
    setInterval(createHeart, 300);

    playButton.style.opacity = '0';
    setTimeout(() => { 
        playButton.style.display = 'none'; 

        setTimeout(() => {
            typeWriter("Hi Mummy, it's a surprise from your Kannaya💖...", "typing-message", 100, () => {
                typingMessage.style.display = 'none';
                surpriseMessage.style.display = 'block';
                setTimeout(() => { surpriseMessage.style.opacity = '1'; }, 100);
                
                // ✅ Show the first "Click Here" button at the right time
                setTimeout(() => {
                    clickHereButton.style.visibility = 'visible';
                    clickHereButton.style.opacity = '1';
                }, 5000);
            });
        }, 2000);

    }, 2000);
});

// ✅ First Click Here Button - Show Final Message (AFTER Surprise Message)
clickHereButton.addEventListener('click', () => {
    surpriseMessage.style.opacity = '0';
    clickHereButton.style.opacity = '0';

    setTimeout(() => {
        surpriseMessage.style.display = 'none';
        finalMessage.style.display = 'block';
        setTimeout(() => { 
            finalMessage.style.opacity = '1'; 
            finalMessage.classList.add('show-heading'); 
        }, 100);

        // ✅ Show the "Back" button at the correct time
        setTimeout(() => {
            backButton.style.visibility = 'visible';
            backButton.style.opacity = '1';
        }, 9000);
    }, 2000);
});

// ✅ 2nd Click Here Button (Back) - Show Poem & Hide Previous Content
backButton.addEventListener('click', () => {
    const fadeOutElements = [typingMessage, surpriseMessage, finalMessage, playButton, clickHereButton, backButton];

    fadeOutElements.forEach(element => {
        element.style.transition = 'opacity 1.5s ease-out';
        element.style.opacity = '0';
    });

    setTimeout(() => {
        fadeOutElements.forEach(element => element.style.display = 'none');

        // ✅ Show the Poem After Everything Fades Out
        poemContainer.style.display = "block";
        setTimeout(() => {
            poemContainer.style.opacity = "1";
            showPoem();
        }, 100);
    }, 1500);
});

// ✅ Show Poem with Line-by-Line Animation
function showPoem() {
    poemContainer.style.display = "block";
    setTimeout(() => { poemContainer.style.opacity = "1"; }, 500);

    // ✅ Animate Poem Heading
    poemHeading.style.animation = "slideUpFadeIn 1.5s ease-in forwards";

    let delay = 1000;
    poemLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.animation = "slideUpFadeIn 1.5s ease-in forwards";
        }, delay);
        delay += 1000;
    });

    // ✅ Show "Click Here" Button only after the last line appears
    setTimeout(() => {
        clickHereButton3.style.visibility = "visible";
        clickHereButton3.style.opacity = "1";
    }, delay + 1000);
}

// ✅ Third Click Here Button - Show Closing Message & Replay Button
clickHereButton3.addEventListener('click', () => {
    poemContainer.classList.add('fade-out-poem');
    clickHereButton3.classList.add('fade-out-poem');
    poemLines.forEach(line => line.classList.add('fade-out-poem'));
    poemHeading.classList.add('fade-out-poem');

    setTimeout(() => {
        poemContainer.style.display = 'none';
        clickHereButton3.style.display = 'none';

        closingMessage.style.display = 'block';
        setTimeout(() => {
            closingMessage.style.opacity = '1';
            thankYouText.style.opacity = '1';
        }, 500);

        setTimeout(() => {
            thankYouText.style.opacity = '0';
            setTimeout(() => {
                thankYouText.style.display = 'none';
                finalWishText.style.display = 'block';
                setTimeout(() => {
                    finalWishText.style.opacity = '1';

                    setTimeout(() => {
                        replayButton.style.display = 'block';
                        replayButton.style.visibility = 'visible';
                        setTimeout(() => {
                            replayButton.style.opacity = '1';
                        }, 500);
                    }, 5000);

                }, 500);
            }, 4000);
        }, 8000);
    }, 1500);
});

replayButton.addEventListener('click', () => {
    // Select all elements that should fade out
    const fadeOutElements = [closingMessage, thankYouText, finalWishText, replayButton];

    fadeOutElements.forEach(element => {
        element.style.transition = 'opacity 1.5s ease-out';
        element.style.opacity = '0';
    });

    // Wait for the fade-out animation to complete before reloading
    setTimeout(() => {
        location.reload();
    }, 1600);
});


