const headerElement = document.createElement('header');
document.body.appendChild(headerElement);

const titleHeader = document.createElement('h1');
titleHeader.innerHTML = 'Sens-Converter';
document.querySelector('header').appendChild(titleHeader);

const titleComment = document.createElement('h2');
titleComment.innerHTML = 'Converta sua sensibilidade';
document.querySelector('header').appendChild(titleComment);


const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

const formElement = document.createElement('form');
document.querySelector('main').appendChild(formElement);

let divElement = document.createElement('div');
divElement.id = 'inputSens'
document.querySelector('form').appendChild(divElement);

let labelElement = document.createElement('label');
labelElement.setAttribute('for =','sens');
labelElement.innerHTML = 'Sensibilidade';
document.getElementById('inputSens').appendChild(labelElement);

let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'sens');
inputElement.setAttribute('name', 'senibilidade');
document.getElementById('inputSens').appendChild(inputElement);
