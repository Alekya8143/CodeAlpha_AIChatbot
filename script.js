let responses = {};

fetch("responses.json")
.then(res => res.json())
.then(data => responses = data);

// ENTER key support
document.getElementById("userInput")
.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase().trim();

    if(message === "") return;

    addMessage(message, "user");

    input.value="";

    // typing animation
    let typing = addMessage("Typing...", "bot");

    setTimeout(()=>{
        typing.remove();

        let reply = responses[message] ||
        "I am still learning 🤖. Please ask something else.";

        addMessage(reply, "bot");

    },1000);
}

function addMessage(text, sender){

    let chatbox = document.getElementById("chatbox");

    let div = document.createElement("div");
    div.className = sender;
    div.innerText = text;

    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;

    return div;
}