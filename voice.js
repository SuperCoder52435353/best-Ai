// voice.js – Expert AI Voice Module (by Abduraxmon)

let recognitionActive = false;
let recognition;

const voiceBtn = document.getElementById("voiceStart");
const input = document.getElementById("userInput");

// Ovoz funksiyasini ishga tushirish
function initVoiceRecognition() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Sizning brauzeringiz ovoz tanishni qo‘llab-quvvatlamaydi.");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.lang = "uz-UZ";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    handleUserInput(); // Asosiy AI funksiyani chaqiramiz
  };

  recognition.onerror = function () {
    alert("Ovoz tanishda xatolik yuz berdi.");
    voiceBtn.innerText = "🎤";
    recognitionActive = false;
  };

  recognition.onend = function () {
    voiceBtn.innerText = "🎤";
    recognitionActive = false;
  };
}

// Tugmani bosganda ishga tushadi yoki to‘xtaydi
voiceBtn.addEventListener("click", () => {
  if (!recognition) initVoiceRecognition();

  if (!recognitionActive) {
    recognition.start();
    recognitionActive = true;
    voiceBtn.innerText = "🎙️ Tinglanmoqda...";
  } else {
    recognition.stop();
    recognitionActive = false;
    voiceBtn.innerText = "🎤";
  }
});
