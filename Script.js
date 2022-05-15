let btn1 = document.getElementById("B1");
let btn2 = document.getElementById("B2");
let btn3 = document.getElementById("B3");
let btn4 = document.getElementById("B4");
let btn5 = document.getElementById("B5");

btn1.addEventListener("click", color1);
btn2.addEventListener('click', color2);
btn3.addEventListener('click', color3);
btn4.addEventListener('click', color4);
btn5.addEventListener('click', color5);


function color1(){
    document.getElementById("D1").style.backgroundColor="burlywood";
}
function color2(){
    document.getElementById('D1').style.backgroundColor='indianred';
}
function color3(){
    document.getElementById('D1').style.backgroundColor='royalblue';
}
function color4(){
    document.getElementById('D1').style.backgroundColor='darkgreen';
}
function color5(){
    document.getElementById('D1').style.backgroundColor='rebeccapurple';
}