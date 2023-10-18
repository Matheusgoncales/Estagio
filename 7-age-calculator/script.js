
function validdates() {
    var day = document.querySelector("#dateday").value
    var month = document.querySelector("#datemonth").value
    var year = document.querySelector("#dateyear").value

    const nd = new Date(month + "-" + day + "-" + year);
    let daynd= nd.getDate();
    let monthnd= nd.getMonth() + 1;
    let fyearnd = nd.getFullYear();

    const now = new Date("07-27-2023");
    let daynow = now.getDate();
    let monthnow = now.getMonth() + 1;
    let fyear = now.getFullYear();

    if (day, month, year == "") {

        document.querySelectorAll(".errorp").forEach(function (el, i) {
            el.style.opacity = "100"
        })
        document.querySelectorAll("input").forEach(function (el, i) {
            el.style.border = "1px solid rgb(255 87 87)"
        })
        document.querySelectorAll(".ptop").forEach(function (el, i) {
            el.style.color = "rgb(255 87 87)"
        })
    }

   else if (monthnd != month) {
        document.querySelectorAll("input").forEach(function (el, i) {
            el.style.border = "1px solid rgb(200 87 87)"
        })
        document.querySelectorAll(".ptop").forEach(function (el, i) {
            el.style.color = "rgb(255 87 87)"
        })
        document.querySelector(".errorp").style.opacity = "100"
        document.querySelector(".errorp").innerHTML = "Must be a valid date"
    }
    

    else if
        (day > 31 || month > 12 || year > 2025) {
        document.querySelectorAll("input").forEach(function (el, i) {
            el.style.border = "1px solid rgb(200 87 87)"
        })
        document.querySelectorAll("p.errorp").forEach(function (el, i) {
            el.style.opacity = "100"
            el.innerHTML = "Must be a valid date"
        })
        document.querySelectorAll(".ptop").forEach(function (el, i) {
            el.style.color = "rgb(255 87 87)"
        })
    }

    else { return dates() }

    function dates() {

        if (day > daynow) {
            res = day - daynow
            document.querySelector("#resultday").innerHTML = 365 - res;
        }
        else {
            res = daynow - day
            document.querySelector("#resultday").innerHTML = res;
        }

        if (month > monthnow || month == monthnow && day > daynow) {
            resm = month - monthnow
            document.querySelector("#resultmonth").innerHTML = 12 - resm;
        }
        else {
            resm = monthnow - month
            document.querySelector("#resultmonth").innerHTML = resm;
        }

        if (fyear > year && month > monthnow || month == monthnow && day > daynow) {
            resy = (fyear - year) - 1
            document.querySelector("#resultyears").innerHTML = resy;
        }
        else {
            resy = fyear - year
            document.querySelector("#resultyears").innerHTML = resy;
        }

    }

}

