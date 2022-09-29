const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText) {
      if (e.target.innerText == "C") {
        display.innerText = "";
        return;
      }
      if (e.target.innerText == "=") {
        try {
          display.innerText = eval(display.innerText);
          return;
        } catch (error) {
          display.innerText = "Invalid";
          return;
        }
      }
    }
    display.innerText += e.target.innerText;
  });
});
