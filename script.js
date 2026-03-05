function sendMessage(){

let inputBox = document.getElementById("userInput");
let input = inputBox.value.trim().toLowerCase();
let messages = document.getElementById("messages");

if(input === ""){
return;
}

messages.innerHTML += "<p><b>You:</b> " + input + "</p>";

let reply = "I am still learning 🤖. Please ask another question.";

if(input.includes("ai")){
reply = "Artificial Intelligence allows machines to simulate human intelligence.";
}

else if(input.includes("machine learning") || input.includes("ml")){
reply = "Machine learning is a subset of AI that allows computers to learn from data.";
}

else if(input.includes("deep learning")){
reply = "Deep learning is a neural network based approach in machine learning.";
}

else if(input.includes("python")){
reply = "Python was created by Guido van Rossum.";
}

else if(input.includes("react")){
reply = "React is a JavaScript library used to build user interfaces.";
}

messages.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

inputBox.value = "";
messages.scrollTop = messages.scrollHeight;

}

function handleKey(event){
if(event.key === "Enter"){
sendMessage();
}
}