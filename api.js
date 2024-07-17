const characterListElement = document.getElementById('characterList');

fetch('https://swapi.dev/api/people/1/')
.then (response => response.json())
.then(data => {
    const listItem = document.createElement('li');

    listItem.textContent = `Имя: ${data.name}, Высота: ${data.height}, Mass: ${data.mass}, Hair: ${data.hair_color}, Skin-color: ${data.skin_color}, Eye-color: ${data.eye_color},Birth-of-year: ${data.birth_year}, gender: ${data.gender}, Homeworld: ${data.homeworld} Films: ${data.films}`;
    characterListElement.appendChild(listItem);
})
.catch (error => console.log('Ошибка при загрузке данных', error));
