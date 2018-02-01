$(document).ready(function(){

    var randomGuessNumber = 0;
    var randomNumberGen = function(){
        
        randomGuessNumber = Math.floor(Math.random() * (120 - 19) ) + 19;
        return randomGuessNumber;
    
    }
    randomNumberGen();
    $("#random-number").text(randomGuessNumber);
    console.log(randomGuessNumber);

    var wins = 0;
    var loses = 0;
    $("#wins").text(wins);
    $("#loses").text(loses);

    var Gem1_randomNum = 0;
    var Gem2_randomNum = 0;
    var Gem3_randomNum = 0;
    var Gem4_randomNum = 0;
    var randomGemNumGen = function(){ 
        Gem1_randomNum = Math.floor(Math.random() * (12 - 1) ) + 1;
        Gem2_randomNum = Math.floor(Math.random() * (12 - 1) ) + 1;
        Gem3_randomNum = Math.floor(Math.random() * (12 - 1) ) + 1;
        Gem4_randomNum = Math.floor(Math.random() * (12 - 1) ) + 1;
    }
    randomGemNumGen();
    console.log("Gem1: " + Gem1_randomNum);
    console.log("Gem2: " + Gem2_randomNum);
    console.log("Gem3: " + Gem3_randomNum);
    console.log("Gem4: " + Gem4_randomNum);

    var totalScore = 0;

    $("#score_number").text(totalScore);
   
    var GameRestart = function(){
        
        randomNumberGen();
        console.log(randomGuessNumber);
        $("#random-number").text(randomGuessNumber);

        totalScore = 0;
    
        $("#random-number").text(randomGuessNumber);
        randomGemNumGen();
        console.log("Gem1: " + Gem1_randomNum);
        console.log("Gem2: " + Gem2_randomNum);
        console.log("Gem3: " + Gem3_randomNum);
        console.log("Gem4: " + Gem4_randomNum);
        
        $("#score_number").text(totalScore);
    }


    var IfandElsefunction = function(){
        if(totalScore > randomGuessNumber){
            alert("You Lose!!");
            loses++;
            $("#loses").text(loses);
            GameRestart();
        
        }
        else if(totalScore === randomGuessNumber){
            
            alert("You win!!");
            wins++;
            $("#wins").text(wins);
            GameRestart();

        }
    }

    $(".gem1").on("click", function(event){
        totalScore = totalScore + Gem1_randomNum;
        console.log("Total Score: " + totalScore);
        $("#score_number").text(totalScore);
        
        IfandElsefunction();
    
    });

    $(".banana1").on("click", function(event){
        totalScore = totalScore + Gem2_randomNum;
        console.log("Total Score: " + totalScore);
        $("#score_number").text(totalScore);
        
        IfandElsefunction();
        
    });

    $(".gem2").on("click", function(event){
        totalScore = totalScore + Gem3_randomNum;
        console.log("Total Score: " + totalScore);
        $("#score_number").text(totalScore);
        
        IfandElsefunction();
        
    });

    $(".banana2").on("click", function(event){
        totalScore = totalScore + Gem4_randomNum;
        console.log("Total Score: " + totalScore);
        $("#score_number").text(totalScore);
       
        IfandElsefunction();
        
    });

});

