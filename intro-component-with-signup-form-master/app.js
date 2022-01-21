var FN = document.getElementById("FN");
var LN = document.getElementById("LN").value;
var email =  document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var fields = document.getElementsByClassName("fields");
var errMessage = document.getElementsByClassName("err-msg");
var errLogo = document.getElementsByClassName("error-logo");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateForm(){
    var test = FN.value;
    
    console.log(test);
    // if (FN.length == 0 || LN.length == 0 || email.match(mailformat) != 0 || pass.length == 0){
    //     fields.classList.add("invalid-border");
    //     errMessage.classList.add("show-err-Msg");
    //     errLogo.classList.add("show-err-logo");
    
    // }
    // else{
    //     fields.classList.remove("invalid-border");
    //     errMessage.classList.remove("show-err-Msg");
    //     errLogo.classList.remove("show-err-logo");
    
    // }

}

// function recordFN(event) {
//     FN = event.target.value;

//     console.log(FN);
    
// }