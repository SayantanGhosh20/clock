
function time(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let item = document.getElementsByClassName("week");
    

    hour = (hour<10) ? "0"+hour : hour;
    min = (min<10) ? "0"+min : min;
    sec = (sec<10) ? "0"+sec : sec;
    
    item[day].style.color="white";
    item[day].style.fontSize ="40px";
    item[day].style.margin="0px 0px";
    document.getElementById("hr").innerHTML= hour;
    document.getElementById("min").innerHTML= min;
    document.getElementById("sec").innerHTML= sec;
    setTimeout(time,1000);
}

time();