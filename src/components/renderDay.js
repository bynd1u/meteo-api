export const renderDay = (time = [], temperature = []) => {
  const dayContainer = document.createElement('div');
  dayContainer.classList.add('day');

  // Extract the date from the first time entry
  const date = new Date(time[0]).toLocaleDateString();
  const title = document.createElement('h2');
  title.textContent = date;
  title.style.textAlign = 'center';
  dayContainer.appendChild(title);

  for (let i = 0; i < time.length; i++) {
    const hour = document.createElement('div');
    hour.classList.add('hour');

    const timeElement = document.createElement('span');
    timeElement.classList.add('time');
    const hourText = new Date(time[i]).getHours();
    timeElement.textContent = `${hourText}:00`;

    const tempElement = document.createElement('span');
    tempElement.classList.add('temperature');
    tempElement.textContent = `${temperature[i]}°C`;

    hour.appendChild(timeElement);
    hour.appendChild(tempElement);

    dayContainer.appendChild(hour);
  }

  return dayContainer;
}

