class Time {
    constructor(Hour, Minute, Second){
        this.Hour = Hour;
        this.Minute = Minute;
        this.Second = Second;
    }
    ChangeToSecond(){
        return this.Hour*3600+this.Minute*60+this.Second;
    }
    IsLessThan(NowTime){//operator this <= now
        return this.ChangeToSecond()<=NowTime.ChangeToSecond();
    }
    IsMoreThan(NowTime){//operator this >= now
        return this.ChangeToSecond()>=NowTime.ChangeToSecond();
    }
    Distance(NowTime){
        var x=NowTime.ChangeToSecond(),y=this.ChangeToSecond();
        if(x>y){var t=x;x=y;y=t;}
        var dis=y-x;
        var hour=Math.floor(dis/3600);dis-=hour*3600;
        var minute=Math.floor(dis/60);dis-=minute*60;
        var second=dis;
        return (new Time(hour, minute, second));
    }
    Print(){
        return (this.Hour<10?"0":"")+this.Hour+":"+(this.Minute<10?"0":"")+this.Minute+":"+(this.Second<10?"0":"")+this.Second;
    }
}
class Lesson {
    constructor(Name, Start, End, PFlag, UFlag, DFlag, EFlag){
        this.ClassName = Name;
        this.StartTime = Start;
        this.EndTime = End;
        this.PFlag = PFlag;
        this.UFlag = UFlag;
        this.DFlag = DFlag;
        this.EFlag = EFlag;
    }
    IsInClass(NowTime){
        return this.StartTime.IsLessThan(NowTime) && this.EndTime.IsMoreThan(NowTime);
    }
    ToEnd(NowTime){
        return this.EndTime.Distance(NowTime);
    }
    Print(){
        alert("名字："+this.ClassName+" 开始时间："+this.StartTime.Print()+" 结束时间："+this.EndTime.Print());
    }
}
var Lessons = [], Position = 0, Total=0;

window.onload = function(){
    init();
}
function init(){
    Lessons[Total++] = new Lesson("睡觉", new Time(0,0,0), new Time(6,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("起床早餐", new Time(6,30,0), new Time(7,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("早自习", new Time(7,30,0), new Time(8,0,0), false, true, false, false);
    Lessons[Total++] = new Lesson("第一节课", new Time(8,0,0), new Time(8,40,0), false, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（1 <-> 2）", new Time(8,40,0), new Time(9,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第二节课", new Time(9,0,0), new Time(9,40,0), true, true, true);
    Lessons[Total++] = new Lesson("课间操（2 <-> 3）", new Time(9,40,0), new Time(10,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第三节课", new Time(10,0,0), new Time(10,40,0), true, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（2 <-> 眼操）", new Time(10,40,0), new Time(11,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("眼保健操", new Time(11,0,0), new Time(11,10,0), false, false, false, true);
    Lessons[Total++] = new Lesson("第四节课", new Time(11,10,0), new Time(11,50,0), true, true, true, false);
    Lessons[Total++] = new Lesson("上午放学", new Time(11,50,0), new Time(13,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("午休", new Time(13,0,0), new Time(14,0,0), false, true, true, false);
    Lessons[Total++] = new Lesson("午自习", new Time(14,0,0), new Time(14,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第五节课", new Time(14,30,0), new Time(15,10,0), true, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（5 <-> 6）", new Time(15,10,0), new Time(15,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第六节课", new Time(15,30,0), new Time(16,10,0), true, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（6 <-> 7 ）", new Time(16,10,0), new Time(16,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第七节课", new Time(16,30,0), new Time(17,10,0), true, true, true, false);
    Lessons[Total++] = new Lesson("下午放学", new Time(17,10,0), new Time(18,20,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第一节晚自习", new Time(18,20,0), new Time(19,15,0), false, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（晚1 <-> 晚2）", new Time(19,15,0), new Time(19,30,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第二节晚自习", new Time(19,30,0), new Time(20,45,0), false, true, true, false);
    Lessons[Total++] = new Lesson("课间休息（晚2 <-> 晚3）", new Time(20,45,0), new Time(21,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("第三节晚自习", new Time(21,0,0), new Time(22,15,0), false, true, true, false);
    Lessons[Total++] = new Lesson("晚上放学", new Time(22,15,0), new Time(23,0,0), false, false, false, false);
    Lessons[Total++] = new Lesson("睡觉", new Time(23,0,0), new Time(0,0,0), false, false, false, false);

    var Now = new Date();
    var NowTime = new Time(Now.getHours(), Now.getMinutes(), Now.getSeconds());
    for(var i=0;i<Total;++i){
        if(Lessons[i].IsInClass(NowTime)){
            Position = i;break;
        }
    }Count();
}
function Count(){
    var Now = new Date();
    var NowTime = new Time(Now.getHours(), Now.getMinutes(), Now.getSeconds());
    var Next = (Position+1)%Total;
    if(Lessons[Next].PFlag&&!offp){
        if(NowTime.ChangeToSecond() == Lessons[Next].StartTime.ChangeToSecond()-60){
            PrepareRing();
        }
    }
    if(Lessons[Next].IsInClass(NowTime)){
        if(Lessons[Position].DFlag)DownRing();
        if(Lessons[Next].UFlag&&!know)UPRing();
        if(Lessons[Next].EFlag)EyeRing();
        Position=Next;Known(false);
    }
    ShowNowTime(NowTime);
    ShowClass(Lessons[Position]);
    ShowDis(Lessons[Position], Lessons[Position].ToEnd(NowTime));

    setTimeout(function(){
        Count();
    }, 1000);
}
function ShowNowTime(NowTime){
    var screen = document.getElementsByClassName("NowTime")[0];
    screen.innerHTML = "现在是 "+NowTime.Print();
}
function ShowClass(Class){
    var screen = document.getElementsByClassName("ShowClass")[0];
    screen.innerHTML = Class.ClassName;
}
function ShowDis(Class, Dis){
    var screen = document.getElementsByClassName("ShowTime")[0];
    var message = "距离 "+Class.ClassName+" 结束还有：";
    message += Dis.Hour>0? Dis.Hour+"小时 ":"";
    message += (Dis.Minute<10?"0":"")+Dis.Minute+"分 "+(Dis.Second<10?"0":"")+Dis.Second+"秒";
    screen.innerHTML = message;
}

var playu = false, playd = false, playe = false, offp = false, know = false;
function UPRing(){
    var ui = document.getElementById("ui");
    var di = document.getElementById("di");
    var u = document.getElementById("Up");
    var d = document.getElementById("Down");
    var e = document.getElementById("Eye");
    var su=document.getElementById("ShowU");
    var sd=document.getElementById("ShowD");
   
    if(playe){playe=false;e.pause();e.currentTime = 0;}
    if(playu){
        u.pause();u.currentTime=0;playu=false;
        ui.className = "fa fa-toggle-off";
        su.innerHTML = "上课铃已停止";
        setTimeout(function(){
            su.style.bottom = "-30px";
        }, 500);
    }else{
        if(playd){
            d.pause();d.currentTime=0;playd=false;
            di.className = "fa fa-toggle-off";
            sd.innerHTML = "下课铃已停止";
            setTimeout(function(){
                sd.style.bottom = "-30px";
            }, 500);
        }
        playu=true;
        u.play();
        u.addEventListener("ended", function(){
            ui.className = "fa fa-toggle-off";
            su.innerHTML = "上课铃已结束";
            playu = false;
            setTimeout(function(){
                su.style.bottom = "-30px";
            }, 500);
        });
        ui.className = "fa fa-toggle-on";
        su.innerHTML = "正在播放上课铃";
        su.style.bottom = "0px";
    }
}
function DownRing(){
    var u = document.getElementById("Up");
    var d = document.getElementById("Down");
    var e = document.getElementById("Eye");
    var su=document.getElementById("ShowU");
    var sd=document.getElementById("ShowD");
   
    if(playe){playe=false;e.pause();e.currentTime = 0;}
    if(playd){
        d.pause();d.currentTime=0;playd=false;
        di.className = "fa fa-toggle-off";
        sd.innerHTML = "下课铃已停止";
        setTimeout(function(){
            sd.style.bottom = "-30px";
        }, 500);
    }else{
        if(playu){
            u.pause();u.currentTime=0;playu=false;
            ui.className = "fa fa-toggle-off";
            su.innerHTML = "上课铃已停止";
            setTimeout(function(){
                su.style.bottom = "-30px";
            }, 500);
        }
        playd=true;
        d.play();
        d.addEventListener("ended", function(){
            di.className = "fa fa-toggle-off";
            sd.innerHTML = "下课铃已结束";
            playd = false;
            setTimeout(function(){
                sd.style.bottom = "-30px";
            }, 500);
        });
        di.className = "fa fa-toggle-on";
        sd.innerHTML = "正在播放下课铃";
        sd.style.bottom = "0px";
    }
}
function EyeRing(){
    var u = document.getElementById("Up");
    var d = document.getElementById("Down");
    var e = document.getElementById("Eye");
    var su=document.getElementById("ShowU");
    var sd=document.getElementById("ShowD");
   
    if(playd){
        d.pause();d.currentTime=0;playd=false;
        di.className = "fa fa-toggle-off";
        sd.innerHTML = "下课铃已停止";
        setTimeout(function(){
            sd.style.bottom = "-30px";
        }, 500);
    }
    if(playu){
        u.pause();u.currentTime=0;playu=false;
        ui.className = "fa fa-toggle-off";
        su.innerHTML = "上课铃已停止";
        setTimeout(function(){
            su.style.bottom = "-30px";
        }, 500);
    }
    if(playe){playe=false;e.pause();e.currentTime = 0;}
    e.play();playe=true;
}
function PrepareRing(){
    UPRing();
}
function CloseP(){
    pi = document.getElementById("pi");
    ShowP = document.getElementById("ShowP");
    if(offp){
        pi.className = "fa fa-toggle-on";
        ShowP.innerHTML = "预备铃已开启";
    }else{
        pi.className = "fa fa-toggle-off";
        ShowP.innerHTML = "预备铃已关闭";
    }
    offp = !offp;
    ShowP.style.bottom = "0px";
    setTimeout(function(){
        ShowP.style.bottom = "-30px";
    }, 1000);
}
function Known(flag){
    var ki=document.getElementById("ki");
    var ShowK=document.getElementById("ShowK");
    if(flag){
        ki.className = "fa fa-toggle-on";
        ShowK.innerHTML = "上课签到成功";
        ShowK.style.bottom = "0px";
        setTimeout(function(){
            ShowK.style.bottom = "-30px";
        }, 1000);
    }else{
        ki.className = "fa fa-toggle-off";
        ShowK.innerHTML = "签到已重置";
        ShowK.style.bottom = "0px";
        setTimeout(function(){
            ShowK.style.bottom = "-30px";
        }, 1000);
    }
    know=flag;
}