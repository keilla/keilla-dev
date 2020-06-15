export function appendSection(component, postion='beforeend') {
  var node = document.createElement("div");
  node.className = "section";
  node.innerHTML = component;
  document.getElementById("root").insertAdjacentElement(postion, node);
}
