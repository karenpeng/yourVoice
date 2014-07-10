/*
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
*/
//come on, forget about everything

var pipe = function(point1, point2){
	this.path = new Path({
		fillColor: "red"
	});
	this.path.add(point1, point2);
	this.pointAmount = 2;
};

pipe.prototype.feed = function(point){
	if(point){
		this.path.insertSegments(this.pointNumber-1, point);
		this.pointAmount ++;
	}
};

pipe.prototype.transport = function(){
	for(var i = 1; i<this.path.segments.length-2; i++){
		this.path.segments[i].point.position.x ++;
	}
};

pipe.prototype.signalSpeaker = function(callback){
	if(this.path.segments.length === 2){
		callback(this);
		return;
	}
	for(var i = 1; i<this.path.segments.length-2; i++){
		if(this.path.segments[i].point.position.x > this.path.segments[0].point.posiiton.x){
			this.path.removeSegments(i);
		}
	}
};

var speaker = function(){};
speaker.prototype.speakerUp = function(){
	sample.play();
};


/*
function onMouseDrag(event){
	if (segment) {
		segment.point += event.delta;
		path.smooth();
	} else if (path) {
		path.position += event.delta;
	}
}
*/

var pipes = [];
pipes.push(new pipe(new Point(10,200), new Point(300,200)));