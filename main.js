var SpeechRecognition=window.webkitSpeechRecognition;
var RecognitionAI = new SpeechRecognition();

function start(){

    document.getElementById("textarea1").innerHTML="";
    RecognitionAI.start();

}

RecognitionAI.onresult()=function(event){

    console.log(event);
    var transcriptValue= event.results[0][0].transcript;
    document.getElementById("textarea1").innerHTML=transcriptValue;
    console.log(transcriptValue);


}