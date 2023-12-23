import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const delay = document.querySelector('.input-delay');
const submitButton = document.querySelector('.submit-btn');
const radioFullfiled = document.querySelector('.radio-true');
const form = document.querySelector('form')

let fullfilled = null;

fullfilled = radioFullfiled.checked ? true : false;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const radioFullfiled = document.querySelector('.radio-true');
    fullfilled = radioFullfiled.checked ? true : false;

    makePromise({ value: delay.value , delay: delay.value, shouldResolve: fullfilled})
        .then(value =>  
            approve(`✅ Fulfilled promise in ${value}ms`)) 
	.catch(error => deny(`❌ Rejected promise in ${error}ms`));
    form.reset();

})

const approve = (message) => {
    iziToast.show({
            message: message,
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'green',
        });
}

const deny = (message) => {
    iziToast.show({
            message: message,
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'rgb(222, 30, 30)',
            
        });
}

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(shouldResolve) {
					resolve(value)
				} else {
					reject(value)
				}
			}, delay);
  });
};


