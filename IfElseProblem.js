//Read 5 random 3 digit no and shows max and min
let max=Math.floor(Math.random() * 100);
let min=max
for(a=1;a<=5;a++){
    let a=Math.floor(Math.random() * 1000);
    if(a>max){
        max=a;
    }
    if(a<min){
        min=a;
    }
}
console.log("Max: "+max);
console.log("Min: "+min);

//Coin Flip
let coin=Math.random();
if(coin==0) console.log("Heads");
else console.log("Tails");