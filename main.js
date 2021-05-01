function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
camera = createCapture(VIDEO);
camera.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DE-wCbmEE/model.json",Model_Loaded);
}

function draw(){
    image(camera,0,0,300,300);
    classifier.classify(camera,gotResults);
}

function Model_Loaded(){
    console.log("Model Loaded");

}

function gotResults(error,results){
    if (error) {
        console.log(error);
    }
    else{
        console.log(results)
        document.getElementById("result_Object_name").innerHTML = results[0].label;
        document.getElementById("result_Object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}