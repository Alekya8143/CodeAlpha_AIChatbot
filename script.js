function sendMessage() {

let input = document.getElementById("userInput");
let message = input.value.toLowerCase();

if(message === "") return;

let messages = document.getElementById("messages");

messages.innerHTML += `<div class="user">${message}</div>`;

let reply = "I am still learning. Please ask another question.";

if(message.includes("hello") || message.includes("hi")){
reply = "Hello! How can I help you today?";
}

else if(message.includes("ai")){
reply = "Artificial Intelligence allows machines to simulate human intelligence.";
}

else if(message.includes("machine learning")){
reply = "Machine Learning is a branch of AI where systems learn from data.";
}

else if(message.includes("python")){
reply = "Python is a popular programming language used in AI and data science.";
}

else if(message.includes("who are you")){
reply = "I am an AI Smart Chatbot created for the CodeAlpha internship project.";
}

messages.innerHTML += `<div class="bot">${reply}</div>`;

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