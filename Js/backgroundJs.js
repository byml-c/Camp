window.onload = setBackground;

function setBackground(){
    b = document.getElementsByClassName("background")[0];
    b.style.backgroundPositionX = (document.documentElement.clientWidth/2-(document.documentElement.clientWidth-50)/2+5)+"px";
    b.style.width = (document.documentElement.clientWidth-50)+"px";
}