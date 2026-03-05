function sendMessage(){

let inputBox=document.getElementById("userInput");
let input=inputBox.value.trim().toLowerCase();
let messages=document.getElementById("messages");

if(input==="") return;

messages.innerHTML+=`<div class="message user">${input}</div>`;

let typing=`<div class="message bot" id="typing">Typing...</div>`;
messages.innerHTML+=typing;
messages.scrollTop=messages.scrollHeight;

setTimeout(()=>{

document.getElementById("typing").remove();

let reply="I'm still learning 🤖";

if(input.includes("ai")){
reply="Artificial Intelligence allows machines to simulate human intelligence.";
}
else if(input.includes("machine learning")||input.includes("ml")){
reply="Machine learning is a subset of AI where systems learn from data.";
}
else if(input.includes("python")){
reply="Python was created by Guido van Rossum.";
}
else if(input.includes("react")){
reply="React is a JavaScript library for building user interfaces.";
}

messages.innerHTML+=`<div class="message bot">${reply}</div>`;
messages.scrollTop=messages.scrollHeight;

},1000);

inputBox.value="";
}

function handleKey(e){
if(e.key==="Enter"){
sendMessage();
}
}

function toggleMode(){
document.getElementById("chatContainer").classList.toggle("dark");
}

function startVoice(){

let recognition=new(window.SpeechRecognition||window.webkitSpeechRecognition)();

recognition.onresult=function(event){
let voiceText=event.results[0][0].transcript;
document.getElementById("userInput").value=voiceText;
sendMessage();
}

recognition.start();
}