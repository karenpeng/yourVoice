// var mic, fft;
// var spectrum;
// var simpleSpectrum = [];
// var getInput = false;

// function setup() {
//   createCanvas(512, 400);
//   mic = new AudioIn();
//   mic.on();
//   fft = new FFT();
//   fft.setInput(mic);
// }

// function draw() {
//   background(255);

//   spectrum = fft.processFreq(0.01, 1024);

//   if (spectrum[10]) {
//     getInput = true;
//     simpleSpectrum = [];
//     var sum = 0;
//     for (j = 0; j < spectrum.length; j++) {
//       sum += spectrum[j];
//       if (j !== 0 && j % Math.round(spectrum.length / 10) === 0) {
//         var average = sum / Math.round(spectrum.length / 10);
//         simpleSpectrum.push(average);
//         sum = 0;
//       }
//     }
//     console.log(simpleSpectrum.length);
//   }

//   beginShape();
//   for (i = 0; i < spectrum.length; i++) {
//     vertex(i, height - spectrum[i]);
//   }
//   endShape();

// }

// var setBuffer = function(buf){
//     sample.buffer = buf;
//     recorder.clear();
//   };

//   // reset the buffer for this sketch's sample using data from the recorder
// var decodeBuffer = function(buf) {
//     // create an AudioBuffer of the appropriate size and # of channels,
//     // and copy the data from one Float32 buffer to another
//     var audioContext = sketch.getAudioContext();
//     var newBuffer = audioContext.createBuffer(2, buf[0].length, audioContext.sampleRate);
//     for (var channelNum = 0; channelNum < newBuffer.numberOfChannels; channelNum++){
//       var channel = newBuffer.getChannelData(channelNum);
//       channel.set(buf[channelNum]);
//     }
//     sketch.setBuffer(newBuffer);
//   };

//----------------------------------sound--------------------------------------
var mic;
var recorder;
var fft;
var sample;
var amp;
var recording = false;
var recorded = false;
var level;
var waveform;

function setup() {
  mic = new AudioIn();
  mic.on();
  mic.amplitude.toggleNormalize();
  fft = new FFT(0.1, 128);
  fft.setInput(mic);
  recorder = new Recorder(mic);
  sample = new SoundFile();
  //sample = getAudioContext();
  //console.log("ok");
  amp = new Amplitude();
  amp.setInput(mic);
  level = amp.getLevel();
}

$("#record").click(function () {
  recorder.record();
  //if (pipes !== undefined) {
  //pipes[0].
  //}
  recording = true;
  recorded = false;
});

$("#stop").click(function () {
  recorder.stop();
  //sample.setBuffer(recorder.getBuffer(decodeBuffer));
  recording = false;
  recorder.getBuffer(decodeBuffer);
  //start transport
  
  console.log(waveform);
  recorded = true;
  
});

$("#play").click(function () {
  sample.play();
});

var setBuffer = function (buf) {
  sample.buffer = buf;
  //console.log(sample.buffer);
  recorder.clear();
};

// reset the buffer for this sketch's sample using data from the recorder
var decodeBuffer = function (buf) {
  // create an AudioBuffer of the appropriate size and # of channels,
  // and copy the data from one Float32 buffer to another
  var audioContext = getAudioContext();
  var newBuffer = audioContext.createBuffer(2, buf[0].length, audioContext.sampleRate);
  for (var channelNum = 0; channelNum < newBuffer.numberOfChannels; channelNum++) {
    var channel = newBuffer.getChannelData(channelNum);
    channel.set(buf[channelNum]);
    //console.log(buf[channelNum]);
  }
  setBuffer(newBuffer);
  //return newBuffer;
};
