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



  /*
  function populateVoiceList(){
    const voices = window.speechSynthesis.getVoices();
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }
  */
    
  
  buttonSpeak.addEventListener('click', function(){
    const text = textToSpeakInput.value;
    const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const selectedVoice = window.speechSynthesis.getVoices().find(voice => voice.name === selectedVoiceName);

    if (text && selectedVoice){
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);

      imageFace.src = 'assets/images/open-mouth.png';
      utterance.onend = function() {
        imageFace.src = 'assets/images/smiling.png';
      };
    }
  });
}

