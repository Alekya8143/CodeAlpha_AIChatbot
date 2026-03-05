async function sendMessage() {

const input = document.getElementById("userInput");
const message = input.value;

const chatBox = document.getElementById("chatBox");

chatBox.innerHTML += `<div class="user-msg"> ${message} </div>`;

try {

const response = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}&botname=AlekyaBot&ownername=Alekya`);

const data = await response.json();

chatBox.innerHTML += `<div class="bot-msg"> ${data.message} </div>`;

}

catch{

chatBox.innerHTML += `<div class="bot-msg">Error getting response</div>`;

}

input.value="";
chatBox.scrollTop = chatBox.scrollHeight;

}