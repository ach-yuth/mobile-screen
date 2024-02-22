const imgSource = [
  "https://images.unsplash.com/photo-1708419138407-67c9c789f759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708506825624-9f30964bb5cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982107-14492010e05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D",
];
const screen = document.querySelector(".screen");
const image = document.createElement("img");
image.className = "images";
image.src = imgSource[0];
screen.append(image);

const buttons = document.querySelectorAll("button");
remove(buttons);
change(buttons[0]);
buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    image.src = imgSource[idx];
    remove(buttons);
    change(button);
  });
});

function change(el) {
  el.style.color = "white";
  el.style.backgroundColor = "green";
}

function remove(en) {
  en.forEach((el) => {
    el.style.color = "black";
    el.style.backgroundColor = "rgb(178, 222, 232)";
  });
}
