document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositHere = document.getElementById('User-deposit');
    const Newdepositstring = depositHere.value;
    const Newdeposit = parseFloat(Newdepositstring);
    const depositElement = document.getElementById('deposit-total');
    const Previousdepositstring = depositElement.innerText;
    const Previousdeposit = parseFloat(Previousdepositstring);
    const currentdeposit = Previousdeposit + Newdeposit;
    depositElement.innerText = currentdeposit;
    const balanceHere = document.getElementById('balance');
    const preveiousbalanceString = balanceHere.innerText;
    const preveiousbalance = parseFloat(preveiousbalanceString);
    const Newbalance = preveiousbalance + Newdeposit;
    balanceHere.innerText = Newbalance;
    depositHere.value = '';

})
// withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFile = document.getElementById('User-withdraw');
    const NewWithdrawString = withdrawFile.value;
    const NewWithdraw = parseFloat(NewWithdrawString);
    const withdrawElement = document.getElementById('withdraw-balance')
    const previousWithdrawstring = withdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawstring);
    const currentWithdraw = previousWithdraw + NewWithdraw;
    withdrawElement.innerText = currentWithdraw;
    // const balanceHere = document.getElementById('balance');
    // const preveiousbalanceString = balanceHere.innerText;
    // const preveiousbalance = parseFloat(preveiousbalanceString);
    // const Newbalance = preveiousbalance - NewWithdraw;
    // balanceHere.innerText = Newbalance;
    // withdrawFile.value = '';
    const balanceHere = document.getElementById('balance');
    const preveiousbalanceString = balanceHere.innerText;
    const preveiousbalance = parseFloat(preveiousbalanceString);
    const Newbalance = preveiousbalance - NewWithdraw;
    balanceHere.innerText = Newbalance;
    withdrawFile.value = '';
})