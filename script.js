const quotes = [
    "Greatness begins with the courage to start and the will to keep going.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your dreams don’t work unless you do. Take that first step today.",
    "Start small, dream big, work hard, and success will find its way to you.",
    "Believe in yourself and all that you are capable of achieving.",
    "Success is not final, failure is not fatal: It’s the courage to continue.",
    "Your potential is endless. Take risks and trust in your ability to grow.",
    "Be fearless in the pursuit of what sets your soul on fire every day.",
    "Your limitation—it’s only your imagination. Push yourself beyond limits.",
    "Success doesn’t come from what you do occasionally, but what you do consistently.",
    "Opportunities don’t happen, you create them. Stay focused and keep moving forward.",
    "Chase your dreams relentlessly, for every step forward brings you closer to them.",
    "Great things never come from comfort zones. Take risks, grow, and evolve.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Dream it, believe it, achieve it. Every step counts towards success."
];


const quoteE1 = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn")
const copyBtn = document.getElementById("copy-btn")

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteE1.textContent = quotes[randomIndex];
    document.body.style.backgroundColor = generateBgColor();
}

function copytoClipboard() {
    const text = quoteE1.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Quote Copied To Clipboard...");
    });
}

function generateBgColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

generateBtn.addEventListener("click", generateQuote);
copyBtn.addEventListener("click", copytoClipboard);