
function matchpass(){
    leastpass();
var firstpassword=document.form.password.value;
var secondpassword=document.form.confirm.value;

if(firstpassword==secondpassword){
return true;
}
else{
alert("password must be same!");
return false;
}

}

function leastpass(){  
    var password=document.form.password.value;  
        
     if(password.length<8){  
      alert("Password must be at least 8 characters long.");  
      return false;  
      }  
    } 
    function allLetter(inputtxt)
    { 
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters))
    {
    return true;
    }
    else
    {
    alert('Please input alphabet characters only');
    return false;
    }
    }

    function allnumeric(inputtxt)
      {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      return true;
      }
      else
      {
      alert('Please input numeric characters only');
      document.form.zip.focus();
      return false;
      }
      }
       
