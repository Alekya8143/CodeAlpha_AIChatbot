async function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

if(message === "") return;

let messages = document.getElementById("messages");

messages.innerHTML += `<div class="user">${message}</div>`;

try{

let response = await fetch("https://api.affiliateplus.xyz/api/chatbot?message=" + encodeURIComponent(message) + "&botname=AlekyaBot");

let data = await response.json();

messages.innerHTML += `<div class="bot">${data.message}</div>`;

}catch(error){

messages.innerHTML += `<div class="bot">Sorry, I could not get an answer.</div>`;

}

input.value="";

messages.scrollTop = messages.scrollHeight;

}

function startVoice(){

let recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){

let text = event.results[0][0].transcript;

document.getElementById("userInput").value = text;

sendMessage();

}

recognition.start();

}