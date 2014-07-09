var mic, fft;
var spectrum;
var simpleSpectrum = [];
var getInput = false;

function setup() {
  createCanvas(512, 400);
  mic = new AudioIn();
  mic.on();
  fft = new FFT();
  fft.setInput(mic);

  sample = loadSound('sound/The_Strokes_-_You_only_live_once.mp3', soundReady);
}

function soundReady() {
  //sample.rate(1.75);
  sample.loop();
  text('File is ready!  Click to pause.', 50, 10);

  // draw the waveform
  peaks = sample.getPeaks();
  beginShape();
  for (i = 0; i < peaks.length; i++) {
    vertex(map(i, 0, peaks.length, 0, width), map(peaks[i], -1, 1, height, 0));
  }
  endShape();
}

function draw() {
  background(255);

  spectrum = fft.processFreq(.01, 1024);

  if (spectrum[10]) {
    getInput = true;
    simpleSpectrum = [];
    var sum = 0;
    for (j = 0; j < spectrum.length; j++) {
      sum += spectrum[j];
      if (j !== 0 && j % Math.round(spectrum.length / 10) === 0) {
        var average = sum / Math.round(spectrum.length / 10);
        simpleSpectrum.push(average);
        sum = 0;
      }
    }
    console.log(simpleSpectrum.length);
  }

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, height - spectrum[i]);
  }
  endShape();

}