// Obtiene el elemento HTML con el id "display" y lo asigna a la variable "display"
const display = document.querySelector("#display");

// Obtiene todos los botones del documento y los asigna a la variable "buttons"
const buttons = document.querySelectorAll("button");

// Obtiene el elemento HTML con el id "calculator" y lo asigna a la variable "calculator"
const calculator = document.getElementById("calculator");

// Añade un evento click a cada botón
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Si el botón pulsado tiene el id "=", evalúa la expresión y muestra el resultado en el "display"
        if (btn.id === "=") {
            display.value = eval(display.value);
        } 
        // Si el botón pulsado tiene el id "ac", borra todo el contenido del "display"
        else if (btn.id === "ac") {
            display.value = "";
        } 
        // Si el botón pulsado tiene el id "de", elimina el último carácter del contenido del "display"
        else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } 
        // En cualquier otro caso, añade el id del botón pulsado al contenido del "display"
        else {
            display.value += btn.id;
        }
    });
});

// Añade un evento "keydown" a todo el documento
document.addEventListener("keydown", function (event) {
    event.preventDefault();
    const key = event.key;
    // Itera sobre cada botón y comprueba si coincide con la tecla pulsada
    buttons.forEach(function (button) {
        if (button.innerHTML === key || button.id === key) {
            // Si hay coincidencia, hace clic en el botón
            button.click();
        }
    });
}); 


/*
// Obtener el input de la calculadora
const display = document.getElementById("display");

// Obtener todos los botones de la calculadora
const buttons = document.querySelectorAll("button");

// Agregar un event listener para detectar cuando se presiona una tecla del teclado
document.addEventListener("keydown", (event) => {
  // Obtener el valor de la tecla presionada
  const key = event.key;

  // Si la tecla presionada es un número o un punto, agregarlo al input de la calculadora
  if (!isNaN(key) || key === ".") {
    display.value += key;
  }
  // Si la tecla presionada es Enter o Intro, ejecutar la función de calcular el resultado
  else if (key === "Enter" || key === "Intro") {
    calculate();
  }
  // Si la tecla presionada es Backspace, borrar el último carácter del input
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  // Si la tecla presionada es Esc, borrar todo el contenido del input
  else if (key === "Escape") {
    clearDisplay();
  }
  // Si la tecla presionada es un operador (+, -, *, /), agregarlo al input de la calculadora
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    display.value += key;
  }
});

// Agregar event listeners a todos los botones de la calculadora
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.id;
    if (buttonValue === "ac") {
      clearDisplay();
    } else if (buttonValue === "de") {
      deleteLastCharacter();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      display.value += buttonValue;
    }
  });
});

// Función para borrar todo el contenido del input
function clearDisplay() {
  display.value = "";
}

// Función para borrar el último carácter del input
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado
function calculate() {
  display.value = eval(display.value);
}
*/








