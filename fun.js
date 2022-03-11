const inputElement = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
const h1Element = document.querySelector(".h1element");

btn.addEventListener("click", translate);
let url = "https://api.funtranslations.com/translate/minion.json";
function translate() {
  let inputValue = inputElement.value;
  newUrl = `${url}?text=${inputValue}`;
  fetch(newUrl)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      h1Element.innerHTML = data.contents.translated;
    });
}