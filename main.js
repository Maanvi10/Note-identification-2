function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fa0F2NHsi/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}