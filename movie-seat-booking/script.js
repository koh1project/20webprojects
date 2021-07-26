const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const KEY_SELECTED_SEATS = 'selectedSeats';
const KEY_SELECTED_MOVIE_INDEX = 'selectedMovieIndex';
const KEY_SELECTED_MOVIE_PRICE = 'selectedMoviePrice';
const CLASS_SEAT = 'seat';
const CLASS_SELECTED = 'selected';
const CLASS_OCCUPIED = 'occupied';
const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem(KEY_SELECTED_SEATS));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add(CLASS_SELECTED);
            }
        });
    }
    const selectedMovieIndex = Number.parseInt(localStorage.getItem(KEY_SELECTED_MOVIE_INDEX));
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
};
populateUI();
let ticketPrice = parseInt(movieSelect.value);
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem(KEY_SELECTED_MOVIE_INDEX, movieIndex.toString());
    localStorage.setItem(KEY_SELECTED_MOVIE_PRICE, moviePrice);
};
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .selected');
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem(KEY_SELECTED_SEATS, JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount.toString();
    total.innerText = (selectedSeatsCount * ticketPrice).toString();
};
movieSelect.addEventListener('change', (e) => {
    const selectedElement = e.target;
    ticketPrice = parseInt(selectedElement.value);
    const { selectedIndex, value: price } = selectedElement;
    setMovieData(selectedIndex, price);
    updateSelectedCount();
});
container.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains(CLASS_SEAT) && !target.classList.contains(CLASS_OCCUPIED)) {
        target.classList.toggle(CLASS_SELECTED);
        updateSelectedCount();
    }
});
updateSelectedCount();
