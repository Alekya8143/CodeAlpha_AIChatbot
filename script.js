async function sendMessage() {

const input = document.getElementById("userInput");
const message = input.value;

const chatBox = document.getElementById("chatBox");

chatBox.innerHTML += `<div class="user-msg">${message}</div>`;

const response = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}`);

const data = await response.json();

chatBox.innerHTML += `<div class="bot-msg">${data.message}</div>`;

input.value="";
}