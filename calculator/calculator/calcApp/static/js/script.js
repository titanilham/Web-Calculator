

// Функция для обработки отправки формы
function submitForm() {
    alert("Форма отправлена!");
    // Здесь может быть ваша логика отправки данных, например, через AJAX
}


function addValueAndSubmit(value) {
    const inputField = document.getElementById('entry_field');
    const currentValue = inputField.value;
    
    // Получаем текущую позицию курсора
    const cursorPosition = inputField.selectionStart;

    // Разбиваем текущее значение на две части: до курсора и после
    const beforeCursor = currentValue.slice(0, cursorPosition);
    const afterCursor = currentValue.slice(cursorPosition);

    // Обновляем значение, добавляя новое значение после позиции курсора
    inputField.value = beforeCursor + value + afterCursor;

    // После добавления устанавливаем курсор обратно в правильное место
    inputField.selectionStart = inputField.selectionEnd = cursorPosition + value.length;

    // Устанавливаем фокус на input
    inputField.focus();
}

function addValueAndBack(value) {
            
    const inputField = document.getElementById('entry_field');
    if (!inputField) {
        console.error("Поле ввода с id 'entry_field' не найдено");
        return;
    }

    // Получаем текущее значение и позицию курсора
    const cursorPosition = inputField.selectionStart;
    const currentValue = inputField.value;

    // Формируем новое значение с добавлением
    const updatedValue = 
        currentValue.slice(0, cursorPosition) + 
        value + 
        currentValue.slice(cursorPosition);

    // Обновляем значение поля
    inputField.value = updatedValue;

    // Сдвигаем курсор на одну позицию назад
    const newCursorPosition = cursorPosition + value.length - 1;
    inputField.setSelectionRange(newCursorPosition, newCursorPosition);
    inputField.focus(); // Снова фокусируемся на поле ввода
}

function submitForm() {
    // Получаем значение из input
    const inputValue = document.getElementById('entry_field').value;
    
    
    // Отправляем форму
    const form = document.getElementById('myForm');
    form.submit();  // отправляем форму после добавления данных

}






function deleteLastChar() {
    const inputField = document.getElementById('entry_field');
    inputField.value = inputField.value.slice(0, -1);  // Удаляем последний символ
}

// Функция для очистки всего содержимого в input
function clearInput() {
    const inputField = document.getElementById('entry_field');
    inputField.value = '';  // Очищаем поле ввода
}