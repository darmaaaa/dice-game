var acttivePlayer , scores , roundScore ;

//  Тоглогчийн уулжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе 

var isNewGame = true ;
acttivePlayer =0 ;
// Тоглогчдыг цуглуулсан оноог хадгалах хувьсагч 
scores = [0 , 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0 ;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random()*6)+1;

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent= "0" ;
document.getElementById("current-1").textContent= "0";

document.querySelector(".btn-roll").addEventListener("click", function  () { 
    if(isNewGame === true){
        var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display = " block";
    diceDom.src = 'dice-' + diceNumber + ".png";
    
    if (diceNumber !== 1 ){
        roundScore = roundScore + diceNumber ;
        document.getElementById("current-" + acttivePlayer).textContent= roundScore ;
    }
    else{   
        SwitchPlayer();
    }
    }
    else {
        alert("Тоглоом дууссан байна. New game дээр дарна уу")
    }
});
document.querySelector(".btn-hold").addEventListener("click", function(){
    if ( isNewGame){
        // onoo tsugluulah 
    scores[acttivePlayer] = scores[acttivePlayer] + roundScore ;
    document.getElementById("score-"+acttivePlayer).textContent = scores[acttivePlayer];

    if(scores[acttivePlayer] >= 100)
    {
        document.getElementById("name-"+ acttivePlayer).textContent = "WINNER !!!";
        // alert("!!!!!!!!Winner!!!!!!!!")
        isNewGame = false ;
        document.querySelector(".player-"+acttivePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+acttivePlayer+"-panel").classList.remove("active");
    }
    else{
        SwitchPlayer();
    }
    }
    else{
        alert("Тоглоом дууссбн байна..NEW GAME дээр дарна уу !!!");
    }
});

function SwitchPlayer(){
    roundScore= 0;
    document.getElementById("current-" + acttivePlayer).textContent= 0 ;

        
// toglogc solih
        if(acttivePlayer === 0){
            acttivePlayer = 1 ;
        }
        else{
            acttivePlayer= 0;
        }

        

        //active solih
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // shoo alga bolgoh 
        // diceDom.style.display = "none";
}
//  ...................new game...................................

document.querySelector(".btn-new").addEventListener("click", NewGame);

function NewGame(){
    isNewGame = true ; 
acttivePlayer =0 ;
scores = [0 , 0];
roundScore = 0 ;


document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent= "0";
document.getElementById("current-1").textContent= "0";
diceDom.style.display = "none";

document.getElementById("name-0").textContent="Player 1";
document.getElementById("name-1").textContent="Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");


document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}