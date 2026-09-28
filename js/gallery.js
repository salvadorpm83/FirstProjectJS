function upDate(previewPic) {
  console.log("Se disparo el evento mouseover");

  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;

  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";

  document.getElementById("image").innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
}