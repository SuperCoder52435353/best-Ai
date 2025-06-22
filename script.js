// script.js - Expert AI Logic (by Abduraxmon)

const input = document.getElementById("userInput");
const chat = document.getElementById("chat");
const voiceBtn = document.getElementById("voiceStart");
const sendBtn = document.getElementById("sendBtn");
const toggleBtn = document.getElementById("toggleTheme");

let voiceEnabled = true;

// === Foydalanuvchi matnini yuborish ===
function handleUserInput() {
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";

  setTimeout(() => {
    const answer = getAIResponse(question);
    addMessage(answer, "bot");
    if (voiceEnabled) speak(answer);
  }, 400);
}

// === Xabarni interfeysga qo‘shish ===
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// === Ovoz chiqarish ===
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = text.match(/[a-z]/i) ? "en-US" : "uz-UZ";
  utter.rate = 0.95;
  utter.pitch = 1;
  utter.volume = 1;
  window.speechSynthesis.speak(utter);
}

// === Voice Toggle ===
voiceBtn.addEventListener("click", () => {
  voiceEnabled = !voiceEnabled;
  voiceBtn.innerText = voiceEnabled ? "🔊" : "🔇";
});

// === Tugmalar va klaviatura ===
sendBtn.addEventListener("click", handleUserInput);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserInput();
});

// === Dark/Light rejimni almashtirish ===
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
