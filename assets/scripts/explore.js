// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeakInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const buttonSpeak = document.querySelector('button');
  const imageFace = document.querySelector('img');

  function populateVoiceList(){
    const voices = window.speechSynthesis.getVoices();

    /*    
    console.log(voices);
    for (let i=0; i<voices.length; i++){
      const pick = document.createElement('option');
      //pick.textContent = '${voices[i].name}(${voices[i].lang})';
    }
    */
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
    
    buttonSpeak.addEventListener('click', function(){
      const text = textToSpeakInput.value;
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const selectedVoice = window.speechSynthesis.getVoices().find(voice => voice.Name === selectedVoiceName);
    });
  }

  populateVoiceList();
}