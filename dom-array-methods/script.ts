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
};

getRandomUser();

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
