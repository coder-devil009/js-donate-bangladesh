
// ----- Donation 1 ------

document.getElementById('btn-donate').addEventListener('click', function(event) {
    event.preventDefault();
    let addMoney = inputById('add-money');
    let mainBalance = textById('main-balance');
    let addBalance = textById('add-balance');
    
    if (addMoney > 0 && addMoney <= mainBalance) {
        mainBalanceValue = mainBalance - addMoney;
        addBalanceValue = addBalance + addMoney;

        
        document.getElementById('main-balance').innerText = mainBalanceValue;
        document.getElementById('add-balance').innerText = addBalanceValue;
        
        let header = document.getElementById('title-noakhali').innerText;
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.appendChild(p);
        document.getElementById('history-area').appendChild(div);
        const date = new Date();
        p.innerText = `${addMoney} taka is ${header}
        ${date}`;
        div.classList.add = 'flex';
        div.classList.add = 'flex-col';
        div.style.border = '1px solid rgb(226 232 240)';
        div.style.borderRadius = '5px';
        div.style.marginBottom = '8px';
        div.style.padding = '20px';

        modal1.showModal();
    }

    else {
        alert('Please enter a valid donation amount');
    }

})


// ------ Donation 2--------

document.getElementById('btn-feni-donate').addEventListener('click', function () {
    let addMoneyFeni = inputById('add-money-feni');
    let mainBalance = textById('main-balance');
    let addBalanceFeni = textById('add-balance-feni');

    if (addMoneyFeni > 0 && addMoneyFeni <= mainBalance) {
        mainBalanceValue = mainBalance - addMoneyFeni;
        addBalanceValue = addBalanceFeni + addMoneyFeni;

        document.getElementById('main-balance').innerText = mainBalanceValue;
        document.getElementById('add-balance-feni').innerText = addBalanceValue;

        let headerFeni = document.getElementById('title-feni').innerText;
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.appendChild(p);
        document.getElementById('history-area').appendChild(div);
        let date = new Date();
        p.innerText = `${addMoneyFeni} taka is ${headerFeni}
        ${date}`;
        div.classList.add = 'flex';
        div.classList.add = 'flex-col';
        div.style.border = '1px solid rgb(226 232 240)';
        div.style.borderRadius = '5px';
        div.style.marginBottom = '8px';
        div.style.padding = '20px';

        modal2.showModal();
    }

    else {
        alert('Please enter a valid donation amount');
    }

})


// ----- Donation 3 ------

document.getElementById('btn-quota-donate').addEventListener('click', function () {
    let addMoneyQuota = inputById('add-money-quota');
    let mainBalance = textById('main-balance');
    let addBalanceQuota = textById('add-balance-quota');

    if (addMoneyQuota > 0 && addMoneyQuota <= mainBalance) {
        mainBalanceValue = mainBalance - addMoneyQuota;
        addBalanceValue = addBalanceQuota + addMoneyQuota;

        document.getElementById('main-balance').innerText = mainBalanceValue;
        document.getElementById('add-balance-quota').innerText = addBalanceValue;

        let headerQuota = document.getElementById('title-quota').innerText;
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.appendChild(p);
        document.getElementById('history-area').appendChild(div);
        const date = new Date();
        p.innerText = `${addMoneyQuota} taka is ${headerQuota}
        ${date}`;
        div.classList.add = 'flex';
        div.classList.add = 'flex-col';
        div.style.border = '1px solid rgb(226 232 240)';
        div.style.borderRadius = '5px';
        div.style.marginBottom = '8px';
        div.style.padding = '20px';

        modal3.showModal();
    }

    else {
        alert('Please enter a valid donation amount');
    }

})


// testing

// testing

// ----- Donation and History button -------

document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('card-area').classList.add('hidden');
    document.getElementById('history-area').classList.remove('hidden');
    document.getElementById('main').classList.add('flex-col');
    document.getElementById('main').classList.add('items-center');
    document.getElementById('btn-history').style.backgroundColor = '#B4F461';
    document.getElementById('btn-donation').style.backgroundColor = 'white';
})

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('card-area').classList.remove('hidden');
    document.getElementById('history-area').classList.add('hidden');
    document.getElementById('btn-donation').style.backgroundColor = '#B4F461';
    document.getElementById('btn-history').style.backgroundColor = 'white';
})


// ---- Blog button ------

// document.getElementById('btn-blog').addEventListener('click', function(){
//     window.location.href = './pages/blog.html';
// })
// document.getElementById('btn-home').addEventListener('click', function () {

//     let blogBalance = textById('blog-balance');
//     blogBalance = mainBalanceValue;
// })








