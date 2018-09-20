const form = document.querySelector('#currency-form');
const content = document.querySelector('.content');

const displayResult = document.createElement('p');
displayResult.classList.add('result', 'text-primary', 'text-center');
content.appendChild(displayResult);

const exchangeRates = {
	plnEur: 4.29,
	eurPln: .23,
	plnUsd: 3.66,
	UsdPln: .27,
	plnGbp: 4.84,
	gbpPln: .2,
	plnChf: 3.8,
	chfPln: .26,
	eurUsd: .85,
	usdEur: 1.13,
	eurGbp: 1.12,
	gbpEur: .88,
	eurChf: .9,
	chfEur: 1.13,
	usdGbp: 1.32,
	gbpUsd: .75,
	usdChf: 1.03,
	chfUsd: .97
}

const { plnEur, eurPln, plnUsd, UsdPln, plnGbp, gbpPln, plnChf, chfPln, eurUsd, usdEur, eurGbp, gbpEur, eurChf, chfEur, usdGbp, gbpUsd, usdChf, chfUsd } = exchangeRates;

const convertCurrency = (e) => {
	
	e.preventDefault();

    const inputAmount = document.querySelector('#input-amount').value;
    const currencyFrom = document.querySelector('#currency-from').value;
    const currencyTo = document.querySelector('#currency-to').value;

    let result;
    if (currencyFrom === 'PLN' && currencyTo === 'EUR') {
        result = inputAmount * eurPln;
    } else if (currencyFrom === 'EUR' && currencyTo === 'PLN') {
        result = inputAmount * plnEur;
    } else if (currencyFrom === 'PLN' && currencyTo === 'USD') {
        result = inputAmount * UsdPln;
    } else if (currencyFrom === 'USD' && currencyTo === 'PLN') {
        result = inputAmount * plnUsd;
    } else if (currencyFrom === 'PLN' && currencyTo === 'GBP') {
        result = inputAmount * gbpPln;
    } else if (currencyFrom === 'GBP' && currencyTo === 'PLN') {
        result = inputAmount * plnGbp;
    } else if (currencyFrom === 'PLN' && currencyTo === 'CHF') {
        result = inputAmount * chfPln;
    } else if (currencyFrom === 'CHF' && currencyTo === 'PLN') {
        result = inputAmount * plnChf;
    } else if (currencyFrom === 'EUR' && currencyTo === 'USD') {
        result = inputAmount * usdEur;
    } else if (currencyFrom === 'USD' && currencyTo === 'EUR') {
        result = inputAmount * eurUsd;
    } else if (currencyFrom === 'EUR' && currencyTo === 'GBP') {
        result = inputAmount * gbpEur;
    } else if (currencyFrom === 'GBP' && currencyTo === 'EUR') {
        result = inputAmount * eurGbp;
    } else if (currencyFrom === 'EUR' && currencyTo === 'CHF') {
        result = inputAmount * chfEur;
    } else if (currencyFrom === 'CHF' && currencyTo === 'EUR') {
        result = inputAmount * eurChf;
    } else if (currencyFrom === 'USD' && currencyTo === 'GBP') {
        result = inputAmount * gbpUsd;
    } else if (currencyFrom === 'GBP' && currencyTo === 'USD') {
        result = inputAmount * usdGbp;
    } else if (currencyFrom === 'USD' && currencyTo === 'CHF') {
        result = inputAmount * chfUsd;
    } else if (currencyFrom === 'CHF' && currencyTo === 'USD') {
        result = inputAmount * usdChf;
    } else {
        result = inputAmount * 1;
    }

    if (inputAmount === '') {

        displayResult.textContent = `Wpisz kwotę jaką dysponujesz, aby otrzymać wynik`;

    } else {
		
        result = result.toFixed(2);
		
        displayResult.textContent = `Kwota ${inputAmount} ${currencyFrom} pozwoli Ci na zakup ${result} ${currencyTo}`;
		document.querySelector('#input-amount').value = '';
		
    }

}

form.addEventListener('submit', convertCurrency);