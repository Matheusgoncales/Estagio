function validdates() {
    var day = document.querySelector("#dateday").value
    var month = document.querySelector("#datemonth").value
    var year = document.querySelector("#dateyear").value

    const nd = new Date(month + "-" + day + "-" + year);
    let daynd= nd.getDate();
    let monthnd= nd.getMonth() + 1;
    let fyearnd = nd.getFullYear();

    const now = new Date();
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

        const today = new Date(fyear, monthnow - 1, daynow);
        const birthDate = new Date(year, month - 1, day);

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += prevMonth;
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        document.querySelector("#resultyears").innerHTML = years;
        document.querySelector("#resultmonth").innerHTML = months;
        document.querySelector("#resultday").innerHTML = days;


    }

}