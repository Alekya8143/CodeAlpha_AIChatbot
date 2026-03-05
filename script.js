const API_KEY = "AIzaSyCKVFRDFW8PYPSGJNawZgYi5d8eAereSYQ";

async function sendMessage(){

let input = document.getElementById("userInput").value;
let messages = document.getElementById("messages");

messages.innerHTML += `<p><b>You:</b> ${input}</p>`;

let response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[{
parts:[{text:input}]
}]
})
});

let data = await response.json();

let reply = data.candidates[0].content.parts[0].text;

messages.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

document.getElementById("userInput").value="";
messages.scrollTop = messages.scrollHeight;

}