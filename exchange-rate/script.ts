const currencyEl_one = document.getElementById('currency-one') as HTMLSelectElement;
const currencyEl_two = document.getElementById('currency-two') as HTMLSelectElement;
const amountEl_one = document.getElementById('amount-one') as HTMLInputElement;
const amountEl_two = document.getElementById('amount-two') as HTMLInputElement;

const rateEl = document.getElementById('rate') as HTMLDivElement;
const swap = document.getElementById('swap') as HTMLButtonElement;

// Fetch exchange rates and update the DOM
const calculate = () => {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (Number.parseFloat(amountEl_one.value) * rate).toFixed(2);
    });
};

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
});

calculate();
