
// query for html, 
// add event listen/ modify the html 
// if we need a special return 

const counter = document.querySelector("#counter"); 

const plusBtn = document.querySelector("#plus");

const minusBtn = document.querySelector("#minus");

const likesUl = document.querySelector(".likes"); 

const heartBtn = document.querySelector("#heart"); 

const pauseBtn = document.querySelector("#pause"); 

let isPaused = false; 

const buttons = [plusBtn, minusBtn, heartBtn]

const submitBtn = document.querySelector("#submit"); 
const incrementNum = () => {
    if (!isPaused) { 
        let num = parseInt(counter.innerText) + 1; 
        counter.innerText = num; 
    }
  
}
const startTimer = () => {
    if(!isPaused) {
        setInterval(incrementNum, 1000);
    }
    // setInterval(function, milliseconds)
    // setInterval(incrementNum, 1000)
}
document.addEventListener("DOMContentLoaded", startTimer)
// preventDefault is something you should do to every button even submit 
const incrementClick = (event) => {
    event.preventDefault();
    incrementNum(); 


}
const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1; 
    counter.innerText = num; 
}
const decrementClick = (e) => {
    e.preventDefault(); 
    decrementNum(); 
}; 

plusBtn.addEventListener("click", incrementNum);

minusBtn.addEventListener("click", decrementNum); 

const addLike = (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    let content = `${counter.innerText} likes`
    li.innerText = content; 
    likesUl.append(li); 
}
heartBtn.addEventListener("click", addLike);

const pauseCounter = () => {
    // another thing that we could do si check pause button innertext to 
    // see if it is equal to paused and then do something
    if (isPaused) {
        isPaused = false; 
        pauseBtn.innerText = "pause";
        // call each butto and set disabled = true 
        buttons.forEach((btn) => {
            btn.disabled = false ; 
        });
    } else {
        isPaused = true; 
        pauseBtn.innerText = "resume";
        buttons.forEach((btn) => {
            btn.disabled = true; 
        });
        setTimeout(startTimer, 10000)
        // things get difficult here, because 
        // if you pause something how can you tell 
        // for how many milliseconds it should be paused for 

    }
}
pauseBtn.addEventListener("click", pauseCounter);

const createComment = (event) => {
    let content = submitBtn.parentNode.comment.value; 
    console.log(submitBtn.parentNode.comment.value)
    event.preventDefault(); 
    const listDiv = document.querySelector("#list")
    const paraEle = document.createElement("p");
    paraEle.innerText = content; 
    listDiv.appendChild(paraEle); 
    submitBtn.parentNode.comment.value = " ";
    
}
console.log(submit); 
submitBtn.addEventListener("click", createComment); 