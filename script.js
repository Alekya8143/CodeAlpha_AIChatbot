async function sendMessage(){

let input=document.getElementById("userInput");
let message=input.value;

let messages=document.getElementById("messages");

messages.innerHTML+=`<div class="user">${message}</div>`;

try{

let response=await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}&botname=AlekyaBot`);

let data=await response.json();

messages.innerHTML+=`<div class="bot">${data.message}</div>`;

}

catch{

messages.innerHTML+=`<div class="bot">Error getting response</div>`;

}

input.value="";

messages.scrollTop=messages.scrollHeight;

}


// voice input

function startVoice(){

let recognition=new webkitSpeechRecognition();

recognition.onresult=function(event){

let text=event.results[0][0].transcript;

document.getElementById("userInput").value=text;

sendMessage();

}

recognition.start();

}


// dark mode

function toggleDark(){

document.body.classList.toggle("dark");

}