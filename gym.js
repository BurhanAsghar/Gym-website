let trainer = document.getElementById("trainer");
let connect = document.getElementById("connect");
let member = document.getElementById("member");
let program = document.getElementById("program");


trainer.addEventListener("click", function(){

    trainer.style.color="rgb(8, 231, 8)";
    member.style.color="white";
    program.style.color="white";
    connect.style.color="white";
})

member.addEventListener("click", function(){

    trainer.style.color="white";
    member.style.color="rgb(8, 231, 8)";
    program.style.color="white";
    connect.style.color="white";
})

program.addEventListener("click", function(){

    trainer.style.color="white";
    member.style.color="white";
    program.style.color="rgb(8, 231, 8)";
    connect.style.color="white";
})

connect.addEventListener("click", function(){

    trainer.style.color="white";
    member.style.color="white";
    program.style.color="white";
    connect.style.color="rgb(8, 231, 8)";
})

let mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", function(){
    document.querySelector(".join").style.display="block";
})

let join = document.getElementById("join");

join.addEventListener("click", function(){
    let names = document.getElementById("names");
    let number = document.getElementById("number");

    if(names.value == "" && number.value == ""){
        alert("please Enter Names and Number");
    }
    else{
        alert("Thanks For Joining");
        document.querySelector(".join").style.display="none";
    }

})


//slide

let slide = document.querySelectorAll(".slide");
let prev = document.querySelectorAll("prev");
let next = document.querySelectorAll("next");
console.log(slide);

let count = 0;

prev.addEventListener("click", function(){
    count--;
    myFun();
})
next.addEventListener("click", function(){
    count++;
    myFun();
})



function myFun(){
    slide.forEach(function(curImg){
        curImg.style.transform = 'translateX(-${count *114}%)'

    })
}
