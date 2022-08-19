document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFiled = document.getElementById('usar-deposit');
    const newDepositAmoundString = depositFiled.value;
    const newDepositAmound = parseFloat(newDepositAmoundString);



    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
   const CurrentDepositTotal = previousDepositTotal + newDepositAmound;
   depositTotalElement.innerText = CurrentDepositTotal;

   const blanceTotalElement = document.getElementById('blance-total');
   const pereviousblanceTotalStrin = blanceTotalElement.innerText;
   const pereviousblanceTotal = parseFloat(pereviousblanceTotalStrin);

   const CurrentblanceTotal = pereviousblanceTotal + newDepositAmound;
   blanceTotalElement.innerText = CurrentblanceTotal;

   depositFiled.value = '' ;

    

})