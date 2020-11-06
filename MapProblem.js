//a. Roll a die and find the number between 1 to 6
//b. Repeat the Die roll and find the result each time
//c. Store the result in a dictionary
//d. Repeat till any one of the number has reached 10 times
//e. Find the number that reached maximum times and the one that was for minimum times

function checkBreakCond(diceMap){
    let rollCount=0;
    for (var i=1;i<=6;i++){
        rollCount=diceMap.get(i);
        if(rollCount==10) return true;
        return false;
    }
}

let breakFlag=false;
let diceMap=new Map();
for (var i=1;i<=6;i++){
    diceMap.set(i,0);
}
do{
    let roll = Math.floor((Math.random()*6)+1);
    let rollCount=diceMap.get(roll);
    diceMap.set(roll,rollCount++);
    breakFlag=checkBreakCond(diceMap);
}while(!breakFlag);
console.log(roll);