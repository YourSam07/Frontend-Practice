function Validate(input){
    let valid = document.getElementsByClassName('valid')[0];
    let border = document.getElementById('email');
    let errorSymbol = document.getElementById('error');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat))
    {
        valid.classList.remove("whenInvalid");
        border.classList.remove("border");
        errorSymbol.classList.remove("errorSym");
        return true;
    }
    else 
    {
        valid.classList.add("whenInvalid");
        border.classList.add("border");
        errorSymbol.classList.add("errorSym");
        return false;
    }


}