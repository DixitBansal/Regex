console.log("start");
// const password=String(document.getElementById('exampleInputPassword1').value);
// console.log(password);
// if(password.length>=8){
    //     text1.style="color:green";
    // }
    
    function passwordvalidation(elemnt){
        let alltrue=false;
    

   
    let text1=document.getElementById("text1");
    let text2=document.getElementById("text2");
    let text3=document.getElementById("text3");
    let text4=document.getElementById("text4");
    let text=String(elemnt.value);
    let textarr=text.split("");
    let capital=false;
    let special=false;
    let number=false;
    console.log(textarr);
    if(text.length>=8){
        text1.style="color:#05b142";
    }
    else{
        text1.style="";
    }
   for(let i=0;i<text.length;i++){
    if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
        capital=true;
    }
    if(text[i]>=0 && text[i]<=9){
        number=true;
    }
    if((text.charCodeAt(i)>=33 && text.charCodeAt(i)<=9) || (text.charCodeAt(i)>=58 && text.charCodeAt(i)<=64) || (text.charCodeAt(i)>=91 && text.charCodeAt(i)<=96) || (text.charCodeAt(i)>=123 && text.charCodeAt(i)<=127)){
        special=true;
    }
   }
    if(capital){
        text2.style="color:#05b142";
    }
    else{
        text2.style="";
    }
    if(number){
        text4.style="color:#05b142";
    }
    else{
        text4.style="";
    }
    if(special){
        text3.style="color:#05b142";
    }
    else{
        text3.style="";
    }
    if(text.length>=8 && capital && number && special){
        alltrue=true;
    }
    if(alltrue){
        console.log(alltrue);
       
        document.getElementById('formbtn').removeAttribute("disabled");
    }
    
    
    
}

function details(){
    const username=String(document.getElementById("username").value);
    const email=String(document.getElementById('exampleInputEmail1').value);
    const password=String(document.getElementById('exampleInputPassword1').value);
    let password_help=document.getElementById('passwordHelpInline');
    let email_help=document.getElementById('emailHelp');

// -->validation for password 

    let namearray=username.split(" ");
    
    namearray.push(namearray.join(""),username);
    console.log(namearray);
    for(let i of namearray){
        if(password.includes(i)){
            password_help.innerHTML="<h4>Password must not include username!<h4/>";
            password_help.style="color:#b1af0e";
        }
    }
// -->validation for email 
if(!email.includes("gmail.com")){
    email_help.innerText="Sorry,you are not authorized";
    email_help.style="color:red";
}



    console.log(namearray);
}