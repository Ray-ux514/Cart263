window.onload = getMicrophoneInput;

async function getMicrophoneInput() {
  console.log("here we are ");

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext = new AudioContext(); //using the web audio library
  try {
    //returns a MediaStreamAudioSourceNode.
    let audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    // console.log(audioStream)
    //pass the microphone input to the web audio API
    let microphoneIn = audioContext.createMediaStreamSource(audioStream);
    console.log(microphoneIn);
    const filter = audioContext.createBiquadFilter();
    const analyser = audioContext.createAnalyser();
    // microphone -> filter ->  analyzer->destination
    microphoneIn.connect(filter);
    //use the analyzer object to get some properties ....
    filter.connect(analyser);
    console, log(microphoneIn);
    visualizeTimeAndFreq();
    function visualizeTimeAndFreq() {
      const WIDTH = 500;
      const HEIGHT = 500;
    }
    nalyser.fftSize = 1024; // fft conversion from time to frequency samples
    //console.log (analyser.frequencyBinCount) //half of fft size
    const bufferLength = analyser.fftSize;
    const dataArrayFreq = new Uint8Array(bufferLength); //array

    let drawVisual = requestAnimationFrame(animateVisual);
    function animateVisual() {
      analyser.getByteFrequencyData(dataArrayFreq);
      //each respective frequency goes in its own bin
      //lowest to highest frequency domain

      /* looking for dominant frequencies*/
      /* higher bars === more dominant frequency  (db)*/

      //each bin represents a given frequency
      //get only the first
      for (let i = 0; i < 1; i++) {
        //frequency value in that bin (more dominant will be higher)
        console.log(dataArrayFreq[i]);
      }
      drawVisual = requestAnimationFrame(animateVisual);
    }
  } catch (err) {
    /* handle the error */
    console.log("had an error getting the microphone");
  }
}
