var is_on = 0;
window.onload = function(){
	var Now = new Date();
	var year = document.getElementById("Year"),
		month = document.getElementById("Month"),
		day = document.getElementById("Day"),
		hour = document.getElementById("Hour"),
		minute = document.getElementById("Minute"),
        second = document.getElementById("Second");
        S_second = document.getElementById("S_Second");
        S_Minute = document.getElementById("S_Minute");
	year.value = Now.getFullYear();
	month.value = Now.getMonth()+1;
	day.value = Now.getDate();
	hour.value = Now.getHours();
	minute.value = Now.getMinutes();
    second.value = Now.getSeconds();
    S_second.value = "0";
    S_Minute.value = "0";
}
function Deal_date(){
	if(is_on === 0){
		is_on = 1;
		var year = document.getElementById("Year").value,
			month = document.getElementById("Month").value,
			day = document.getElementById("Day").value,
			hour = document.getElementById("Hour").value,
			minute = document.getElementById("Minute").value,
			second = document.getElementById("Second").value;
		var Now = new Date();
		if(year === "")year = Now.getFullYear();
		if(month === "")month = Now.getMonth()+1;
		if(day === "")day = Now.getDay();
		if(hour === "")hour = Now.getHours();
		if(minute === "")minute = Now.getMinutes();
		if(second === "")second = Now.getSeconds();
		if(year>4756 || month>12 || day>31 || hour>23 || minute>59 || second>59){
			alert("您输入的格式有误或年份太大！我算不过来了 o(╥﹏╥)o");
			ReSet();
		}else{
			var massage = "";
			massage = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
			document.getElementById("start_date").innerHTML = "点击重置";
			document.getElementById("start_sec").innerHTML = "点击重置";
			if((new Date(massage))<(new Date())){
				DateDown(massage);
			}else{
				alert("这个日期已经过了哦！");
				ReSet();
			}
		}
	}else{
		ReSet();
	}
}
function DateDown(endDateStr){
	var endDate = new Date(endDateStr);
	var nowDate = new Date();
	if(endDate <= nowDate){
		var warnning = "时间到！超时："+ parseInt(parseInt((nowDate-endDate))/1000) +"秒";
		var sh = document.getElementById("show_out");
		sh.innerHTML = warnning;
		sh.style.fontWeight = "bolder";
        sh.style.color = "#e67e22";
        sh.style.backgroundColor = "rgba(145, 139, 203, 0.5)";
	}else{
		var totalSeconds = parseInt((endDate - nowDate)/1000);
		var days = Math.floor(totalSeconds /(60*60*24));
		var modulo = totalSeconds % (60*60*24);
		var hours = Math.floor(modulo /(60*60));
		modulo = modulo % (60*60);
		var minutes = Math.floor(modulo / 60);
		var seconds = modulo % 60;

		var massage = "";
		massage += (days > 0? (days<10? " "+days:days)+"天":"");
		massage += (hours > 0? (hours<10? " "+hours:hours)+"小时":"");
		massage += (minutes > 0? (minutes<10? " "+minutes:minutes)+"分":"");
		massage += (seconds >= 0? (seconds<10? " "+seconds:seconds)+"秒":"");
		var sh = document.getElementById("show_out");
        sh.innerHTML = "还剩：" + massage;
        sh.style.backgroundColor = "rgba(145, 139, 203, 0.5)";
	}
	setTimeout(function(){
		DateDown(endDateStr);
	},1000)
}

function Deal_sec(){
	if(is_on === 0){
		is_on = 1;
		var minute = document.getElementById("S_Minute").value,
			second = document.getElementById("S_Second").value;
		if(minute === "")minute = "0";
		if(second === "")second = "0";
		var time = parseInt(minute) * 60 + parseInt(second);
		document.getElementById("start_date").innerHTML = "点击重置";
		document.getElementById("start_sec").innerHTML = "点击重置";
		SecDown(time);
	}else{
		ReSet();
	}
}
function SecDown(x){
	if(x <= 0){
		var warnning = "时间到！超时："+ -parseInt(x) +"秒";
		var sh = document.getElementById("show_out");
		sh.innerHTML = warnning;
		sh.style.fontWeight = "bolder";
        sh.style.color = "#e67e22";
        sh.style.backgroundColor = "rgba(145, 139, 203, 0.5)";
		sh.innerHTML = warnning;
	}else{
		var minute = Math.floor(x/60);
		var second = x%60;
		var massage = "";
		massage += (minute > 0? (minute<10? " "+minute:minute)+"分":"");
        massage += (second > 0? (second<10? " "+second:second)+"秒":"");
        var sh = document.getElementById("show_out");
        sh.innerHTML = "还剩：" + massage;
        sh.style.backgroundColor = "rgba(145, 139, 203, 0.5)";
	}
	setTimeout(function(){
		SecDown(parseInt(x)-1);
	},1000)
}

function ReSet(){
	location.href = "./CountTime.html";
}