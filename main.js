Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
console.log("ml5 version is ",ml5.version);
function takepic(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML='<img id="capture_face" src="'+pic+'">';
    });
    
}
img_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q9J4i4gC9/model.json",model_ready);
function model_ready(){
    console.log("Model is working!");
}