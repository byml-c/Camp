var inp = document.getElementById("search");
var foc = false;
inp.onkeyup = function(e){
    e = e||window.event;
    inp.scrollLeft = 0;
    inp.style.width = inp.value.length+"px";
    inp.style.width = Math.max(150, inp.scrollWidth)+"px";
    Search(inp.value);
}

function ABLE(name, file_name, discribe){
    var able = new Object();
    able.name = name;
    able.file_name = file_name;
    able.discribe = discribe;
    return able;
}
var able_list = [ABLE("计算器", "calculater", ["计算器"]),
                 ABLE("对数计算", "log", ["log", "对数计算"]),
                 ABLE("指数计算", "pow", ["pow", "指数计算"]),
                 ABLE("位运算", "bit", ["bit", "位运算", "二进制"])]
function show_search_result(result){
    var show = document.getElementById("menu-box");
    if(result.length<1){
        show.innerHTML = "<div class=\"undefined\">对不起，还没有这个功能哦！<a href=\"https://www.baidu.com/s?wd="+inp.value+"\"  target=\"_blank\">[点击百度："+inp.value+"]</a></div>";
    }else{
        var message = "";
        for(var i=0;i<result.length;++i){
            var url="./MathCalculate/Page/"+result[i].file_name+".html";
            if(!(i&1)){
                message += "<div class=\"line\">";
                message += "<a class=\"menu left\" href=\""+url+"\">"+result[i].name+"</a>";
            }else{
                message += "<a class=\"menu right\" href=\""+url+"\">"+result[i].name+"</a>";
                message += "</div>";
            }
        }
        if(result.length&1)message += "</div>";
        show.innerHTML = message;
    }
}
function Search(s=null){
    var result = [];
    if(s==null||s==undefined||s==""){
        show_search_result(able_list);
    }else{
        for(var i=0;i<able_list.length;++i){
            var able=able_list[i];
            for(var j=0;j<able.discribe.length;++j){
                var dis = able.discribe[j];
                if(s.match(dis)!=null||dis.match(s)!=null){
                    var mat=eval("/("+(s.match(dis)!=null?s.match(dis):dis.match(s))+")/g");
                    var ab = ABLE(able.name.replace(mat, "<span class=\"same\">$1</span>"), able.file_name, []);
                    result.push(ab); break;
                }
            }
        }
        show_search_result(result);
    }
}
init();
function init(){
    inp.value="";
    Search();
}