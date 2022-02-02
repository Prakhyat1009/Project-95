function login (){
    window.location="kwitter.html";
    user_name=document.getElementById("user_name_int").value;
    localStorage.setItem("UserName",user_name);
    }