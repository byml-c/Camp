// 次方计算
function pow(){
    var m=getNumber(pow_t.value),n=getNumber(pow_p.value);
    if(n==null||m==null){
        show_pow.innerHTML = "NaN";
        document.getElementById("pow_equ").innerHTML = "=";
    }else if((m==0)&&(n==0)){
        show_pow.innerHTML = "NaN";
        document.getElementById("pow_equ").innerHTML = "=";
    }else{
        var ans = Math.pow(m, n);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("pow_equ").innerHTML = "≈";
            }else document.getElementById("pow_equ").innerHTML = "=";
        }else document.getElementById("pow_equ").innerHTML = "=";

        var message = String(roundFun(ans, missure)).split('.');
        show_pow.innerHTML = message.join(".");
    }
}
var pow_t=document.getElementById("pow_t");
var pow_p=document.getElementById("pow_p");
var show_pow=document.getElementById("show_pow");
pow_t.onkeyup = function(){changeWidth(pow_t);pow();}
pow_p.onkeyup = function(){changeWidth(pow_p);pow();}

// 平方根计算
function sqrt(){
    var m=getNumber(sqrt_t.value);
    if(m==null||m<0){
        show_sqrt.innerHTML = "NaN";
        document.getElementById("sqrt_equ").innerHTML = "=";
    }else{
        var ans = Math.sqrt(m);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("sqrt_equ").innerHTML = "≈";
            }else document.getElementById("sqrt_equ").innerHTML = "=";
        }else document.getElementById("sqrt_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
        show_sqrt.innerHTML = message.join(".");
    }
}
var sqrt_t=document.getElementById("sqrt_t");
var show_sqrt=document.getElementById("show_sqrt");
sqrt_t.onkeyup = function(){changeWidth(sqrt_t, "sqrt");sqrt();}

// n次方根计算
function sqr(){
    var n=getNumber(sqr_p.value),m=getNumber(sqr_t.value);
    if(n==null||m==null){
        show_sqr.innerHTML = "NaN";
        document.getElementById("sqr_equ").innerHTML = "=";
    }else if(n==0){
        show_sqr.innerHTML = "NaN";
        document.getElementById("sqr_equ").innerHTML = "=";
    }else{
        var ans = Math.pow(m, 1/n);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("sqr_equ").innerHTML = "≈";
            }else document.getElementById("sqr_equ").innerHTML = "=";
        }else document.getElementById("sqr_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
        show_sqr.innerHTML = message.join(".");
    }
}
var sqr_t=document.getElementById("sqr_t");
var sqr_p=document.getElementById("sqr_p");
var show_sqr=document.getElementById("show_sqr");
var sqr_op=document.getElementById("sqr_op");
sqr_t.onkeyup = function(){changeWidth(sqr_t, "sqr");sqr();}
sqr_p.onkeyup = function(){changeWidth(sqr_p);sqr();}

init(true);
function init(cls){
    if(cls){
        pow_p.value=pow_t.value="";
        sqrt_t.value="";
        sqr_t.value=sqr_p.value="";
    }
    changeWidth(pow_p);
    changeWidth(pow_t);pow();
    changeWidth(sqrt_t);sqrt();
    changeWidth(sqr_p);
    changeWidth(sqr_t);sqr();
}