const faq = [
  {
    question: "what is ai",
    answer: "Artificial Intelligence allows machines to simulate human intelligence."
  },
  {
    question: "what is machine learning",
    answer: "Machine learning is a subset of AI where systems learn from data."
  },
  {
    question: "what is deep learning",
    answer: "Deep learning is a type of machine learning that uses neural networks."
  },
  {
    question: "who created python",
    answer: "Python was created by Guido van Rossum."
  },
  {
    question: "what is react",
    answer: "React is a JavaScript library for building user interfaces."
  }
];

function sendMessage() {

let input = document.getElementById("userInput").value.toLowerCase();
let messages = document.getElementById("messages");

messages.innerHTML += `<p><b>You:</b> ${input}</p>`;

let response = "I am still learning 🤖. Please ask another question.";

for(let i = 0; i < faq.length; i++){

if(input.includes(faq[i].question)){
response = faq[i].answer;
break;
}

}

messages.innerHTML += `<p><b>Bot:</b> ${response}</p>`;

document.getElementById("userInput").value="";
messages.scrollTop = messages.scrollHeight;

}