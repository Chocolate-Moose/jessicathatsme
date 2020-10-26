const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Jessica", "a lost potato 🥔", "a baker 🍪", "an optimist 😊", "an opportunity-maker 🌟", "constantly looking for challenges 🧐", "interested in cybersecurity ⛏️"];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 1500;

// keep track of current place in word and array
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    // we are still typing the current word
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type, typingDelay);
    }
    // erase the word
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    // delete the last letter
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex --;
        setTimeout(erase, erasingDelay);
    }
    // start writing the next word
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1100);
    }
}

// delay when the text starts typing
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});