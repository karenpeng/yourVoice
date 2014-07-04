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

//record it
//process it
//play it

//:)