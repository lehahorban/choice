document.addEventListener("DOMContentLoaded", function () {
  var selectedOption = "option2";
  var options = document.querySelectorAll(".repair_options_item");

  function setActiveOption(selectedId) {
    options.forEach(function (option) {
      if (option.id === selectedId) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  }

  setActiveOption(selectedOption);

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      selectedOption = this.id;
      setActiveOption(selectedOption);
      console.log("Вибрано: " + selectedOption);
    });
  });

  function send(event, url) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);
    formData.append("selectedOption", selectedOption);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    alert("Zgłoszenie wysłane");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          console.log("Відправлено успішно: ", response);
        } else {
          console.error("Помилка відправки: ", response);
        }
      }
    };

    xhr.send(formData);
  }

  document.getElementById("form").addEventListener("submit", function (event) {
    send(event, "sendmail.php");
  });

  document
    .getElementById("phoneForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(this);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "sendmail.php", true);

      alert("Zgłoszenie wysłane");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // alert('Zgłoszenie wysłane'); // Польською "Заявка відправлена"
          } else {
            console.error("Błąd wysyłania: ", xhr.responseText);
          }
        }
      };

      xhr.send(formData);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var textElement = document.getElementById("animatedText");
//   var text = textElement.innerText;
//   textElement.innerHTML = "";

//   // Розділяємо текст на символи та обгортаємо кожен у спан
//   text.split("").forEach(function (char, index) {
//     var span = document.createElement("span");
//     span.classList.add("char");
//     span.innerText = char;
//     span.style.transitionDelay = `${index * 50}ms`; // Затримка для кожного символу
//     textElement.appendChild(span);
//   });

//   window.addEventListener("scroll", function () {
//     document.querySelectorAll(".char").forEach(function (char) {
//       var position = char.getBoundingClientRect();
//       if (position.top < window.innerHeight && position.bottom >= 0) {
//         char.classList.add("active_text");
//       } else {
//         char.classList.remove("active_text");
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var textElement = document.getElementById("animatedText");
//   var text = textElement.innerText;
//   textElement.innerHTML = "";

//   text.split("").forEach(function (char, index) {
//     var span = document.createElement("span");

//     // Якщо символ є пробілом, додаємо до нього спеціальний клас
//     if (char === " ") {
//       span.classList.add("space");
//     } else {
//       span.classList.add("char");
//       span.style.transitionDelay = `${index * 50}ms`;
//     }

//     span.innerText = char;
//     textElement.appendChild(span);
//   });

//   window.addEventListener("scroll", function () {
//     document.querySelectorAll(".char").forEach(function (char) {
//       var position = char.getBoundingClientRect();
//       if (position.top < window.innerHeight && position.bottom >= 0) {
//         char.classList.add("active_text");
//       } else {
//         char.classList.remove("active_text");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("animatedText");
  var text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(function (char, index) {
    var span = document.createElement("span");

    // Якщо символ є спеціальним символом, замінюємо його на <br>
    if (char === "|") {
      span.innerHTML = "<br>";
    } else {
      // Якщо символ є пробілом, додаємо до нього спеціальний клас
      if (char === " ") {
        span.classList.add("space");
      } else {
        span.classList.add("char");
        span.style.transitionDelay = `${index * 50}ms`;
      }

      span.innerText = char;
    }
    textElement.appendChild(span);
  });

  window.addEventListener("scroll", function () {
    document.querySelectorAll(".char").forEach(function (char) {
      var position = char.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        char.classList.add("active_text");
      } else {
        char.classList.remove("active_text");
      }
    });
  });
});

function inputValidation(selector) {
  const input = document.querySelector(selector);

  function validateInput(e) {
    const regex = /^[0-9]*$/;
    if (!regex.test(input.value)) {
      input.value = input.value.slice(0, -1);
    }
  }

  input.addEventListener("input", validateInput);
  input.addEventListener("change", validateInput);
}

inputValidation(".repair_options_input_tel");
inputValidation(".hero_tel_input");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var element = document.querySelector(".svg_logo_header .toggler");
    if (element) {
      element.classList.add("animate");
    }
  }, 1000); // 1000 мілісекунд = 1 секунда
});
