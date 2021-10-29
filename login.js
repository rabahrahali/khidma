function view(){
    var x=document.getElementById('input-fieldP');
    if(x.type == 'password'){
    x.type='text';
    }
    else{
        x.type='password';
    }
}

 function check() {
    var x=document.forms['signIn']['input-fieldP'].value;
       if (x.length <= 8){
           window.alert('your password should have 8 elements');
           return false;
       }
}