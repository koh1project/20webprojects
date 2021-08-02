var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const API_URL = 'https://randomuser.me/api';
let data = [];
// Fetch random user and add money
const getRandomUser = () => __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch(API_URL);
    const data = yield res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    };
    addData(newUser);
});
const addData = (obj) => {
    data.push(obj);
    updateDOM();
};
// Update DOM
const updateDOM = (providedData = data) => {
    //Clear main div
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
};
getRandomUser();
// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
const formatMoney = (number) => {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Double everyone's money
const doubleMoney = () => {
    data = data.map((user) => {
        return Object.assign(Object.assign({}, user), { money: user.money * 2 });
    });
    updateDOM();
};
// Sort users by richest
const sortByRichest = () => {
    data = data.sort((a, b) => b.money - a.money);
    updateDOM();
};
// Filter only millionaires
const showMillionaires = () => {
    data = data.filter((user) => user.money > 1000000);
    updateDOM();
};
// Calculate the total wealth
const calculateWealth = () => {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
};
//Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

