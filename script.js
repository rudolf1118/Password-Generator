window.onload = function() {
    window.setInterval(function() {
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();
        var day = date.getDate()
        var hours = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minute < 10) {
            minute = "0" + minute
        }
        if (second < 10) {
            second = "0" + second
        }
        if (day < 10) {
            day = "0" + day
        }
        if (month < 10) {
            month = "0" + month
        }

        var clock = hours + (":") + minute + (":") + second
        var yearof = day + (":") + month + (":") + year
        document.getElementById("clock").innerHTML = clock;
        document.getElementById("yearof").innerHTML = yearof


    });
}

function pas() {
    var length = 8;
    var password = ""
    var status1 = ""
    var status2 = ""
    var string = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[];?><,./-=";
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * string.length)
        password += string.substring(randomNumber, randomNumber + 1)

    }
    document.getElementById("pass").value = password
    var pass1 = password.split("");
    var pass2 = [...new Set(pass1)];
    if (pass1.join() != pass2.join()) {
        status1 = "Simple"
        document.getElementById("status").innerHTML = `Status -> ${status1}`
    } else {
        status2 = "Difficult"
        document.getElementById("status").innerHTML = `Status -> ${status2}`

    }

    function myFunction() {
        var copyText = document.getElementById("pass");
        copyText.select();
        document.execCommand("copy");


    }
}