document.querySelector(".success").style.display = "none"
document.querySelector(".pemailinvalid").style.opacity = "0"

var bntclear = document.querySelector(".pemailinvalid").style.opacity = "0"
document.querySelector("#emailbox").style.border = "1px solid gray"
document.querySelector("#emailbox").style.background = "";

function btnconfirmed() {
    var emailvalid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailinvalid = document.querySelector(".pemailinvalid").style.opacity = "100"
    document.querySelector("#emailbox").style.border = "1px solid hsl(4, 100%, 67%)"
    document.querySelector("#emailbox").style.background = " rgba(255 98 87 / 31%)";

    if (document.querySelector("#emailbox").value.match(emailvalid)) {
        document.querySelector(".bigparent").style.display = "none", document.querySelector(".success").style.display = "";
    }
    else {
        emailinvalid
    }
}

function clearbtn() {
    if (document.querySelector("#emailbox").value.match(emailinvalid)) {
        bntclear
    }
    else {

    }
}

function dismissbtn() {

    if (document.querySelector(".success").style.display = "") {

    }
    else {
        document.querySelector(".success").style.display = "none", document.querySelector(".bigparent").style.display = "", bntclear;
    }
}