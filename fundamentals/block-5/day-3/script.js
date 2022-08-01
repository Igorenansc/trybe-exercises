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

const dayNumbersList = document.querySelector('#days');

function createDayNumbers(dayNumbers) {
  for (let i = 0; i < dayNumbers.length; i += 1) {
    let dayNumber = dayNumbers[i];
    let dayNumberListItem = document.createElement('li');
    dayNumberListItem.innerText = dayNumber;
    dayNumberListItem.className = 'day'

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
