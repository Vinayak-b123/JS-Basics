let quotes = ["1. All our dreams can come true, if we have the courage to pursue them.",
     "2. The secret of getting ahead is getting started.",
      "3. I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. Twenty-six times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
       "4. Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        "5. The best time to plant a tree was 20 years ago. The second best time is now."];
let quotes2 = [];

function randomQuotesGen(){
    if (quotes.length ==0){
        quotes = quotes2.slice();
    }

    let r = Math.floor(Math.random()*quotes.length);
    console.log(r);
    quotes2.push(quotes[r]);
    console.log(quotes[r]);
    document.querySelector("#random-quote").textContent = quotes[r];
    quotes.splice(r, 1);

}

document.getElementById("rq").addEventListener("click", () => {
    randomQuotesGen();
})