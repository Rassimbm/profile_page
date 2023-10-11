console.log("page loaded ...");

var userName = document.querySelector(".card-body h1");
console.log(userName);

function editName() {
    userName.innerText = "Stacy A paterson";
}

var cnxRequest = document.querySelector(".user-line");
console.log(cnxRequest);

function accept() {
    cnxRequest.remove()
}

function decline() {
    cnxRequest.remove()
}