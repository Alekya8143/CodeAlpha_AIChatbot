function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

if(message === "") return;

let messages = document.getElementById("messages");

messages.innerHTML += `<div class="user">${message}</div>`;

let reply = "I am still learning. Ask something about AI or Python.";

let text = message.toLowerCase();

if(text.includes("hello") || text.includes("hi")){
reply = "Hello! How can I help you?";
}

else if(text.includes("ai")){
reply = "Artificial Intelligence allows machines to simulate human intelligence.";
}

else if(text.includes("machine learning")){
reply = "Machine learning is a branch of AI where systems learn from data.";
}

else if(text.includes("python")){
reply = "Python is a popular programming language used in AI.";
}

else if(text.includes("who are you")){
reply = "I am an AI chatbot created by Alekya.";
}

messages.innerHTML += `<div class="bot">${reply}</div>`;

input.value = "";

messages.scrollTop = messages.scrollHeight;

}

function startVoice(){

let recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){

let text = event.results[0][0].transcript;

document.getElementById("userInput").value = text;

sendMessage();

};

recognition.start();

}

function toggleDark(){
document.body.classList.toggle("dark");
}