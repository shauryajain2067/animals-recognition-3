function startRec(){
 navigator.mediaDevices.getUserMedia({audio:true})
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jWvLznEu7/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error("error");
    }
    else{
        random_g=Math.floor(Math.random()*255 +1);
        random_r=Math.floor(Math.random()*255 +1);
        random_b=Math.floor(Math.random()*255 +1);

        document.getElementById("number_detect").innerHTML="I CAN HEAR - " + results[0].label;
        document.getElementById("class").innerHTML="ACCURACY - " + (results[0].confidence).toFixed(2) + "%";
        document.getElementById("number_detect").style.color="rgb("+random_g+","+random_b+","+random_r+")";
        document.getElementById("class").style.color="rgb("+random_g+","+random_b+","+random_r+")";

        img=document.getElementById("im1");
    }
    if(results[0].label == "DOG BARKING"){
img.src="th.jpg";
    }
    else if(results[0].label == "cat"){
        img.src="cat.jpg";
    }
    else if(results[0].label == "cow"){
img.src="cow.jfif";
    }
    else{
        img.src="th.jfif";
    }
}
function orpmai(){
    thisfunction(issus)
    
}