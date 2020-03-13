
function StartLog(){
    var m = document.getElementById("menu-box");
    m.style.right = "-100%";
    var f = document.getElementById("log-function");
    f.style.right = "0px";
    var t = document.getElementById("title");
    t.innerHTML = "对<span class=\"block\"></span>数<span class=\"block\"></span>计<span class=\"block\"></span>算";

    log_t.value = log_d.value = lg_t.value = ln_t.value = "";
    changeWidth(lg_t);lg();
    changeWidth(ln_t);ln();
    changeWidth(log_d);
    changeWidth(log_t);log();
}
function CloseLog(){
    var m = document.getElementById("menu-box");
    m.style.right = "0px";
    var f = document.getElementById("log-function");
    f.style.right = "-100%";
    var t = document.getElementById("title");
    t.innerHTML = "数<span class=\"block\"></span>学<span class=\"block\"></span>计<span class=\"block\"></span>算";
}
// log计算
function log(){
    var n=getNumber(log_d.value), m=getNumber(log_t.value);
    if(n==null||m==null){
        show_log.innerHTML = "NaN";
        document.getElementById("log_equ").innerHTML = "=";
    }else if(n<=0||n==1||m<=0){
        show_log.innerHTML = "NaN";
        document.getElementById("log_equ").innerHTML = "=";
    }else{
        var ans = Math.log10(m)/Math.log10(n);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1]>5){
                document.getElementById("log_equ").innerHTML = "≈";
            }else document.getElementById("log_equ").innerHTML = "=";
        }else document.getElementById("log_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
        show_log.innerHTML = message.join(".");
    }
}
var log_d=document.getElementById("log_d");
var log_t=document.getElementById("log_t");
var show_log=document.getElementById("show_log");
log_d.onkeyup = function(){changeWidth(log_d);log();}
log_t.onkeyup = function(){changeWidth(log_t);log();}

// lg计算
function lg(){
    var m=getNumber(lg_t.value);
    if(m==null){
        show_lg.innerHTML = "NaN";
        document.getElementById("lg_equ").innerHTML = "=";
    }else if(m<=0){
        show_lg.innerHTML = "NaN";
        document.getElementById("lg_equ").innerHTML = "=";
    }else{
        var ans = Math.log10(m);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1]>5){
                document.getElementById("lg_equ").innerHTML = "≈";
            }else document.getElementById("lg_equ").innerHTML = "=";
        }else document.getElementById("lg_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
        show_lg.innerHTML = message.join(".");
    }
}
var lg_t=document.getElementById("lg_t");
var show_lg=document.getElementById("show_lg");
lg_t.onkeyup = function(){changeWidth(lg_t);lg();}

// ln计算
function ln(){
    var m=getNumber(ln_t.value);
    if(m==null){
        show_ln.innerHTML = "NaN";
        document.getElementById("ln_equ").innerHTML = "=";
    }else if(m<=0){
        show_ln.innerHTML = "NaN";
        document.getElementById("ln_equ").innerHTML = "=";
    }else{
        var ans = Math.log(m);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1]>5){
                document.getElementById("ln_equ").innerHTML = "≈";
            }else document.getElementById("ln_equ").innerHTML = "=";
        }else document.getElementById("ln_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
        show_ln.innerHTML = message.join(".");
    }
}
var ln_t=document.getElementById("ln_t");
var show_ln=document.getElementById("show_ln");
ln_t.onkeyup = function(){changeWidth(ln_t);ln();}

function StartPow(){
    var m = document.getElementById("menu-box");
    m.style.right = "-100%";
    var f = document.getElementById("pow-function");
    f.style.right = "0px";
    var t = document.getElementById("title");
    t.innerHTML = "指<span class=\"block\"></span>数<span class=\"block\"></span>计<span class=\"block\"></span>算";

    pow_t.value = pow_p.value = sqrt_t.value = sqr_t.value = sqr_p.value = "";
    changeWidth(pow_t);
    changeWidth(pow_p);pow();
    changeWidth(sqrt_t, "sqrt");sqrt();
    changeWidth(sqr_t, "sqr");
    changeWidth(sqr_p);sqr();
}
function ClosePow(){
    var m = document.getElementById("menu-box");
    m.style.right = "0px";
    var f = document.getElementById("pow-function");
    f.style.right = "-100%";
    var t = document.getElementById("title");
    t.innerHTML = "数<span class=\"block\"></span>学<span class=\"block\"></span>计<span class=\"block\"></span>算";
}
// 次方计算
function pow(){
    var n=getNumber(pow_t.value),m=getNumber(pow_p.value);
    if(n==null||m==null){
        show_pow.innerHTML = "NaN";
        document.getElementById("pow_equ").innerHTML = "=";
    }else if(m==0&&n==0){
        show_pow.innerHTML = "NaN";
        document.getElementById("pow_equ").innerHTML = "=";
    }else{
        var ans = Math.pow(n, m);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1]>5){
                document.getElementById("pow_equ").innerHTML = "≈";
            }else document.getElementById("pow_equ").innerHTML = "=";
        }else document.getElementById("pow_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
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
            if(String(ans).split(".")[1]>5){
                document.getElementById("sqrt_equ").innerHTML = "≈";
            }else document.getElementById("sqrt_equ").innerHTML = "=";
        }else document.getElementById("sqrt_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
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
            if(String(ans).split(".")[1]>5){
                document.getElementById("sqr_equ").innerHTML = "≈";
            }else document.getElementById("sqr_equ").innerHTML = "=";
        }else document.getElementById("sqr_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, 5)).split('.');
        show_sqr.innerHTML = message.join(".");
    }
}
var sqr_t=document.getElementById("sqr_t");
var sqr_p=document.getElementById("sqr_p");
var show_sqr=document.getElementById("show_sqr");
var sqr_op=document.getElementById("sqr_op");
sqr_t.onkeyup = function(){changeWidth(sqr_t, "sqr");sqr();}
sqr_p.onkeyup = function(){changeWidth(sqr_p);sqr();}

init();
function init(){
    
}