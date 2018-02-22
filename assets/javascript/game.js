// create jquery document
$( document ).ready(function(){

    //  set up parameters
    var userTotal=0;
// this is where they are starting at with the amount of crystal points.
    var losses = 0;
    var wins = 0;
// this is where the wins/losses start
    var Random = Math.floor(Math.random()*101+19);
    console.log(Random)
//computer choices number
    $('#startingPoints').text(Random);

// the following creates new numbers for the crystals
//Math.floor(Math.random() * ((12-1)+1) + 1);
// num 1 is the name
   num1= Math.floor(Math.random()*12+1);
   num2= Math.floor(Math.random()*12+1);
   num3= Math.floor(Math.random()*12+1);
   num4= Math.floor(Math.random()*12+1);
// the following starts user total at 0
      userTotal= 0;

//sends user totals into html
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    $('#finalTotal').text(userTotal);
      

//create functions to call upon
      function startgame(){
        var Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#startingPoints').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        userTotal = 0
        $('#finalTotal').text(userTotal);
      }

    function win (){
        alert("You Won!");
        wins++;
        $('#UserWins').text(wins);
        startgame();
    }

    function lose(){
        alert ("You lose!");
          losses++;
          $('#UserLosses').text(losses);
          startgame()
        }

//sets up click for crystals
// this will set clicks and the job of each crystal

$('#a').on ('click', function(){
    // your basically telling the computer that each time a button is pressed, add the value for the button to the userTotal
        userTotal = userTotal + num1;
    
        //console logging the the new user total 
        console.log("New userTotal= " + userTotal);
    
        //appending the userTotal to finalTotal is telling the computer to display 
        $('#finalTotal').text(userTotal); 
    
        //sets win/lose conditions it the userTotal which has been defined here is equal to the Random numbered defined earlier, run this.
    // you are using functions you set up earlier in the document
    
    if (userTotal == Random){
              win();
            }
            else if ( userTotal > Random){
              lose();
            }   
      })  
        
      $('#b').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
                  win();
                }
                else if ( userTotal > Random){
                  lose();
                }   
          }) 
          $('#c').on ('click', function(){
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
            if (userTotal == Random){
                      win();
                    }
                    else if ( userTotal > Random){
                      lose();
                    }   
              }) 
              $('#d').on ('click', function(){
                userTotal = userTotal + num1;
                console.log("New userTotal= " + userTotal);
                $('#finalTotal').text(userTotal); 
                if (userTotal == Random){
                          win();
                        }
                        else if ( userTotal > Random){
                          lose();
                        }   
                  }) 
});
