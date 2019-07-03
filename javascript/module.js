
var accountInfoList = [];

var myAccount = (function() {
    let _name, _balance;
    _name = "";
    _balance = "";
    function createAccount(name, amount) {
        _name = name;
        _balance = amount;
    }
    return {
        account: function() { createAccount(document.getElementById('l1').textContent + " " + document.getElementById('accountName').value,
            document.getElementById('l2').textContent + " " + document.getElementById('deposit').value );},
        value: function() { return _name + " " + _balance; }
    }

})();

function addAccount() {
    myAccount.account();

    let newAccount = {
        account: myAccount.value()
    }
    accountInfoList.push(newAccount);

    document.getElementById('displayAccounts').value = "";

    for(let i = 0; i < accountInfoList.length; i++)
    {
        document.getElementById('displayAccounts').value += accountInfoList[i].account + "\n";
    }

}
