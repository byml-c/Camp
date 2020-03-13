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
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("log_equ").innerHTML = "≈";
            }else document.getElementById("log_equ").innerHTML = "=";
        }else document.getElementById("log_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
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
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("lg_equ").innerHTML = "≈";
            }else document.getElementById("lg_equ").innerHTML = "=";
        }else document.getElementById("lg_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
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
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("ln_equ").innerHTML = "≈";
            }else document.getElementById("ln_equ").innerHTML = "=";
        }else document.getElementById("ln_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
        show_ln.innerHTML = message.join(".");
    }
}
var ln_t=document.getElementById("ln_t");
var show_ln=document.getElementById("show_ln");
ln_t.onkeyup = function(){changeWidth(ln_t);ln();}

// log2计算
function log2(){
    var m=getNumber(log2_t.value);
    if(m==null){
        show_log2.innerHTML = "NaN";
        document.getElementById("log2_equ").innerHTML = "=";
    }else if(m<=0){
        show_log2.innerHTML = "NaN";
        document.getElementById("log2_equ").innerHTML = "=";
    }else{
        var ans = Math.log2(m);
        if(String(ans).split(".").length>1){
            if(String(ans).split(".")[1].length>missure){
                document.getElementById("log2_equ").innerHTML = "≈";
            }else document.getElementById("log2_equ").innerHTML = "=";
        }else document.getElementById("log2_equ").innerHTML = "=";
        
        var message = String(roundFun(ans, missure)).split('.');
        show_log2.innerHTML = message.join(".");
    }
}
var log2_t=document.getElementById("log2_t");
var show_log2=document.getElementById("show_log2");
log2_t.onkeyup = function(){changeWidth(log2_t);log2();}

init(true);
function init(cls){
    if(cls){
        log_t.value=log_d.value="";
        lg_t.value=ln_t.value=log2_t.value="";    
    }
    changeWidth(log_t);
    changeWidth(log_d);log();
    changeWidth(lg_t);lg();
    changeWidth(ln_t);ln();
    changeWidth(log2_t);log2();
}