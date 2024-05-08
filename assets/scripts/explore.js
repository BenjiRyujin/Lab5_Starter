// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeakInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const buttonSpeak = document.querySelector('button');
  const imageFace = document.querySelector('img');
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoiceList(){
    voices = synth.getVoices();

    for (let i=0; i<voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name}
      (${voices[i].lang})`;

      if (voices[i].default){
        option.textContent += " - DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  buttonSpeak.addEventListener('click', function(){
    const utterThis = new SpeechSynthesisUtterance(textToSpeakInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i=0; i<voices.length; i++){
      if (voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }
  synth.speak(utterThis);
  imageFace.src = 'assets/images/smiling-open.png';
  utterThis.onend=function(){
    imageFace.src = 'assets/images/smiling.png';
  };
  });
}

