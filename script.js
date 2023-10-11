console.log("page loaded ...");

var userName = document.querySelector(".card-body h1");

function editName() {
    userName.innerText = "Stacy A paterson";
}

var cnxRequest = document.querySelector(".user-line");

var count1 = document.querySelector(".connections-rqst");
var count2 = document.querySelector(".your-connections");

count1.style.marginRight = "10px";
count2.style.marginRight = "10px";

function accept(id) {
    count1.innerText--;
    count2.innerText++;
    var element = document.querySelector(id);
    element.remove();
}

function decline(id) {
    count1.innerText--;
    var element = document.querySelector(id);
    element.remove();
}