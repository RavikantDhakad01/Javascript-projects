const input = document.querySelector("#input");
let output = "";
const buttons = document.querySelector(".container");

buttons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (e.target.id == "cancel") {
      output = "";
      input.value = output;
    } else if (e.target.id == "equal") {
      output = eval(output);
      input.value = output;
    } else {
      output = output + e.target.innerHTML;
      input.value = output;
    }
  }
});
