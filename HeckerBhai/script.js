let hecker_arr = ["Initializing Hecking", "Readying Your files", "Protected files detected", "Sending all protected and personal files to server", "Cleaning up traces"];
let interval = NaN;
let r = 1000;

function randomNumber() {
    // Returns random number between 1 and 7
    return Math.floor(Math.random() * 10) + 1;
}

let index = 0;

function dots(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let paras = document.getElementsByTagName("p");
            text = paras[paras.length -1].innerText
            text = text.concat("-")
            paras[paras.length -1].innerText = text;
            resolve("done!")
        }, time) 
    })
}


async function printMsg() {
    clearInterval(interval);

    // Stop if the array is fully processed
    if (index >= hecker_arr.length) {
        document.body.innerHTML += "HEHEHEHEHEHEHEHEHE"
        return;
    }

    let ret = hecker_arr[index];
    index++;
    
    // Create the HTML for the current message
    let html_code = `<p>${ret}</p>`;

    
    // Add the message to the document
    document.body.innerHTML += html_code;

    r = randomNumber() * 1000;

    console.log("Outside")

    
    // Set the interval to print the next message
    interval = setInterval(printMsg, r);

    // Start the dots animation
    let paras = document.getElementsByTagName("p");
    text = paras[paras.length -1].innerText
    text = text.concat("*")
    paras[paras.length -1].innerText = text;
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    await dots(r/11)
    text = paras[paras.length -1].innerText
    text = text.concat("*")
    paras[paras.length -1].innerText = text;

    
    
}

document.addEventListener("DOMContentLoaded", () => {
    interval = setInterval(printMsg, r);
});
