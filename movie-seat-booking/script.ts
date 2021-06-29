const container = document.querySelector('.container') as HTMLDivElement;
const seats = document.querySelectorAll('.row .seat:not(.occupied)') as NodeListOf<HTMLDivElement>;
const count = document.getElementById('count') as HTMLSpanElement;
const total = document.getElementById('total') as HTMLSpanElement;
const movieSelect = document.getElementById('movie') as HTMLSelectElement;

let ticketPrice = parseInt(movieSelect.value);

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected') as NodeListOf<HTMLDivElement>;

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount.toString();
  total.innerText = (selectedSeatsCount * ticketPrice).toString();
};

movieSelect.addEventListener('change', (e: Event) => {
  ticketPrice = parseInt((e.target as HTMLSelectElement).value);
  console.log(ticketPrice);
});

container.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLDivElement;
  if (target.classList.contains('seat') && !target.classList.contains('occupied')) {
    target.classList.toggle('selected');

    updateSelectedCount();
  }
});
