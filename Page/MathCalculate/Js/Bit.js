function ToBit(num){
    var bit_num = "";
    while(num){
        bit_num = ((num&1)?"1":"0")+bit_num;
        num>>=1;
    }
    return bit_num;
}
function ToNumber(num){
    var n=0;
    for(var i=0;i<num.length;++i){
        if(num[i]=='1')n=(n<<1)|1;
        else n=n<<1;
    }
    return n;
}
function WriteBit(e, bit_num, bit){
    if(bit_num.length<bit){
        for(var i=bit-bit_num.length;i>0;--i)
            bit_num = "0"+bit_num;
    }
    e.innerHTML = bit_num;
}

// 与预算
function And(a, b, c=""){
    and_ans.innerHTML = a&b;
    c=ToBit(a&b);a=ToBit(a);b=ToBit(b);
    var bit = Math.max(c.length,a.length,b.length);
    WriteBit(and_A, a, bit);
    WriteBit(and_B, b, bit);
    WriteBit(and_C, c, bit);
}
andA = document.getElementById("andA");
andB = document.getElementById("andB");
andA.onkeyup = function(){
    if(andA.value==""||andB.value==""){
        and_A.innerHTML = "NaN";
        and_B.innerHTML = "NaN";
        and_C.innerHTML = "NaN";
        and_ans.innerHTML = "NaN";
    }else And(parseInt(andA.value), parseInt(andB.value));
}
andB.onkeyup = function(){
    if(andA.value==""||andB.value==""){
        and_A.innerHTML = "NaN";
        and_B.innerHTML = "NaN";
        and_C.innerHTML = "NaN";
    }else And(parseInt(andA.value), parseInt(andB.value));
}
and_A = document.getElementById("and_A");
and_B = document.getElementById("and_B");
and_C = document.getElementById("and_C");
and_ans = document.getElementById("and_ans");

// 或运算
function Or(a, b, c=""){
    or_ans.innerHTML = a|b;
    c=ToBit(a|b);a=ToBit(a);b=ToBit(b);
    var bit = Math.max(c.length,a.length,b.length);
    WriteBit(or_A, a, bit);
    WriteBit(or_B, b, bit);
    WriteBit(or_C, c, bit);
}
orA = document.getElementById("orA");
orB = document.getElementById("orB");
orA.onkeyup = function(){
    if(orA.value==""||orB.value==""){
        or_A.innerHTML = "NaN";
        or_B.innerHTML = "NaN";
        or_C.innerHTML = "NaN";
        or_ans.innerHTML = "NaN";
    }else Or(parseInt(orA.value), parseInt(orB.value));
}
orB.onkeyup = function(){
    if(orA.value==""||orB.value==""){
        or_A.innerHTML = "NaN";
        or_B.innerHTML = "NaN";
        or_C.innerHTML = "NaN";
    }else Or(parseInt(orA.value), parseInt(orB.value));
}
or_A = document.getElementById("or_A");
or_B = document.getElementById("or_B");
or_C = document.getElementById("or_C");
or_ans = document.getElementById("or_ans");

// 非运算
function Not(a, c=""){
    var bit = ToBit(a).length;
    for(var i=0;i<bit;++i){
        if((1<<i)&a)c="0"+c;
        else c="1"+c;
    }
    ans = ToNumber(c);
    not_ans.innerHTML = ans;
    WriteBit(not_A, ToBit(a), bit);
    WriteBit(not_C, ToBit(ans), bit);
}
notA = document.getElementById("notA");
notA.onkeyup = function(){
    if(notA.value==""){
        not_A.innerHTML = "NaN";
        not_C.innerHTML = "NaN";
        not_ans.innerHTML = "NaN";
    }else Not(parseInt(notA.value));
}
not_A = document.getElementById("not_A");
not_C = document.getElementById("not_C");
not_ans = document.getElementById("not_ans");

// 异或运算
function Xor(a, b, c=""){
    xor_ans.innerHTML = a^b;
    c=ToBit(a^b);a=ToBit(a);b=ToBit(b);
    var bit = Math.max(c.length,a.length,b.length);
    WriteBit(xor_A, a, bit);
    WriteBit(xor_B, b, bit);
    WriteBit(xor_C, c, bit);
}
xorA = document.getElementById("xorA");
xorB = document.getElementById("xorB");
xorA.onkeyup = function(){
    if(xorA.value==""||xorB.value==""){
        xor_A.innerHTML = "NaN";
        xor_B.innerHTML = "NaN";
        xor_C.innerHTML = "NaN";
    }else Xor(parseInt(xorA.value), parseInt(xorB.value));
}
xorB.onkeyup = function(){
    if(xorA.value==""||xorB.value==""){
        xor_A.innerHTML = "NaN";
        xor_B.innerHTML = "NaN";
        xor_C.innerHTML = "NaN";
        xor_ans.innerHTML = "NaN";
    }else Xor(parseInt(xorA.value), parseInt(xorB.value));
}
xor_A = document.getElementById("xor_A");
xor_B = document.getElementById("xor_B");
xor_C = document.getElementById("xor_C");
xor_ans = document.getElementById("xor_ans");

init();
function init(){
    andA.value=andB.value="";
    and_A.innerHTML=and_B.innerHTML=and_C.innerHTML=and_ans.innerHTML="NaN";
    orA.value=orB.value="";
    or_A.innerHTML=or_B.innerHTML=or_C.innerHTML=or_ans.innerHTML="NaN";
    notA.value="";
    not_A.innerHTML=not_C.innerHTML=not_ans.innerHTML="NaN";
    xorA.value=xorB.value="";
    xor_A.innerHTML=xor_B.innerHTML=xor_C.innerHTML=xor_ans.innerHTML="NaN";
}