
setInterval(time,1000);
function time(){
    let a=document.getElementById('time');
    a.innerHTML=String(new Date()).slice(16,24);
    let time=String(new Date()).slice(16,24);
    console.log(time.length);
    if((time[0]==0 && time[1]==0) && time[3]<4){
        document.getElementById('rt').innerHTML="Wake up!";
        document.getElementById('wakeup').style.display="block";
        nodisplay("workout","shower","breakfast");
    }
    else if((time[0]==1 && time[1]==5) && time[3]<3){
        // document.getElementById('routine').style.display="none";
        document.getElementById('rt').innerHTML="Workout Time";
        document.getElementById('workout').style.display="block";
        nodisplay("wakeup","shower","breakfast");
    }
    else if((time[0]==1 && time[1]==5) && time[3]==5){
        document.getElementById('rt').innerHTML="Shower Time";
        document.getElementById('shower').style.display="block";
        nodisplay("wakeup","workout","breakfast");
    }
    else if((time[0]==1 && time[1]==4) && time[3]==5){
        document.getElementById('breakfast').style.display="block";
        nodisplay("wakeup","shower","workout");
    }
    else{
        
    }
    
}
function nodisplay(x,y,z){
    document.getElementById(x).style.display="none";
    document.getElementById(y).style.display="none";
    document.getElementById(z).style.display="none";
}
setInterval(time,1000);