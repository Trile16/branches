let main = document.getElementById("m");

for (let i = 0; i < 3; i++) {
  let cell = document.createElement("p");

  cell.innerHTML = i;
  main.appendChild(cell);
}

for (let i = 3; i > 0; i--) {
  let cell = document.createElement("p");

  cell.innerHTML = i;
  main.appendChild(cell);
}
