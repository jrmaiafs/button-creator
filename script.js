const elements = document.querySelector(".elements form");
const btn = document.querySelector(".btn");
console.log(btn);

const properts = {
  text(value) {
    btn.innerText = value;
  },
};

function getElement(event) {
  properts[event.target.name](event.target.value);
}

elements.addEventListener("change", getElement);
