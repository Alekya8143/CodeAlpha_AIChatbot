let faqData = [
  {
    question: "what is ai",
    answer: "Artificial Intelligence allows machines to simulate human intelligence."
  },
  {
    question: "what is machine learning",
    answer: "Machine learning is a subset of AI that enables systems to learn from data."
  },
  {
    question: "what is deep learning",
    answer: "Deep learning is a branch of machine learning based on neural networks."
  },
  {
    question: "who created python",
    answer: "Python was created by Guido van Rossum in 1991."
  },
  {
    question: "what is react",
    answer: "React is a JavaScript library used to build user interfaces."
  }
];

function sendMessage() {

let input = document.getElementById("userInput").value.toLowerCase();
let messages = document.getElementById("messages");

messages.innerHTML += "<p><b>You:</b> " + input + "</p>";

let bestAnswer = "I am still learning 🤖. Please ask another question.";

faqData.forEach(item => {
if(input.includes(item.question)){
bestAnswer = item.answer;
}
});

messages.innerHTML += "<p><b>Bot:</b> " + bestAnswer + "</p>";

document.getElementById("userInput").value = "";
messages.scrollTop = messages.scrollHeight;

}