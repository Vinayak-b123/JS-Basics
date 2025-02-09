let a = Math.random();
let b = Math.random();
let c = Math.random();

let adj1 = "crazy";
let adj2 = "Amazing";
let adj3 = "Fire";

let shop1 = "Engine";
let shop2 = "Foods";
let shop3 = "Garments";

let end1 = "Bros";
let end2 = "Limited";
let end3 = "Hub";

let bname = '';

if (a<0.33) {
    bname = bname+ adj1;
}
else if (a<0.67) {
    bname = bname + adj2;
}
else {
    bname = bname + adj3;
}

bname = bname + " ";
//Shop Name
if (b<0.33) {
    bname = bname+ shop1;
}
else if (b<0.67) {
    bname = bname + shop2;
}
else {
    bname = bname + shop3;
}

bname = bname + " ";
//Another word
if (c<0.33) {
    bname = bname + end1;
}
else if (c<0.67) {
    bname = bname + end2;
}
else {
    bname = bname + end3;
}

console.log(bname)
