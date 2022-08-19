// step 1 
document.getElementById('btn-submite').addEventListener('click',function(){

// step 2 
   const emailFiled = document.getElementById('usar-email');
   const email = emailFiled.value;

//    step 3
   const passwordFiled = document.getElementById('usar-password');
   const password = passwordFiled.value;

//    step 4
//    ata use kora jabe na kno vabei.

if(email === 'usar@gamil.com' && password === 'usarlogin'){
    window.location.href = 'bank.html';
}
else{
    alert('Sryyyy Your password Not Curret');
}
   
})