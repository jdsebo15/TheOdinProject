let guess = 5;
function computerPlay(guess){
    //guess = Math.random*10;
    if (guess < 3.3){
        return "rock"
    } else if (guess >= 3.3 && guess <= 6.6){
        return "paper"
    } else{
        return "scissors"
    }
}
//function rps(cpu,player){

//}
let cpuGuess = computerPlay(guess)