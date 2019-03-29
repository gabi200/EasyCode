
// toggle menu status

function toggle_view(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// check if new user

if ( localStorage.newUser != 0 ) {
      localStorage.newUser = 0;
      var name = prompt("Hi! What's your name?");
      localStorage.name = name;
      alert("Welcome, " + name + " !");
}

// info popup

var info_msg = "EasyCode™ v1.0.3\nBy Georgescu Gabriel\n©2019 Gabi Software.All rights reserved.";

// open code editor

function open_editor() {
	window.open("../editor/code.html", "Code Editor", "width=650,height=430")
}

// add favicon

if ( window.location.pathname != "/" || window.location.pathname != "/index.html" ) {
	document.write('<link rel="icon" href="../images/logo.png">') 
}
else {
        document.write('<link rel="icon" href="res/images/logo.png">')
}

// copy protection

if ( window.location.hostname != "gabi200.github.io" ) {
	document.write("<b>Error! This web application can't run on this server!</b>") }
