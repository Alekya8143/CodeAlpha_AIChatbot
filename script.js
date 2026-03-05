function sendMessage(){

let inputBox = document.getElementById("userInput");
let input = inputBox.value.trim().toLowerCase();
let messages = document.getElementById("messages");

if(input === "") return;

messages.innerHTML += `<div class="message user">${input}</div>`;

let reply = "I'm still learning 🤖";

if(input.includes("ai")){
reply = "Artificial Intelligence allows machines to simulate human intelligence.";
}
else if(input.includes("machine learning") || input.includes("ml")){
reply = "Machine learning is a subset of AI that allows computers to learn from data.";
}
else if(input.includes("python")){
reply = "Python was created by Guido van Rossum.";
}
else if(input.includes("react")){
reply = "React is a JavaScript library for building user interfaces.";
}

setTimeout(()=>{
messages.innerHTML += `<div class="message bot">${reply}</div>`;
messages.scrollTop = messages.scrollHeight;
},500);

inputBox.value="";
}

function handleKey(event){
if(event.key === "Enter"){
sendMessage();
}
}