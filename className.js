--------------------- className ----------------------
//inserarea elementului un  class
/*
<head>
<style>
.mystyle {
    width: 300px;
    height: 100px;
    background-color: coral;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-bottom: 10px;
}
</style>
</head>
<body>

<div id="myDIV">
  I am a DIV element
</div>
<button onclick="myFunction()">Try it</button>

</body>
*/
function myFunction() {
    document.getElementById("myDIV").className = "mystyle";
}
//	playcode.io/8666
----------------------
//Adaugarea unul class nou la cel existent:

document.getElementById("myDIV").className += " anotherClass";
-----------------------
Cauta elementul cu class="mystyle" si ii audauga un stil:
function myFunction() {
    var x = document.getElementById("myDIV");
    
    if (x.className === "mystyle") { 
        x.style.fontSize = "30px";
    }
}
------------------------
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.className === "mystyle") {
        x.className = "mystyle2";
    } else {
        x.className = "mystyle";
    }
}
-------------------------
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }
}
//	playcode.io/8669