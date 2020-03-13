// 获取数字
function getNumber(s){
    var rt=null, p=1;
    if(s==null||s=="")return rt;
    if(s.match(/-/g)!=null){
        p=(s.match(/-/g).length&1?-1:1);
        s = s.replace(/-/g, '');
    }
    s = s.replace(/e/g, String(roundFun(Math.E, missure+1)));
    if(s.match(/(\d+\.\d+)\/(\d+\.\d+)/)!=null){
        s = s.match(/(\d+\.\d+)\/(\d+\.\d+)/);
        rt=parseFloat(s[1])/parseFloat(s[2]);
    }else if(s.match(/(\d+\.\d+)\/(\d+)/)!=null){
        s = s.match(/(\d+\.\d+)\/(\d+)/);
        rt=parseFloat(s[1])/parseFloat(s[2]);
    }else if(s.match(/(\d+)\/(\d+\.\d+)/)!=null){
        s = s.match(/(\d+)\/(\d+\.\d+)/);
        rt=parseFloat(s[1])/parseFloat(s[2]);
    }else if(s.match(/\d+\.\d+/)!=null){
        rt=parseFloat(s.match(/\d+\.\d+/));
    }else if(s.match(/\d+\/\d+/)!=null){
        s = s.match(/(\d+)\/(\d+)/);
        rt=parseFloat(s[1])/parseFloat(s[2]);
    }else if(s.match(/\d+/)!=null){
        rt=parseFloat(s.match(/\d+/));
    }
    if(rt!=null)return rt*p;
    else return null;
}

// 保留小数
function roundFun(value, n){
    return Math.round(value*Math.pow(10, n))/Math.pow(10, n);
}

// 宽度自适应设置
function changeWidth(e, flag=""){
    e.scrollLeft = 0;
    e.style.width = e.value.length+"px";
    e.style.width = Math.max(35, e.scrollWidth)+"px";
    if(e.value.length==0){
        e.style.borderBottom = "2px rgba(127, 140, 141,1.0) solid";
        if(flag!="")document.getElementById(flag+"_line").style.top = "0px";
    }else{
        e.style.borderBottom = "none";
        if(flag!="")document.getElementById(flag+"_line").style.top = "-1px";
    }
}

// 精度设定
var missure = 3;
var m=document.getElementById("missure_in");
var s=document.getElementById("showMissure");
function setMissure(){
    m.value = missure;changeWidth(m);
    m.onkeyup = function(){
        var rt=Math.floor(getNumber(m.value));
        if(rt==null){
            missure = rt;
            s.innerHTML = "请检查输入是否合法";
            s.style.bottom = "0px";
            setTimeout(function(){
                s.style.bottom = "30px";
            }, 800);
        }else if(rt<0||rt>15){
            if(rt>15)missure=15;
            else missure=0;
            m.value=missure;

            s.innerHTML = "位数要在[0,15]之间哦";
            s.style.bottom = "0px";
            setTimeout(function(){
                s.style.bottom = "-30px";
            }, 1000);
        }else{
            missure = rt;
            s.innerHTML = "精度已设置成 "+missure+" 位";
            s.style.bottom = "0px";
            setTimeout(function(){
                s.style.bottom = "-30px";
            }, 800);
        }
        init();
    }
}setMissure();