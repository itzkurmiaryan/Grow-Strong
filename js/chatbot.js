// CHATBOT FUNCTION
const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

chatToggle.onclick = () => {
  chatbox.style.display = "flex";
};

closeChat.onclick = () => {
  chatbox.style.display = "none";
};

sendBtn.onclick = sendMessage;
chatInput.addEventListener("keypress", function(e){
  if(e.key === "Enter") sendMessage();
});

function sendMessage(){
  const message = chatInput.value.trim();
  if(message === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.innerText = message;
  chatBody.appendChild(userMsg);

  chatInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Bot reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.innerText = getBotReply(message);
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

function getBotReply(msg){
  msg = msg.toLowerCase();

  if(msg.includes("price")){
    return "Please visit our Products page or contact us for latest pricing.";
  }
  else if(msg.includes("hdpe")){
    return "We provide high quality HDPE Lapeta Pipes for irrigation systems.";
  }
  else if(msg.includes("contact")){
    return "You can contact us at +91 99999 99999 or fill the contact form.";
  }
  else{
    return "Thank you for your message. Our team will assist you shortly.";
  }
}