const messages = [
    "Are you sure?",
    "Are you really sure???",
    "I know you want to",
    "Come on, please? :<<<",
    "Just think about it!",
    "Don't say no? Look at the cute cat with a flower.",
    "Please?",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "ifyes.html";
}
