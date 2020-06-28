export function appendElem(component, postion='beforeend') {
  var node = document.createElement("div");
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement(postion, node);
}

export function appendSection(component, postion='beforeend') {
  var node = document.createElement("div");
  node.className = "section";
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement(postion, node);
}

export function addClickTopButton() {
  const topButton = document.getElementById("top-button");
  topButton.onclick = topFunction;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
