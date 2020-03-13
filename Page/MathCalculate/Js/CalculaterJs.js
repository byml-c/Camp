// 计算器部分
function Pow(x, y){
	return Math.pow(x, y);
}
function CalNumber(x1, x2, opr){
	var ans;
	if(opr=='+')ans=x1+x2;
	else if(opr=='-')ans=x2-x1;
	else if(opr=='*')ans=x1*x2;
	else if(opr=='/')ans=x2/x1;
	else if(opr=='^')ans=Pow(x2,x1);
	return ans;
}
function Calculate(s){
    var num,ntop,op,otop;
    num = [0]; op = [''];
    var lens=s.length,sum;
    sum=ntop=otop=0;show="";
	for(var i=0;i<=lens;++i){
        if(i==0&&s[i]=='-'){
            num.push(0);++ntop;
            op.push('-');++otop;
            continue;
        }
		if(i==lens){
			if(s[i-1]!=')'&&s[i-1]!='}'){
                num.push(sum);++ntop;
			}
			while(ntop>1){
				var x1=num[ntop];--ntop;num.pop();
                var x2=num[ntop];--ntop;num.pop();
                num.push(CalNumber(x1,x2,op[otop--]));
                op.pop();++ntop;
            }
		}else if(s[i].charCodeAt()>=48&&s[i].charCodeAt()<=57){
			sum=sum*10+s[i].charCodeAt()-48;
        }else if(s[i]=='.'){
            var j=i+1, nsum=0;
            while(j<lens&&s[j].charCodeAt()>=48&&s[j].charCodeAt()<=57){
                nsum=nsum*10+s[j].charCodeAt()-48;++j;
            }--j;sum=sum+(nsum/Math.pow(10,j-i));i=j;
        }else{
			if(s[i]!='('&&s[i]!=')'&&s[i]!='{'&&s[i]!='}'){
				if((i>0&&s[i-1]=='('&&s[i-1]=='{')||(i<lens-1&&s[i+1]=='('&&s[i+1]=='{')){
					num.push(sum);++ntop;
				}
				if(i>0&&s[i-1]!=')'&&s[i-1]!='}'){
					num.push(sum);++ntop;
				}
			}else if((s[i]=='}'||s[i]==')')&&(i>0&&s[i-1]!='{'&&s[i-1]!='}'&&s[i-1]!='('&&s[i-1]!=')')){
				num.push(sum);++ntop;
			}else if(s[i]=='('&&i>0&&s[i-1].charCodeAt()>=48&&s[i-1].charCodeAt()<=57){
				num.push(sum);++ntop;
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'&&(op[otop]!='+'&&op[otop]!='-')){
					var x1=num[ntop];--ntop;num.pop();
					var x2=num[ntop];--ntop;num.pop();
					num.push(CalNumber(x1,x2,op[otop--]));op.pop();
				}
				op.push('*');++otop;
			}sum=0;
			if(s[i]=='('||s[i]==')'){
				if(s[i]=='('){
                    op.push(s[i]);++otop;
				}else{
					while(otop&&op[otop]!='('){
						var x1=num[ntop];--ntop;num.pop();
						var x2=num[ntop];--ntop;num.pop();
                        num.push(CalNumber(x1,x2,op[otop--]));
                        op.pop();++ntop;
					}--otop;op.pop();
				}
			}if(s[i]=='{'||s[i]=='}'){
				if(s[i]=='{'){
					op.push(s[i]);++otop;
				}else{
					while(otop&&op[otop]!='{'){
						var x1=num[ntop];--ntop;num.pop();
						var x2=num[ntop];--ntop;num.pop();
                        num.push(CalNumber(x1,x2,op[otop--]));
                        op.pop();++ntop;
					}--otop;op.pop();
				}
			}else if(s[i]=='+'||s[i]=='-'){
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'){
					var x1=num[ntop];--ntop;num.pop();
					var x2=num[ntop];--ntop;num.pop();
                    num.push(CalNumber(x1,x2,op[otop--]));
                    op.pop();++ntop;
				}
				op.push(s[i]);++otop;
			}else if(s[i]=='*'||s[i]=='/'){
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'&&(op[otop]!='+'&&op[otop]!='-')){
					var x1=num[ntop];--ntop;num.pop();
					var x2=num[ntop];--ntop;num.pop();
                    num.push(CalNumber(x1,x2,op[otop--]));
                    op.pop();++ntop;
				}
				op.push(s[i]);++otop;
			}else if(s[i]=='^'){
				op.push(s[i]);++otop;
			}
		}
	}
	return num[ntop];
}

// 显示部分
function Format(s){
    s = s.replace(/\*/g, '×').replace(/\//g, '÷');

    var lens=s.length, message="";
    for(var i=0, la=-1;i<=lens;++i){
        if(i==lens){
            message+="<div class=\"comment\">"+s.slice(la+1, lens)+"</div>";
        }else if(s[i]=='^'){
            var j=i-1, k=i+1,pj=[], pk=[], jx="", kx="";
            if(s[j]==')'){
                pj.push(true);
                while(j>=0&&pj.length>0){
                    jx = s[j]+jx;--j;
                    if(s[j]=='(')pj.pop();
                    else if(s[j]==')')pj.push(true);
                }
                jx='('+jx;
            }else{
                while(j>=0&&s[j].charCodeAt()>=48&&s[j].charCodeAt()<=57){
                    jx=s[j]+jx, --j;
                }++j;
            }
            if(s[k]=='{'){
                pk.push(true);++k;
                while(k<lens&&pk.length>0){
                    kx=kx+s[k];++k;
                    if(s[k]=='}')pk.pop();
                    else if(s[k]=='{')pk.push(true);
                }++k;
            }else{
                while(k<lens&&s[k].charCodeAt()>=48&&s[k].charCodeAt()<=57){
                    kx=kx+s[k], ++k;
                }
            }
            message+="<div class=\"comment\">"+s.slice(la+1,j)+"</div>";
            message+="<div class=\"pow\"><div class=\"down\">"+jx+"</div>";
            message+="<div class=\"up\">"+kx+"</div></div>";
            la=i=k-1;
        }
    }
    return message;
}
function changeWidth(e){
    e.scrollLeft = 0;
    e.style.width = e.value.length+"px";
    e.style.width = Math.max(400, e.scrollWidth)+"px";
}
var inp = document.getElementById("input");inp.value="";
inp.onkeyup = function(){
    changeWidth(inp);
    var ans = document.getElementById("ans");
    var show = document.getElementById("show");
    if(inp.value==""){
        show.innerHTML = "";
        ans.innerHTML = "";
    }else{
        show.innerHTML = Format(inp.value);
        ans.innerHTML = ' = '+Calculate(inp.value);    
    }
}