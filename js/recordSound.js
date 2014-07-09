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

//model



var inputModule = function(mic){
	this.mode;
	return sound;
}



var outputModule = function(sound){
	sound.connect(speaker);
}

var view
 
var 

//viewer
sketch

function sketch(){}
sketch.prototype.draw = function(buffer){

}




//controller
var mic, fft, recorder;
function init(){
	mic = new AudioIn();
	mic.on();
	mic.amplitude.toggleNormalize();
	fft = new FFT(.1, 128);
	fft.setInput(mic);
	recorder = new Recorder(mic);
}

function update(){

}




//----the normal way------
var renderable = function(){
	this.status = new Object();

}
renderable.prototype.update = function(){

}
renderable.prototype.draw = function(){

}

var microphone = function(){

}

microphone.prototype = Object.create(renderable.prototype);
microphone.prototype.constructor = microphone;

microphone.prototype.update = function(){
	if(this.recording){

	}else{

	}
}


//
var inputModule = function(){
	this.record = false;
	this.recordCounter = 0;
}

inputModule.prototype.update = function(){
	if(this.record){

		if(this.recordCounter<30){
			recorder.record();
			//draw the fft waveform
		}else{
			this.record = false;
		}
	}else{
		//output the stream??
	}
}

//----
var outputModule = function(){
	this.play = false;
};

outputModule.prototype.update = function(sound){
	if(sound){
		//connect to the speaker
		sound.connect.speaker();
	}else{
		//do nothing
	}
}

var effectModule = function(sound){
	//
}
	
}

//come on, forget about everything
var mic;
var pipe;
var speaker;

var pipe = function(){
	this.path = new Path();
}
pipe.prototype.transport = function(point){
	if(point){
		this.path.addSegments(point);
	}
	this.path.segments.x ++;
}
pipe.prototype.signalSpeaker = function(speakerLoc){
	
}

var speaker = new Object();
speaker.prototype.speakerUp = function(point){
	if(point0 reaches the speaker){
		recordeBuffer.play();
	}
}