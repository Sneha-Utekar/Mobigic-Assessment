var txt_uname = document.querySelector('#uname');
console.log(txt_uname);

txt_uname.onkeyup=chk_uname;
txt_uname.onblur=chk_uname;

function chk_uname(){
    
    var textBoxValue = txt_uname.value ;
    
    var reg_username = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
    var result = reg_username.test(textBoxValue);
    
    if(result){
        txt_uname.nextElementSibling.style.display='none';
        
        return true;

    }
    else{
        txt_uname.nextElementSibling.style.display='block';
        return false;
    }
}


var txt_upass = document.querySelector('#upass');
console.log(txt_upass);

txt_upass.onkeyup=chk_upass;
txt_upass.onblur=chk_upass;

function chk_upass(){
    
    var textBoxValue = txt_upass.value;
   
    var reg_pass = /^[a-zA-Z0-9]{4,12}$/;
    var result = reg_pass.test(textBoxValue);
   
    if(result){
        txt_upass.nextElementSibling.style.display='none';return true;
    }
    else{
        txt_upass.nextElementSibling.style.display='block';return false;
    }
}

var txt_ucpass = document.querySelector('#ucpass');
console.log(txt_ucpass);

txt_ucpass.onkeyup=chk_ucpass;
txt_ucpass.onblur=chk_ucpass;

function chk_ucpass(){
    txt_ucpass.setAttribute('type','password')
    var textBoxValue = txt_ucpass.value;
    if(textBoxValue==txt_upass.value && textBoxValue!='') {
        txt_ucpass.nextElementSibling.style.display='none';

        return true;
    }
    else{
        txt_ucpass.nextElementSibling.style.display='block';
        return false;
    }
}