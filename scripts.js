let button = document.getElementById("btn");
let buttonCara = document.getElementById("cara");
let buttonNumero = document.getElementById("numero");
let container = document.getElementById("container");
let control = document.getElementById("control");
let botonera = document.getElementById("botonera");

container.innerHTML = `   <img class="coin" src="/cara.jpg" alt="cara">`;

control.innerHTML = `<p class= "titulo">  Elije una Opción</p>
  
`;
let desicion = window.addEventListener("click", (e) => {
  let point = e.target.value;

  if (point == "cara" || point == "numero") {
    control.innerHTML = `<p class= "eleccion">  Elegiste <span> ${point}</span></p>
    
    `;

    botonera.removeChild(buttonCara);
    botonera.removeChild(buttonNumero);
    load(point);
  }
});

function load(decision) {
  let mensaje = document.createElement("p");
  let back = document.createElement("a");
  back.classList.add("btn");
  back.textContent = "Volver a Jugar";
  back.setAttribute("href", "/index.html");
  let userDecision = decision;

  let number = ((Math.random() * 1000) / 50) * 10;

  numero = Math.round(number);

  console.log(numero);

  let coin = new Audio();
  coin.src = "/office008.mp3";
  coin.play();

  if (numero % 2 != 0) {
    console.log("cara");
    let cara = "cara";
    setTimeout(() => {
      container.innerHTML = `   <img class="coin" src="/cara.jpg" alt="cara"> `;
    }, 900);

    if (userDecision != cara) {
      console.log("perdiste");
      setTimeout(() => {
        coin.src = "/risas-chuky.mp3";
        coin.play();
        mensaje.textContent = "¡¡ Perdiste !!";
        control.appendChild(mensaje);
        control.appendChild(back);
      }, 5000);
    }

    if (userDecision == cara) {
      console.log("Ganaste ");
      setTimeout(() => {
        coin.src = "/mario-bros-woo-hoo.mp3";
        coin.play();
        mensaje.textContent = "¡¡ Ganaste !!";
        control.appendChild(mensaje);
        control.appendChild(back);
      }, 5000);
    }
  } else if (numero % 2 == 0) {
    console.log("numero");
    let cruz = "numero";
    setTimeout(() => {
      container.innerHTML = `   <img class="coin" src="/numeroMoneda.jpg" alt="numero"> `;
    }, 900);

    if (userDecision != cruz) {
      console.log("Perdiste");
      setTimeout(() => {
        coin.src = "/risas-chuky.mp3";
        coin.play();
        mensaje.textContent = "¡¡ Perdiste !!";
        control.appendChild(mensaje);
        control.appendChild(back);
      }, 5000);
    }
    if (userDecision == cruz) {
      console.log("Ganaste ");
      setTimeout(() => {
        coin.src = "/mario-bros-woo-hoo.mp3";
        coin.play();
        mensaje.textContent = "¡¡ Ganaste !!";
        control.appendChild(mensaje);
        control.appendChild(back);
      }, 5000);
    }
  }
}
