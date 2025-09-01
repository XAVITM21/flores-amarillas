// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El la estaba esperando con una flor amarilla", time: 0 },
  { text: "ella lo estaba soñando con la luz en su pupila", time: 7.5 },
  { text: "y el amarillo de sol iluminaba la esquina", time: 15.5 },
  { text: "lo sentia tan cercano lo sentia desde niña", time: 23.9 },
  { text: "ella sabia que el sabia que algun dia pasaria", time: 29.5 },
  { text: "que vendria a buscarla con sus flores amarillas", time: 33.9 },
  { text: "no te apures no detengas el instante del encuentro", time: 41 },
  { text: "esta dicho que es un hecho no la pierdas no hay derecho", time: 45.9 },
  { text: "no te olvides que la vida casi nunca esta dormida", time: 48.9 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);