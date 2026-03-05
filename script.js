function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

let messages = document.getElementById("messages");

messages.innerHTML += "<p><b>You:</b> " + message + "</p>";

let reply = "I don't understand. Try asking about AI or Python.";

if(message.toLowerCase().includes("ai")){
reply = "Artificial Intelligence allows machines to think and learn.";
}

else if(message.toLowerCase().includes("hello")){
reply = "Hello! How can I help you?";
}

else if(message.toLowerCase().includes("python")){
reply = "Python is a programming language widely used in AI.";
}

messages.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

input.value = "";

}