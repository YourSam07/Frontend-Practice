function validateEmail(input) {
    let border = document.getElementById("email");
    let message = document.getElementById("Invalid-email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.match(mailformat)){
        border.style.border= "1px solid red";
        message.style.visibility = "visible";
        return false;
    }
    else{
        border.style.border="1px solid var(--Gray)";
        message.style.visibility = "hidden";
        return true;
    }
}