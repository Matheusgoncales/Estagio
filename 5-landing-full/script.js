document.querySelector("p.demo").style.opacity = "0"

function ancorEmail() {
    document.querySelector(".emailtext").focus();
}



function dirEmail(){
    var emailvalid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(document.querySelector("#email").value.match(emailvalid))
        { 
        alert("e-mail subscribed");
        } 
    else
    {
        document.querySelector("p.demo").style.opacity ="100"
    }
}
