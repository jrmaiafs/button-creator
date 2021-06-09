const elements = document.querySelector(".elements form");
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
console.log(btn);

const properts = {
  innerText(value) {
    btn.innerText = value;
    localStorage.setItem("innerText", value);
  },
  color(value) {
    btn.style.color = value;
    localStorage.setItem("color", value);
  },
  backgroundColor(value) {
    btn.style.backgroundColor = value;
    localStorage.setItem("backgroundColor", value);
  },
  width(value) {
    btn.style.width = value + "px";
    localStorage.setItem("width", value + "px");
  },
  height(value) {
    btn.style.height = value + "px";
    localStorage.setItem("height", value + "px");
  },
  border(value) {
    btn.style.border = value;
    localStorage.setItem("border", value);
  },
  borderRadius(value) {
    btn.style.borderRadius = value + "px";
    localStorage.setItem("borderRadius", value + "px");
  },
  fontFamily(value) {
    btn.style.fontFamily = value;
    localStorage.setItem("fontFamily", value);
  },
  fontSize(value) {
    btn.style.fontSize = value;
    localStorage.setItem("fontSize", value);
  },
};

function getCSStext() {
  const cssText = btn.style.cssText;
  display.innerHTML = "<span>" + cssText.split("; ").join(";</span><span>");
}

function onChangeElement(event) {
  console.log(event.target.name);
  properts[event.target.name](event.target.value);
  getCSStext();
}

function setStyles() {
  const inputValue = {};
  Array.from(elements.elements).forEach((element) => {
    inputValue[element.name] = localStorage.getItem(element.name);
  });
  console.log(inputValue);
  Array.from(elements.elements).forEach((element) => {
    if (inputValue[element.name] === null) return;
    if (element.name === "innerText") {
      element.value = inputValue[element.name];
      btn.innerText = inputValue[element.name];
    } else {
      if (element.name === "border") {
        console.log(element.name);
        element.value = inputValue[element.name];
        btn.style[element.name] = inputValue[element.name];
      } else {
        element.value = inputValue[element.name]?.replace("px", "");
        btn.style[element.name] = inputValue[element.name];
      }
    }
    getCSStext();
  });
}

setStyles();

elements.addEventListener("change", onChangeElement);
