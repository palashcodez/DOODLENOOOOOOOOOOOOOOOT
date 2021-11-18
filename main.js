function preload(){
   classifier=ml5.imageClassifier("DoodleNet");
}

function setup(){
   var canvas= createCanvas(600, 600);
   canvas.center();
   background("White");
   canvas.mouseReleased(classifyCanvas);
   Synth=window.speechSynthesis;
}

function draw(){
   strokeWeight(15);
   stroke("black");
   if(mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
   }
}

function classifyCanvas(){
   classifier.classify(canvas, gotResults);
}

function gotResults(error, results){
   if(error){
      console.error(error);
      console.log("we got a error boss");
   }
   console.log(results);
   document.getElementById("label").innerHTML=results[0].label;
   document.getElementById("Confidence").innerHTML=Math.round(results[0].confidence*100)+"%";
   UtterThis=new SpeechSynthesisUtterance(results[0].label);
   Synth.speak(UtterThis);
}

function Mustclearcanvasasusermusntneeditthatisiftheuserdoesntneedit(){
   background("white");
}

