window.onload = function(){
let messages = document.getElementById("messages");

let botMsg = document.createElement("div");
botMsg.className = "bot";
botMsg.innerText = "Hello 👋 I am your AI Smart Chatbot. Ask me anything about AI, technology, coding or programming.";

messages.appendChild(botMsg);
}

function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value.trim();

if(message === "") return;

let messages = document.getElementById("messages");

// User message
let userMsg = document.createElement("div");
userMsg.className = "user";
userMsg.innerText = message;
messages.appendChild(userMsg);


// Typing animation
let typing = document.createElement("div");
typing.className = "bot typing";
typing.innerText = "Typing...";
messages.appendChild(typing);

messages.scrollTop = messages.scrollHeight;


// Bot logic
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


// Bot reply after delay
setTimeout(function(){

typing.remove();

let botMsg = document.createElement("div");
botMsg.className = "bot";
botMsg.innerText = "🤖 " + reply;

messages.appendChild(botMsg);

messages.scrollTop = messages.scrollHeight;

},1000);

input.value = "";

}


// Voice input
function startVoice(){

let recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){

let text = event.results[0][0].transcript;

document.getElementById("userInput").value = text;

sendMessage();

};

recognition.start();

}


// Dark mode
function toggleDark(){
document.body.classList.toggle("dark");
}


// Enter key send message
document.getElementById("userInput").addEventListener("keypress",function(event){
if(event.key === "Enter"){
sendMessage();
}
});


// Clear chat
function clearChat(){
document.getElementById("messages").innerHTML="";
}