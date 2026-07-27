const homebtn=document.querySelector("#homebtn");
const erasbtn=document.querySelector("#erasbtn");
const compbtn=document.querySelector("#compbtn");
const tracksbtn=document.querySelector("#tracksbtn");
const beginbtn=document.querySelector("#beginbtn");
const eraspage=document.querySelector("#eraspage"); 
const comppage=document.querySelector("#comppage");
const trackspage=document.querySelector("#trackspage");
const homepage=document.querySelector("#homepage");

//nav bar
function hideall(){ 
    eraspage.style.display="none"; //hides era page
    comppage.style.display="none"; //hides comp page
    trackspage.style.display="none"; //hides track page
    homepage.style.display="none"; //hides home page
}

homebtn.addEventListener("click",function() {
    hideall(); // hides all first
    homepage.style.display="block"; // shows only home page
});
//when clicked shows eras page
beginbtn.addEventListener("click", function(){
    hideall();
    eraspage.style.display="block"; 
});
//unhides era page
erasbtn.addEventListener("click", function () {
    hideall(); 
    eraspage.style.display="block";
});
compbtn.addEventListener("click", function () {
    hideall(); 
    comppage.style.display="block";
});
tracksbtn.addEventListener("click", function () {
    hideall();
    trackspage.style.display="block";
});
    hideall();
    homepage.style.display = "block"; //hides all the other pages and shows home page first when the site loads

//eras page
const baroque = document.querySelector("#baroque");
const classical = document.querySelector("#classical");
const romantic = document.querySelector("#romantic");
const quiz = document.querySelector("#quiz");
const erasbtnsection=document.querySelector("#erasbtnsection")
const erascontent=document.querySelector("#erascontent")
const baroquecontent=document.querySelector("#baroquecontent")
const classicalcontent=document.querySelector("#classicalcontent")
const romanticcontent=document.querySelector("#romanticcontent")
const quizcontent = document.querySelector("#quizcontent"); 

function hideEra(){  //hides all first when era is first opened 
    baroquecontent.style.display="none";
    classicalcontent.style.display="none"; 
    romanticcontent.style.display="none";
    quizcontent.style.display="none";
}

erasbtnsection.addEventListener("click", function(era) { //event delegation used to detect which era is clicked

    hideEra();

//displays if baroque is clicked
    if (era.target.id == "baroque") {
        baroquecontent.style.display = "block";
    }

//displays if classical is clicked
    else if (era.target.id == "classical") {
        classicalcontent.style.display = "block";
    }

//displays if romantic is clicked 
    else if (era.target.id == "romantic") {
        romanticcontent.style.display = "block";
    }
    
    else if(era.target.id == "quiz"){
        quizcontent.style.display = "block";
    }

});

// show baroque when era is opened
hideEra();
baroquecontent.style.display = "block";

const questions = document.querySelectorAll(".question");
const nextbtn = document.querySelectorAll(".nextbtn");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const tryagain = document.querySelector("#tryagain");
const confetti = document.querySelector("#confetti");


function playconfetti(){
    confetti.style.display = "block";

    let frame = 0;
    const animation = setInterval(function(){
        let column = frame % 8; // determine what frame is it at on the column using remainder after / by 8
        let row = Math.floor(frame / 8); // find row of current frame by dividing my 8 and math.floor rounds the number down */

    confetti.style.backgroundPosition = 
   -(column * 512) + "px " + //moves horizontally to display correct frame
   -(row * 512) + "px"; // moves verically to show correct frame 
    frame++;

    if (frame >= 59){
        clearInterval(animation);
        confetti.style.display = "none";
    }
    }, 25); // every 25 ms
}

let currentquestion = 0; // keep track of the current question
let scores = 0; // leep track of the player score
nextbtn.forEach(function(quiz){ //goes through each next button

    quiz.addEventListener("click", function(){ 
    
    const formdata = new FormData(quizcontent);
    const answer = formdata.get("q" + (currentquestion + 1 )); //starts at q + 0 so +1 to get q1 q2 and so on
        
        if(answer == "correct"){
            scores++; // adds one score if the answer has the value correct
        } 

        questions[currentquestion].classList.remove("active"); // hides the current question (remove active class)
        currentquestion++;  //proceeds to next qn +1

        if(currentquestion < questions.length){  //check if there is any questions left
            questions[currentquestion].classList.add("active"); //adds active class to the current question
        }

        else{ //show result screen if no more question
            result.style.display = "block";
            score.textContent = "You scored " + scores + "/" + questions.length;
            playconfetti();

        }

    }); //click func end
}); //for each end

tryagain.addEventListener("click", function(){

    // resets score and question number
    scores = 0;
    currentquestion = 0;

    // hides the result section
    result.style.display = "none";

    // hides all questions
    questions.forEach(function(question){
        question.classList.remove("active");
    });

    // shows the first question
    questions[0].classList.add("active");

    // clears all selected answers
    document.querySelectorAll("input[type='radio']").forEach(function(radio){
        radio.checked = false;

    });
});

//composer page 
const mozartbtn = document.querySelector("#mozartbtn");
const bachbtn = document.querySelector("#bachbtn");
const chopinbtn = document.querySelector("#chopinbtn");
const mozartc = document.querySelector("#mozartc");
const bachc = document.querySelector("#bachc");
const chopinc = document.querySelector("#chopinc");

function hidecomp(){
    mozartc.style.display="none"; 
    bachc.style.display="none"; 
    chopinc.style.display="none"; 
}
mozartbtn.addEventListener("click",function() {
    hidecomp(); // hides all first
    mozartc.style.display="block"; // shows only home page
});
//when clicked shows eras page
bachbtn.addEventListener("click", function(){
    hidecomp();
    bachc.style.display="block"; 
});
//unhides era page
chopinbtn.addEventListener("click", function () {
    hidecomp(); 
    chopinc.style.display="block";
});
hidecomp();
mozartc.style.display="block";

//trackpage
const player = document.querySelector("#player");
const nowplaying = document.querySelector("#nowplaying");
const canonplay = document.querySelector("#canonplay");
const fiveplay = document.querySelector("#fiveplay");
const gplay = document.querySelector("#gplay");
const pausemusic = document.querySelectorAll(".pausemusic");


canonplay.addEventListener("click", function(){

    player.src = "audio/canon.mp3";
    player.play(); //plays canon in d
    gamestart();
    resetgame();

    nowplaying.textContent = "Now Playing : Canon in D";
    nowplaying.style.color = "#ffda62";
    nowplaying.style.fontWeight = "bold";

});


fiveplay.addEventListener("click", function(){

    player.src = "audio/symphony5.mp3";
    player.play(); //plays symphony 5
    gamestart();
    resetgame();

    nowplaying.textContent = "Now Playing : Symphony No.5 - IV. Allegro"; //changes the now playing text 
    nowplaying.style.color = "#ffda62"; // changes the now playing text colour
    nowplaying.style.fontWeight = "bold"; //bolds the text

});

gplay.addEventListener("click", function(){

    player.src = "audio/ballade1.mp3";
    player.play(); //plays ballade no1
    gamestart();
    resetgame();

    nowplaying.textContent = "Now Playing : Ballade No.1 in G minor";
    nowplaying.style.color = "#ffda62" ;
    nowplaying.style.fontWeight = "bold";
});

pausemusic.forEach(function(button){ // goes through each pause button 
    button.addEventListener("click", function(){
        player.pause(); // pauses song
        nowplaying.textContent = "Paused";
        nowplaying.style.color ="white";
        pausegame();
        resetgame();
    });
});

const note = document.querySelector("#note");
const RGscore = document.querySelector("#RGscore");
const judgement = document.querySelector("#judgement");
const hitleft = document.querySelector("#hitleft");
const hitright = document.querySelector("#hitright");

let drop = 0;
let gamescore = 0;
let lane = 0;
let animation;

note.style.display = "none";
function pausegame(){
    clearInterval(animation); //stops dropping
    gamestarted = false;
    note.style.top = "0px";
    note.style.display = "none";
}

function resetgame(){
    gamescore = 0; //resetr score
    drop = 0; // reset drop
    RGscore.textContent = "Score : 0";
}

let gamestarted = false;
function gamestart(){
    gamescore = 0; // reset score
    drop = 0; // no drop 
    spawnnote();
    dropnote();
    gamestarted = true;
    note.style.display = "block";
    setTimeout(function(){
        pausegame();
    }, 33000); //after 33 seconds pause     
}

function spawnnote(){
    note.style.top = "0px"; //move note back to 0 px
    lane = Math.floor(Math.random()*2); // rounds down the randomly generated number x 2 to produce either a 0 or 1 

    if (lane == 0){
        if(window.innerWidth <= 800){
            note.style.left = "75px";
        } 
        else {
         note.style.left = "100px"; // move to left lane
       }
    }

    else if (lane == 1){
        if(window.innerWidth <= 800){
            note.style.left = "185px";
        } 
        else {
         note.style.left = "250px"; // move to left lane
       }
    }

    drop = 0; // resets position back to the top

}


function dropnote(){
    clearInterval(animation);
    animation = setInterval (function(){ // run this every 20ms
        drop += 10;  // rate of drop 10px
        note.style.top = drop + "px";
        if(drop >= 600){ // over the playing field 
            gamescore--;  // - score    
            RGscore.textContent = "Score : " + gamescore; //changes the score 
            showJudgement("Miss");
            spawnnote();
        }
    },20);
}

document.addEventListener("keydown", function(hit){
    if (hit.key == "a"){ // if a is pressd 
        if(lane == 0){
            if (drop > 450 && drop < 530){ //hit zone 
                gamescore++;  // score +
                RGscore.textContent = "Score : " + gamescore; //changes the score 
                showJudgement("Perfect!");
                spawnnote(); // spawns another note 
            }
        }
    }

    if(hit.key == "d"){
        if(lane == 1){
            if (drop > 450 && drop < 530){ // hit zone
                gamescore++;
                RGscore.textContent = "Score : " + gamescore;
                showJudgement("Perfect!");
                spawnnote();
            }
        }
    }
});

hitleft.addEventListener("click", function(){

        if(lane == 0){
            if (drop > 320 && drop < 400){ //hit zone 
                gamescore++;  // score +
                RGscore.textContent = "Score : " + gamescore; //changes the score 
                showJudgement("Perfect!");
                spawnnote(); // spawns another note 
            }
        }
    });

hitright.addEventListener("click", function(){
        if(lane == 1){
            if (drop > 320 && drop < 400){ // hit zone
                gamescore++;
                RGscore.textContent = "Score : " + gamescore;
                showJudgement("Perfect!");
                spawnnote();
            }
        }
    });



function showJudgement(text){

    judgement.textContent = text;

    if(text == "Perfect!"){
        judgement.style.color = "yellow";
    }
    else if (text == "Miss"){
        judgement.style.color = "red";
    }

    judgement.style.opacity = "1";

    setTimeout(function(){
        judgement.style.opacity = "0";
    },500);
}



