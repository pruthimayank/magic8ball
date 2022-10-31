var result = document.querySelector(".result")
var resultBtn = document.querySelector(".result-button")
var clearBtn = document.querySelector(".clear-button")
var magic8ball = document.querySelector(".magic8ball")

resultBtn.addEventListener("click", ()=>{
    var arr = ["yes definitely","most likely","outlook not so good","as i see it, yes","my reply is no","my sources say no","signs point to yes","you may rely on it","yes","no"]
    
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];
    
    result.innerText = `${item}`
})

clearBtn.addEventListener("click",()=>{
    result.innerText = "cleared"
})


