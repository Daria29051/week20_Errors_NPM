//забираем поля в переменные
const featureInput = document.getElementById('feature-input'); //инпут сущности
const numberInput = document.getElementById('number-input'); //инпут номера
const button =  document.getElementById('button'); //кнопка
const outputContainer = document.querySelector('.output-container'); //поле вывода 




// функция вывода инфо
function showData() {
    fetch(`https://swapi.nomoreparties.co/${featureInput.value}/${numberInput.value}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    if (data.detail ==='Not found') {
        outputContainer.classList.add('error');
        Promise.reject(data);
       throw new Error('404');
       
        };
    outputContainer.classList.remove('error');
    
    if(featureInput.value ==='films') { 
    outputContainer.innerHTML = `Name: ${data.title}`
} else {
    outputContainer.innerHTML = `Name: ${data.name}`
}
}
)

.catch(err=> {
outputContainer.innerHTML = `Возникла ошибка: ${err.message}`;
console.log(`Возникла ошибка: ${err.message}`);
    
}

)
}




//вешаем обработчик событий на кнопку
button.addEventListener('click', showData);
