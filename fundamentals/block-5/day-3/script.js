function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDayNumbers = [];

for (let i = -1; i <= 31; i += 1) {
  if (i <= 0) {
    decemberDayNumbers.push(i + 30);
  } else {
    decemberDayNumbers.push(i);
  }
}

function cte(obj) {
  // console.log(obj.tag, obj.classes, obj.text);
  if (!!obj.tag) tag = 'div';
  let createdElement = document.createElement(obj.tag);
  // if (obj.tag === "img") createdElement.src = obj.src;

  if (!!obj.id) createdElement.id = obj.id;
  if (!!obj.classes) createdElement.className = obj.classes;
  if (!!obj.text) createdElement.innerText = obj.text;

  return createdElement;
}

const dayNumbersList = document.querySelector('#days');

function createDayNumbers(dayNumbers) {
  for (let i = 0; i < dayNumbers.length; i += 1) {
    let dayNumber = dayNumbers[i];
    let dayNumberListItem = document.createElement('li');
    dayNumberListItem.innerText = dayNumber;
    dayNumberListItem.className = 'day';

    if (dayNumber === 24 || dayNumber === 25 || dayNumber === 31) {
      dayNumberListItem.className += ' holiday';
    }

    if ((dayNumber - 4) % 7 === 0 || dayNumber - 4 === 0) {
      dayNumberListItem.className += ' friday';
    }

    dayNumbersList.appendChild(dayNumberListItem);
  }
}

createDayNumbers(decemberDayNumbers);

let btnContainer = document.querySelector('.buttons-container');
btnContainer.appendChild(
  cte({ tag: 'button', id: 'btn-holiday', text: 'Feriados' })
);

btnContainer.appendChild(
  cte({ tag: 'button', id: 'btn-friday', text: 'Sexta-feira' })
);

function toggleHolidayColor() {
  let holidays = document.querySelectorAll('.holiday');
  let defaultBG = 'rgb(238,238,238)';

  if (localStorage.holidayToggle !== 'true') {
    localStorage.holidayToggle = true;
    defaultBG = 'rgb(0,128,0)';
  } else {
    localStorage.holidayToggle = false;
  }

  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = defaultBG;
  }
}

function toggleFridaysText() {
  let fridays = document.querySelectorAll('.friday');
  let defaultFridayText;

  if (localStorage.fridayToggle !== 'true') {
    localStorage.fridayToggle = true;
    defaultFridayText = 'Sexta-feira!';
  } else {
    localStorage.fridayToggle = false;
    defaultFridayText = ['4', '11', '18', '25'];
  }

  for (let i = 0; i < fridays.length; i += 1) {
    if (localStorage.fridayToggle === 'true') {
      fridays[i].innerText = defaultFridayText;
    } else {
      fridays[i].innerText = defaultFridayText[i];
    }
  }
}

let holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', toggleHolidayColor);

let fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click', toggleFridaysText);
