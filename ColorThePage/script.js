
document.querySelector("#Green").addEventListener("click",()=>{
     document.body.style.backgroundColor = "Green";
})

document.querySelector("#Red").addEventListener("click",()=>{
    document.body.style.backgroundColor = "red";
})

document.querySelector("#Blue").addEventListener("click",()=>{
    document.body.style.backgroundColor = "lightblue";
})


function randColorGen(){
    r = Math.random()*255;
    g = Math.random()*255;
    b = Math.random()*255;
    return `rgb(${r}, ${g}, ${b})`
}
document.querySelector("#Random").addEventListener("click",()=>{
    document.body.style.backgroundColor = randColorGen();
})