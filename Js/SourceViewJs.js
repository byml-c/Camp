function LINE(id){
    Line = new Object();
    // 创建并显示右侧代码区域
    Line.source = function(){
        var source = document.createElement("div");
        source.id = "Source"+id;
        source.className = "SourceLine";
        document.getElementById("SourceShow").appendChild(source);
        return source;
    }();
    // 处于编辑状态
    Line.OnEdit = function(last){
        last.source.className = "SourceLine";
        this.source.className = "SourceLine OnEdit";
    }
    return Line;
}

var InputArea = document.getElementById("InputArea");
InputArea.value = "";
UpdateFocus();
function UpdateFocus(){
    InputArea.focus();
    console.log(InputArea.value);
    setTimeout(function (){
        show_source(InputArea.value);
        UpdateFocus();
    }, 100);
}
function Cursor(type){
    cur = document.getElementById("Cursor");
    if(type){
        cur.className = "CursorOn";
    }else{
        cur.className = "CursorOff";
    }
    setTimeout(function(){
        Cursor(!type);
    }, 600);
}
var EditNow = 1, TotalLine = 0, LineList = [];
Cursor(true);

// onkeydown = function(e){
//     e = e || window.event;
//     var cur = document.getElementById("Cursor");
//     if(e&&e.keyCode==37){
//         var left = parseInt(cur.style.left.match(/(\d+)px/)[1]);
//         if(left>=58)cur.style.left = String(left-8)+"px";
//     }else if(e&&e.keyCode==39){
//         var left = parseInt(cur.style.left.match(/(\d+)px/)[1]);
//         cur.style.left = String(left+8)+"px";
//     }else if(e&&e.keyCode==38){
//         var top = parseInt(cur.style.top.match(/(\d+)px/)[1]);
//         if(top>=19)MoveToLine(EditNow-1);
//     }else if(e&&e.keyCode==40){
//         var top = parseInt(cur.style.top.match(/(\d+)px/)[1]);
//         MoveToLine(EditNow+1);
//     }else if(e&&e.keyCode==8){
//         if(cur.style.left-8<50&&EditNow>1){
//             DeleteLine(EditNow);
//         }
//     }
// }
// function MoveToLine(line){
//     var cur = document.getElementById("Cursor");
//     if(line>TotalLine){
//         line = ++TotalLine;
//         // 新建代码行变量
//         LineList[line-1] = LINE(line);
//         // 创建左侧行数显示
//         var num = document.createElement("div");
//         num.innerHTML = line; num.className = "line";
//         document.getElementById("LineShow").appendChild(num);
//     }
//     LineList[line-1].OnEdit(LineList[EditNow-1]);
//     EditNow = line;
//     cur.style.top = ((line-1)*19)+"px";
// }
// function DeleteLine(line){
//     MoveToLine(EditNow-1);
// }
// function MouseMoveCursor(y, x){
//     var line = Math.floor(x/19)+1;
//     MoveToLine(line);
// }
// function getElementPageLeft(element){
//     var actualLeft=element.offsetLeft;
//     var parent=element.offsetParent;
//     while(parent!=null){
//         actualLeft+=parent.offsetLeft+(parent.offsetWidth-parent.clientWidth)/2;
//         parent=parent.offsetParent;
//     }
//     return actualLeft;
// }

// function getElementPageTop(element){
//     var actualTop=element.offsetTop;
//     var parent=element.offsetParent;
//     while(parent!=null){
//         actualTop+=parent.offsetTop+(parent.offsetHeight-parent.clientHeight)/2;
//         parent=parent.offsetParent;
//     }
//     return actualTop;
// }

Init();
function Init(){
    var cur = document.getElementById("Cursor");
    cur.style.left = "0px"; cur.style.top = "0px";
    // var show = document.getElementById("SourceShow");
//     show.onclick = function(){
//         var x = window.event.clientX-getElementPageLeft(this);
//         var y = window.event.clientY-getElementPageTop(this);
//         MouseMoveCursor(x, y);
//     }
    // input = document.getElementById("InputArea");
    // alert("init");
    // input.onblur = function(){
    //     alert("onblur");
    //     show_source(this.value);
    // }
}

// window.onload = function(){
//     var total_line = 1, la=document.getElementById("line"+total_line).value;
//     onkeydown = function(e){
//         e = e||window.event;
//         if(e&&e.keyCode==13){
//             alert(total_line);
//             if((document.getElementById("line"+total_line).value+"\n")!=la){
//                 la="\n";total_line += 1;
//                 var b = document.getElementsByClassName("box")[0];
//                 var t = document.createElement("textarea");
//                 t.id = "line"+total_line;
//                 t.ClassName = "input_area";
//                 b.appendChild(t);    
//             }
//         }else{
//             la = document.getElementById("line"+total_line).value+"\n";
//         }
//     }    
// }