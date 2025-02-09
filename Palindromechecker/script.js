let word = ""

function IsPalindrome(word) {
    let p = 1;
    for (let i = 0; i<word.length; i++){
        if (word[i]!= word[word.length-1-i]){
            p = 0;
            break
        }
    }
    return p
}

document.getElementById("check").addEventListener("click", () => {
    word = document.getElementById("text-input").value;
    console.log("Function is working");
    let p = IsPalindrome(word);
    if (p){
        document.getElementsByClassName("answer")[0].innerHTML = "THe word is a palindrome!"
    }
    else {
        document.getElementsByClassName("answer")[0].innerHTML = "THe word is not palindrome!"
    }

} )


