function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
// السماح فقط بالأرقام والرموز الحسابية داخل شاشة الحاسبة
document.getElementById("display").addEventListener("keydown", function(event) {
  const allowedKeys = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/", ".", "(", ")",
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Enter"
  ];

  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }

  // إذا ضغط Enter، ينفذ النتيجة
  if (event.key === "Enter") {
    calculateResult();
  }
});

// ةسؤة
