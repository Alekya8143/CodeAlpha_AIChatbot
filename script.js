async function sendMessage(){

let input=document.getElementById("userInput");
let message=input.value;

let messages=document.getElementById("messages");

messages.innerHTML+=`<div class="user">You: ${message}</div><br>`;

try{

let response=await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}&botname=AIbot`);

let data=await response.json();

messages.innerHTML+=`<div class="bot">Bot: ${data.message}</div><br>`;

}

catch{

messages.innerHTML+=`<div class="bot">Bot: Error getting response</div><br>`;

}

input.value="";

}