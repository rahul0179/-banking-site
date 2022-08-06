function amountInput(id) {
    const inputValue = document.getElementById(id);
    const convertNum = parseFloat(inputValue.value);

    inputValue.value = '';
    return convertNum;

}

function blanceWithdraw(id, amount) {
    let money = document.getElementById(id);
    const convertNum = parseFloat(money.innerText);

    const total = convertNum + amount;
    console.log(total);
    money.innerText = total;
    return money;


}
function blance(id) {
    let blance = document.getElementById(id);
    let convertInt = parseFloat(blance.innerText);
    return convertInt;

}



function totalBlance(id, amount, add) {
    let blance = document.getElementById(id);
    let convertInt = parseFloat(blance.innerText);

    if (add == true) {
        let newTotal = convertInt + amount;

        blance.innerText = newTotal;
        return blance;
    }
    if (add == false && amount < convertInt) {
        let newTotal = convertInt - amount;

        blance.innerText = newTotal;
        return blance;
    }
    else {
        let massage = document.getElementById('massage');
        massage.innerText = ' withdraw amount cross the Total limit';

    }
}







document.getElementById('depositBtn').addEventListener('click', function () {
    const amount = amountInput('depositInput');
    if (amount > 0) {
        let money = blanceWithdraw("depositAmount", amount)
        let massage = document.getElementById('massage');
        massage.innerText = '';
        totalBlance("blanceAmount", amount, true)

    }
    else {
        let massage = document.getElementById('massage');
        massage.innerText = 'Enter deposit please';

    }

});

document.getElementById("withdrawBtn").addEventListener('click', function () {
    const amount = amountInput('withdrawInput');
    if (amount > 0) {
        let money = blanceWithdraw("withdrawAmount", amount)
        let massage = document.getElementById('massage');
        massage.innerText = '';
        totalBlance("blanceAmount", amount, false);


    }
    else {
        let massage = document.getElementById('massage');
        massage.innerText = 'Enter withdraw amount please';
    }

});










