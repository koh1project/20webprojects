const main = document.getElementById('main') as HTMLElement;
const addUserBtn = document.getElementById('add-user') as HTMLButtonElement;
const doubleBtn = document.getElementById('double') as HTMLButtonElement;
const showMillionairesBtn = document.getElementById('show-millionaires') as HTMLButtonElement;
const sortBtn = document.getElementById('sort') as HTMLButtonElement;
const calculateWealthBtn = document.getElementById('calculate-wealth') as HTMLButtonElement;

const API_URL = 'https://randomuser.me/api';

type User = {
  name: string;
  money: number;
};

let data: User[] = [];

// Fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  const user = data.results[0];

  const newUser: User = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
};

const addData = (obj: User) => {
  data.push(obj);
  updateDOM();
};

// Update DOM
const updateDOM = (providedData = data) => {
  //Clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  providedData.forEach((item: User) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
};

getRandomUser();

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
const formatMoney = (number: number) => {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

//Event listeners
addUserBtn.addEventListener('click', getRandomUser);
// doubleBtn.addEventListener('click', doubleMoney);
// sortBtn.addEventListener('click', sortByRichest);
// showMillionairesBtn.addEventListener('click', showMillionaires);
// calculateWealthBtn.addEventListener('click', calculateWealth);
