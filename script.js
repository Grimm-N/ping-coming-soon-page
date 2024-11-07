document.getElementById("notify-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращает отправку формы
  
    var emailInput = document.querySelector(".form__input");
    var errorNotice = document.querySelector(".error__notice");
  
    // Проверяем, является ли введенный email валидным
    if (!emailInput.value || !validateEmail(emailInput.value)) {
      errorNotice.style.display = "block"; // Показываем предупреждение
    } else {
      errorNotice.style.display = "none"; // Скрываем предупреждение, если email правильный
      // Добавьте код для дальнейшей обработки (например, отправка данных)
    }
  });
  
  // Функция для проверки формата email
  function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  