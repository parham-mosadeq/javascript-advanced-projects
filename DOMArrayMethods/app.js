const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const showBtn = document.getElementById('show');
const sort = document.getElementById('sort');
const clear = document.getElementById('clear');

let data = [];

//getting data

const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
};

const addData = (ob) => {
  data.push(ob);
  updateDOM();
};

const doubleMoney = () => {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
};

const updateDOM = (providedData = data) => {
  //clearing main div *replace it*

  main.innerHTML = `<h2><strong>Person </strong>Wealth</h2>`;

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');

    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};

const sortByRichest = () => {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDOM();
};

const showMillionaires = () => {
  data = data.filter((user) => {
    return user.money > 1000000;
  });

  updateDOM();
};

const calculateWealth = () => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
};

//format number as money

const formatMoney = (number) => {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const clearItems=()=>{
    main.innerHTML = `<h2><strong>Person </strong>Wealth</h2>`;
}

addUserBtn.addEventListener('click', getRandomUser);

doubleBtn.addEventListener('click', doubleMoney);

sort.addEventListener('click', sortByRichest);

showMillionairesBtn.addEventListener('click', showMillionaires);

calculateWealthBtn.addEventListener('click', calculateWealth);

clear.addEventListener('click',clearItems)