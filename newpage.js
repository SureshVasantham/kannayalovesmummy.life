// Smooth Fade-In Effect on Page Load
window.onload = function() {
    document.body.style.opacity = "1";
    createFloatingHearts();
};

// Back to Home Button Click Event
document.getElementById("backButton").addEventListener("click", function() {
    // Show Thank You Message
    let thankYou = document.getElementById("thankYouMessage");
    thankYou.style.display = "block";
    thankYou.style.opacity = "1";
    setTimeout(() => {
        document.body.style.opacity = "0"; // Smooth fade-out effect
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to home page
        }, 1000);
    }, 1500);
});

// Floating Hearts Animation (Copied Exactly from Main Page)
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}
