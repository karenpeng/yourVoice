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

window.onload = function () {
		var canvas = document.getElementById('canvas');
		paper.setup(canvas);
		init();
		paper.view.onFrame = function(event){
			update();
		}
		paper.view.draw();
};

var pipe = function (point1, point2) {
		this.path = new paper.Path({
				strokeColor: "red"
		});
		this.path.add(point1, point2);
		this.pointAmount = 2;
};

pipe.prototype.feed = function (pointY) {
		if (pointY!==undefined) {
				this.path.removeSegments(this.path.segments.length-1);
				this.path.insert(this.pointAmount - 1, new paper.Point(10, pointY));
				this.path.add(new paper.Point(10, 200));
				console.log("setting", this.pointAmount - 2);
				this.pointAmount++;
		}
		/*else{
			for (var i = 0; i< waveform.length; i++){
        //sketch.vertex(map(i, 0, waveform.length, 0, sketch.width), map(waveform[i], -1, 1, sketch.height, 0));
      	waveform[i]
      }
		}*/
};

pipe.prototype.transport = function () {
		for (var i = 1; i < this.path.segments.length - 2; i++) {
				this.path.segments[i].point.x++;
		}
};

pipe.prototype.signalSpeaker = function (callback) {
		if (this.path.segments.length === 2) {
				callback(this);
				return;
		}
		for (var i = 1; i < this.path.segments.length - 2; i++) {
				if (this.path.segments[i].point.position.x > this.path.segments[0].point.posiiton
						.x) {
						this.path.removeSegments(i);
				}
		}
};

whatever = function(){
	this.radius = 40;
	this.path = new paper.Path.Circle(new paper.Point(100,100), this.radius);
	this.path.fillColor = "blue";
	this.countDown = 1200;
};
whatever.prototype.update = function(level){
	//this.radius = amp * 10;
	//this.path.scale(this.radius);
	//this.path.scale(1/this.radius);
	this.path.fillColor = new paper.Color(255,255,0, level);
	this.countDown --;
};

var speaker = function () {};
speaker.prototype.speakerUp = function () {
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
var p, w;
var counter = 0;
var i = 0;
function init() {
		p = new pipe(new paper.Point(1300, 200), new paper.Point(10, 200));
		w = new whatever();
}

function update() {
	counter ++;
	if(recording){
		w.update(amp.getLevel() * 10);
		//console.log("updating blue ball with alpha of " + amp.getLevel() * 50);
	}
	if (sample && sample.isLoaded()){
    waveform = sample.getPeaks(1600);
    //console.log("loaded!");

	if(recorded){
i++;
		//for (var i = 0; i< waveform.length; i++){
        //sketch.vertex(map(i, 0, waveform.length, 0, sketch.width), map(waveform[i], -1, 1, sketch.height, 0));
      if( i < waveform.length){
     		p.feed(waveform[i]*300 +200);
     		p.transport();
      }else{
      	console.log("its time to speakUp!")
      }
    // }

    }

		
	}
}