
setInterval(time,1000);
function time(){
    let a=document.getElementById('time');
    a.innerHTML=String(new Date()).slice(16,24);
    let time=String(new Date()).slice(16,24);
    console.log(time.length);
    if((time[0]==0 && time[1]==0) && time[3]<4){
        document.getElementById('rt').innerHTML="Wake up!";
        document.getElementById('image').src="/goodnight.gif";
    }
    else if((time[0]==1 && time[1]==5) && time[3]<3){
        
        document.getElementById('rt').innerHTML="Workout Time";

        document.getElementById('image').src="/goodnight.gif";
    }
    else if((time[0]==1 && time[1]==5) && time[3]==5){
        document.getElementById('rt').innerHTML="Shower Time";
      
        document.getElementById('image').src="/goodnight.gif";
    }
    else if((time[0]==2 && time[1]==2) && time[3]==5){
        document.getElementById('rt').innerHTML="Goodnight";
        document.getElementById('image').src="/goodnight.gif";
        
    }
    else{
        
    }
    
}
setInterval(time,1000);