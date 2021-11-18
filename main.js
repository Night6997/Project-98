var SpeechRecognition=window.webkitSpeechRecognition;
var RecognitionAI = new SpeechRecognition();

function start(){

    document.getElementById("textarea1").innerHTML="";
    RecognitionAI.start();

}

RecognitionAI.onresult=function(event){

    console.log(event);
    var transcriptValue= event.results[0][0].transcript;
    document.getElementById("textarea1").innerHTML=transcriptValue;
    console.log(transcriptValue);

    if(transcriptValue== "take my selfie"){

        console.log("taking selfie---");
        speak();

    }
}

function speak(){

    var synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(
        function(){

            takeSnapshot();
            save();

        },5000
    );

}

camera = document.getElementById("webcam")
Webcam.set({

    height:250,
    width:320,
    image_format:'jpeg',
    jpeg_quality:90

});

function takeSnapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("output").innerHTML='<img id="ImgSelfie" src="'+data_uri+'"/>';

    });

}

function save(){

    link = document.getElementById("link");
    image = document.getElementById("ImgSelfie").src;
    link.href= image;
    link.click();    
}