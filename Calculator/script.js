const display = document.getElementById('display');
const message = document.getElementById('calc-message');

// Append value to the display
function appendValue(val) {
  display.value += val;
  setMessage("Typing...");
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
  setMessage("Cleared");
}

// Remove the last character
function backspace() {
  display.value = display.value.slice(0, -1);
  setMessage("Backspace");
}

// Calculate the expression
function calculate() {
  try {
    const result = eval(display.value);
    if (result === undefined || result === null || result === Infinity) {
      throw new Error("Invalid");
    }
    display.value = result;
    setMessage("Result shown");
  } catch {
    display.value = 'Error';
    setMessage("Invalid expression");
  }
}

// Update the message area
function setMessage(msg) {
  message.textContent = msg;

  // Optional auto-reset after 2 seconds
  clearTimeout(setMessage.timeout);
  setMessage.timeout = setTimeout(() => {
    message.textContent = "Ready to calculate";
  }, 2000);
}
