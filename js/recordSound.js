var decodeBuffer = function (buf) {

  var audioContext = window.getAudioContext();
  var newBuffer = audioContext.createBuffer(2, buf[0].length, audioContext.sampleRate);
  for (var channelNum = 0; channelNum < newBuffer.numberOfChannels; channelNum++) {
    var channel = newBuffer.getChannelData(channelNum);
    channel.set(buf[channelNum]);
  }
  //window.setBuffer(newBuffer);
};

var setBuffer = function (buf) {

};

function init() {

  //pre record
  //show something

  //recoding
  //generate the creature
  //fft waveform

  //done recorde
  //store the wave

  // when click
  // fft wave in real time, not the entire waveform?

  //like a bottle wh

  //connect to mic
  // create new fft
  //create new Recorder and mic as the augement

}

function update() {

  //ich stores your voice

  //and then what?
  //nodoby knows!

  //where's your bravery??
  //Show me!
  //Fear? what stops you???

  //store your voice and then you could DJ with it.

  //How?

  //the entire buffer wave form
  //or the peakform? :D
}