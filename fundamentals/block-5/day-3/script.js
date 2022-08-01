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
let decemberDays = [];

for (let i = -1; i <= 31; i += 1) {
  if (i <= 0) {
    decemberDays.push(i + 30);
  } else {
    decemberDays.push(i);
  }
}

const daysNumberList = document.querySelector('#days');

for (let i = 0; i < decemberDays.length; i += 1) {
  let dayNumber = decemberDays[i];
  let dayNumberListItem = document.createElement('li');
  dayNumberListItem.innerText = dayNumber;

  daysNumberList.appendChild(dayNumberListItem);
}
