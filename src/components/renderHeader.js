export const renderHeader = (city) => {
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = `Weather in ${city}`;

  header.appendChild(title);
  
  return header;
}