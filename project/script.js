//Write your JavaScript Code here

console.log();

var url="";
var urlregex=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 


var source="";
var team="";
var teamregex=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var result="";
function handleChange(val,name) {
    console.log(val,name);
    if(name=="url"){
        if(urlregex.test(val))
        url=val;
        else if(val==="")
        alert("Please enter URL")
        else
        alert("invalid URL")
    }
    else if(name=="source")
    source=val;
    else if(name=="team"){
        if(teamregex.test(val))
        team=val;
        else
        alert("invalid")
    }

    if(!(url==="" || team==="" || source==="")){
        result=url+"#src="+source+"&team="+team;
        document.getElementById("finalresult").innerText=result;
    }
    //alert("Please fill fields")
}

console.log(url);
console.log(source);
console.log(team);

function copyFunction() {
    //debugger
   
        console.log("in copyfunction");
        var targetText=document.getElementById("finalresult").select();
        document.execCommand("copy");
    var tp=document.getElementById("tooltip");
    tp.innerHTML="URL Copied"
  
   
   
    // tp.style.display="hide";
// tp.blur();

    myFun();
}


function myFun() {
    setTimeout(
        function () {
            var tp=document.getElementById("tooltip");
    tp.innerHTML="";
              
    },1000)
}