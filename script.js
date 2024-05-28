 

// name to date

function valid () {
    var  name=document.register.name.value
    if(name=="" ){
        alert("Enter your name")
    
    
    }
    else {
        var patt = /^[A-z \s \.]+$/;
        var result = patt.test(name);
        if (result == false) {
          alert("Enter a valid name");
          return false;
        }
      }
      var  file=document.register.name.value
      if(file=="" ){
          alert("Insert your file")
      
      
      }
    
    var gender=document.register.gender.value
    if(gender==""){
        alert("select your gender")
    }
   
    if(
        document.getElementById("sd1").checked==false && document.getElementById("sd2").checked==false)
    
    {alert("Select your Language")
     return false
    }
    var  country=document.getElementById("can").value
    if(country=="" ){
        alert("Choose your State")
        return false
    }
    var  address=document.getElementById("wer1").value
    if(address=="" ){
        alert("Enter your Address")
        return false
    }
    var  mail=document.getElementById("qwe").value
    if(mail=="" ){
        alert("Enter your Email")
        return false
    }
    var  time=document.getElementById("qwe3").value
    if(time=="" ){
        alert("Select your current Time")
        return false
    }
    var  date=document.getElementById("qwe4").value
    if(date=="" ){
        alert("Select your current date")
        return false
    }
   
}



// password

function clicks(){
    
   var pass=document.getElementById("ery").value
    if(pass==""){
        document.getElementById("s2").innerHTML="<span style='color:red'>Enter your Password</span>"   
    }

   else{
   if(pass.length<5){
    document.getElementById("s2").innerHTML="<span style='color:red'>Weak password</span>" 
   }
   else if(pass.length>=5 && pass.length<=9) {
    document.getElementById("s2").innerHTML="<span style='color:orange'>Medium password</span>" 
   }
   else{
    document.getElementById("s2").innerHTML="<span style='color:green'> strong Password</span>" 
   }
}
 
}






