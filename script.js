document.getElementById("btn").addEventListener("click", () => {

    let numRandom = Math.round(Math.random() * 100);

    document.getElementById("num").innerHTML=numRandom;
    
})