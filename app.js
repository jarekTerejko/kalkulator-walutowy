const btn = document.querySelector('#submit-btn');
const content = document.querySelector('.content');

const displayResult = document.createElement('p');
displayResult.classList.add('result', 'text-primary', 'text-center', 'mt-md-5');
content.appendChild(displayResult);

const PLNEUR = 4.24;
const EURPLN = .26;
const PLNUSD = .42;
const USDPLN = 3.63;
const EURUSD = 1.21;
const USDEUR = .83;

btn.addEventListener('click', function (e) {
    e.preventDefault();

    const inputAmount = document.querySelector('#input-amount').value;
    const currencyFrom = document.querySelector('#currency-from').value;
    const currencyTo = document.querySelector('#currency-to').value;

    let result;
    if (currencyFrom === 'PLN' && currencyTo === 'EUR') {
        result = inputAmount * EURPLN;
    } else if (currencyFrom === 'EUR' && currencyTo === 'PLN') {
        result = inputAmount * PLNEUR;
    } else if (currencyFrom === 'PLN' && currencyTo === 'USD') {
        result = inputAmount * PLNUSD;
    } else if (currencyFrom === 'USD' && currencyTo === 'PLN') {
        result = inputAmount * USDPLN;
    } else if (currencyFrom === 'EUR' && currencyTo === 'USD') {
        result = inputAmount * EURUSD;
    } else if (currencyFrom === 'USD' && currencyTo === 'EUR') {
        result = inputAmount * USDEUR;
    } else {
        result = inputAmount * 1;

    }

    if (inputAmount === '') {

        displayResult.textContent = `Wpisz kwotę jaką dysponujesz abu otrzymać wynik`;

    } else {
        result = result.toFixed(2);

        displayResult.textContent = `Kwota ${inputAmount} ${currencyFrom} pozwoli Ci na zakup ${result} ${currencyTo}`;
    }

});