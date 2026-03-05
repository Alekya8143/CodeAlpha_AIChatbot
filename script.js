function sendMessage() {

let input = document.getElementById("userInput").value.toLowerCase();
let messages = document.getElementById("messages");

messages.innerHTML += "<p><b>You:</b> " + input + "</p>";

let reply = "I am still learning 🤖. Please ask another question.";

if(input.includes("ai")){
reply = "Artificial Intelligence allows machines to simulate human intelligence.";
}

else if(input.includes("machine learning") || input.includes("ml")){
reply = "Machine learning is a subset of AI where systems learn from data.";
}

else if(input.includes("deep learning")){
reply = "Deep learning is a type of machine learning using neural networks.";
}

else if(input.includes("python")){
reply = "Python was created by Guido van Rossum.";
}

else if(input.includes("react")){
reply = "React is a JavaScript library for building user interfaces.";
}

messages.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

document.getElementById("userInput").value = "";
messages.scrollTop = messages.scrollHeight;

}