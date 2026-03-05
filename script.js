function sendMessage(){

let input=document.getElementById("userInput");
let message=input.value.toLowerCase();

if(message==="") return;

let messages=document.getElementById("messages");

messages.innerHTML+=`<div class="user">${message}</div>`;

let reply="I am still learning. Ask something about AI, Python, or technology.";

if(message.includes("hello") || message.includes("hi")){
reply="Hello! How can I help you today?";
}

else if(message.includes("ai")){
reply="Artificial Intelligence allows machines to simulate human intelligence.";
}

else if(message.includes("machine learning")){
reply="Machine learning is a subset of AI where computers learn from data.";
}

else if(message.includes("python")){
reply="Python is a powerful programming language widely used in AI and data science.";
}

else if(message.includes("who are you")){
reply="I am an AI Smart Chatbot created by Alekya for the CodeAlpha Internship.";
}

messages.innerHTML+=`<div class="bot">${reply}</div>`;

input.value="";

messages.scrollTop=messages.scrollHeight;

}


function startVoice(){

let recognition=new webkitSpeechRecognition();

recognition.onresult=function(event){

let text=event.results[0][0].transcript;

document.getElementById("userInput").value=text;

sendMessage();

}

recognition.start();

}


function toggleDark(){
document.body.classList.toggle("dark");
}