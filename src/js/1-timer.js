
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconUrl from '../img/bi_x-octagon.svg';


const startButton = document.querySelector('button[data-start]');
const daysI = document.querySelector('span[data-days]');
const hoursI = document.querySelector('span[data-hours]');
const minutesI = document.querySelector('span[data-minutes]');
const secondsI = document.querySelector('span[data-seconds]');

disableButton();


let userSelectedDate = null;
let intervalID = null;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        resetTimer();
        selectDate(selectedDates[0]);
  },
})


startButton.addEventListener('click', () => {
    intervalID = setInterval(setTimer, 1000);
})

function stopTimer(){
    clearInterval(intervalID);
}

function resetTimer() {
    stopTimer();
    daysI.textContent = formatNumber(0);
    hoursI.textContent = formatNumber(0);
    minutesI.textContent = formatNumber(0);
    secondsI.textContent = formatNumber(0);

}

function disableButton() {
    startButton.disabled = true;
}
function enableButton() {
    startButton.disabled = false;
}

function checkDate(date) {
    console.log(date);
    console.log(date.getTime());
    if (date.getTime() < Date.now()) {
        return false;
    }
    else {
        return true;
    }
}

function selectDate(date) {
    const check = checkDate(date);
    if (check) {
        userSelectedDate = date;
        enableButton();
        setTimer();
       
    } else {
        iziToast.show({
            class:'',
            title: 'Error',
            message: 'Please choose a date in the future!',
            position: 'topRight',
            titleColor:'white',
            messageColor: 'white',
            backgroundColor: 'red',
            
            iconUrl: `${iconUrl}`,
            iconColor:'white',
        });
       
        disableButton();
        
    }
}

function setTimer() {
    const { days, hours, minutes, seconds } = convertMs(userSelectedDate.getTime() - Date.now());
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        stopTimer();
    }
    daysI.textContent = formatNumber(days);
    hoursI.textContent = formatNumber(hours);
    minutesI.textContent = formatNumber(minutes);
    secondsI.textContent = formatNumber(seconds);

}

function formatNumber(number) {
    if (number < 10) {
        return '0' + number + '';
    }
    else {
        return number + '';
    }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

