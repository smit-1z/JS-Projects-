// set initial count 
let count =10;

// select value and buttons 

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')){
        count--;
    }
    else if (styles.contains('increase')){
        count++;
    }
    else if (styles.contains('reset')){
        count = 10;
    }

    if(count >10){
        value.style.color = "green";
    }

    if(count < 10){
        value.style.color = "red";
    }
    if(count == 10){
        value.style.color = "black";
    }
    value.textContent = count;
});
});