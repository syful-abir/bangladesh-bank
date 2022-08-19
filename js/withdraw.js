document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawFiled = document.getElementById('usar-withdraw');
    const newWithdrawAmontString = withdrawFiled.value;
    const newWithdrawAmont = parseFloat(newWithdrawAmontString);

    withdrawFiled.value = '';
    if(isNaN(newWithdrawAmont)){
        alert('Please Provide A Valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const pereviousWithdrawTotalStrin = withdrawTotalElement.innerText;
    const pereviousWithdrawTotal = parseFloat (pereviousWithdrawTotalStrin);

    

    const blanceTotalElement = document.getElementById('blance-total');
   const pereviousblanceTotalStrin = blanceTotalElement.innerText;
   const pereviousblanceTotal = parseFloat(pereviousblanceTotalStrin);

   

   if(newWithdrawAmont > pereviousblanceTotal){
    alert('sryy Your Current Blance Is Low');
    return;
   }

   const currentwithdrawTotal = pereviousWithdrawTotal + newWithdrawAmont;
   withdrawTotalElement.innerText = currentwithdrawTotal;

   const newBlanceTotal = pereviousblanceTotal - newWithdrawAmont;
   blanceTotalElement.innerText = newBlanceTotal;

    


})