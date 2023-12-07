let speech = new SpeechSynthesisUtterance();
let voice = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voice = window.speechSynthesis.getVoices();
  speech.voice = voice[0];

  voice.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voice[voiceSelect.value];
});

let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
btn.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
