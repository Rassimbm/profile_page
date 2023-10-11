console.log("page loaded ...");

var userName = document.querySelector(".card-body h1");
console.log(userName);

function editName() {
    userName.innerText = "Stacy A paterson";
}

var cnxRequest = document.querySelector(".user-line");
console.log(cnxRequest);
var rqstCount = document.querySelector(".connections");
console.log(rqstCount);
var count = 2;

function accept() {
    count--;
    rqstCount.innerText = count;
    cnxRequest.remove();
}

function decline() {
    cnxRequest.remove()
}