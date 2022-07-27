let y=document.getElementById('number');
 let str=y.innerText;
function calc(elemnt){
    let text=String(elemnt.id);
    let x=document.getElementById('evaluation');
    let y=document.getElementById('number');
//    console.log(text);
   switch(text) {
    case "AC":
      str="";
      x.innerText="0";
      y.innerText="";

      break;
    case "%":
      str=str.concat("%");
      y.innerText=str;
      try {

        x.innerHTML=eval(str);
      }
      catch(err) {
        
        
      }
      break;
    case "(":
      str=str.concat("(");
      y.innerText=str;
      try {

        x.innerHTML=eval(str);
      }
      catch(err) {
        
        
      }
      break;
    case ")":
      str=str.concat(")");
      y.innerText=str;
      try {

        x.innerHTML=eval(str);
      }
      catch(err) {
        
        x.inn
      }
      break;
    case "-":
        str=str.concat("-");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "x":
      str=str.concat("*");
      y.innerText=str;
      try {

        x.innerHTML=eval(str);
      }
      catch(err) {
        
        
      }
      break;
    case "/":
      str=str.concat("/");
      y.innerText=str;
      try {

        x.innerHTML=eval(str);
      }
      catch(err) {
        
        x.inn
      }
      break;
    case "+":
        str=str.concat("+");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
         
        }
      break;
    case "1":
        str=str.concat("1");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          
        }
      break;
    case "2":
        str=str.concat("2");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "3":
        str=str.concat("3");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "4":
        str=str.concat("4");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "5":
        str=str.concat("5");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "6":
        str=str.concat("6");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "7":
        str=str.concat("7");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "8":
        str=str.concat("8");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn
        }
      break;
    case "9":
        str=str.concat("9");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn;
        }
      break;
    case "0":
        str=str.concat("0");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn;
        }
      break;
    case ".":
        str=str.concat(".");
        y.innerText=str;
        try {

          x.innerHTML=eval(str);
        }
        catch(err) {
          
          x.inn;
        }
      break;
    case "b":
        str=str.slice(0,str.length-1);
        y.innerText=str;
        console.log(str);
        try {
          if(str==""){
            x.innerHTML="0";
          }
          else{

            x.innerHTML=eval(str);
          }

        }
        catch(err) {
         
          if(str=="undefined"){
            x.innerHTML="0";
          }
        }
        
      break;
      case "=":

        try {

            x.innerHTML=eval(str);
          }
          catch(err) {
            
            x.innerHTML="Invalid Input";
          
          }
        
        
      break;
    default:
      text = "Invalid";
  }
//    console.log(str);
}