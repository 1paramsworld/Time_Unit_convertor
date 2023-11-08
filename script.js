function converttime(){
    let answer;

    let userinput=document.getElementById("userinput1").value;
    let selectedvalue1=document.getElementById("userselection1").value;
    let selectedvalue2=document.getElementById("userselection2").value;
    let displayanswer=document.getElementById("answer");

    if(selectedvalue1==="Milliseconds" && selectedvalue2==="Seconds"){
        answer=userinput/1000;
    }
    if(selectedvalue1==="Milliseconds" && selectedvalue2==="Milliseconds"){
        answer=userinput;
    }
    else if(selectedvalue1==="Milliseconds" && selectedvalue2==="Minutes"){
         answer=userinput/1000/60;
        }
    else if(selectedvalue1==="Milliseconds" && selectedvalue2==="Hours"){
        answer=userinput/1000/60/60;
    }
    else if(selectedvalue1==="Milliseconds" && selectedvalue2==="Days"){
        answer=userinput/1000/60/60/24;
    }
    else if(selectedvalue1==="Seconds" && selectedvalue2==="Milliseconds"){
        answer=userinput*1000;
    }
    if(selectedvalue1==="Seconds" && selectedvalue2==="Seconds"){
        answer=userinput;
    }
    else if(selectedvalue1==="Seconds" && selectedvalue2==="Minutes"){
        answer=userinput/60;
    }
    else if(selectedvalue1==="Seconds" && selectedvalue2==="Hours"){
        answer=userinput/60/60;
    }
    else if(selectedvalue1==="Seconds" && selectedvalue2==="Days"){
        answer=userinput/1000/60/60/24;
    }
    else if(selectedvalue1==="Minutes" && selectedvalue2==="Milliseconds"){
        answer=userinput*60*1000;
    }
    else if(selectedvalue1==="Minutes" && selectedvalue2==="Minutes"){
        answer=userinput;
    }
    else if(selectedvalue1==="Minutes" && selectedvalue2==="Seconds"){
        answer=userinput*60;
    }
    else if(selectedvalue1==="Minutes" && selectedvalue2==="Hours"){
        answer=userinput/60;
    }
    else if(selectedvalue1==="Minutes" && selectedvalue2==="Days"){
        answer=userinput/60/24;
    }
    else if(selectedvalue1==="Hours" && selectedvalue2==="Milliseconds"){
        answer=userinput*60*60*1000;
    }
    else if(selectedvalue1==="Hours" && selectedvalue2==="Seconds"){
        answer=userinput*60*60;
    }
    else if(selectedvalue1==="Hours" && selectedvalue2==="Minutes"){
        answer=userinput*60;
    }
    else if(selectedvalue1==="Hours" && selectedvalue2==="Hours"){
        answer=userinput;
    }
    else if(selectedvalue1==="Hours" && selectedvalue2==="Days"){
        answer=userinput/24;
    }
    else if(selectedvalue1==="Days" && selectedvalue2==="Milliseconds"){
        answer=userinput*24*60*60*1000;
    }
    else if(selectedvalue1==="Days" && selectedvalue2==="Days"){
        answer=userinput;
    }
    else if(selectedvalue1==="Days" && selectedvalue2==="Seconds"){
        answer=userinput*24*60*60;
    }
    else if(selectedvalue1==="Days" && selectedvalue2==="Minutes"){
        answer=userinput*24*60;
    }
    else if(selectedvalue1==="Days" && selectedvalue2==="Hours"){
        answer=userinput*24;
    }


    
    
    displayanswer.innerHTML=`${userinput} ${selectedvalue1} will be ${answer} ${selectedvalue2}`;
}