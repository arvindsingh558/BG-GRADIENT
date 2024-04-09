let btn1=document.getElementById("myButton");
let btn2=document.getElementById("myButton2");
let copydiv=document.querySelector(".code");
let rgb1="#35e117";
let rgb2="#f5f10d";

const hexValues =()=>{
    let myHexValues="0123456789abcdef";
    let colors="#"
    for(let i = 0; i < 6; i++){
        colors=colors+myHexValues[Math.floor(Math.random()*16)];
    }
    return colors;
};

const handleButton1 = ()=>{
    rgb1=hexValues();
    console.log(rgb1);
    btn1.innerText=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copydiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};
const handleButton2 = ()=>{
    rgb2=hexValues();
    console.log(rgb2);
    btn2.innerText=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copydiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);

copydiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copydiv.innerText);
})