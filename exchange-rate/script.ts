const calculate = () => {
  fetch('items.json').then((res) => {
    res.json().then((data) => {
      console.log('data: ', data);
    });
  });
};
calculate();
