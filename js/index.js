// aplicar movimiento al menu

let menuVisible = false;
// funccion para mostra el menu al tocar el icono
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
//oculta el menu al selecionar uno
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//funcion que aplicara a los skills
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  //calcula la distancia entre la parte superior de elemento y el borde superior de la ventana visible
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  // Verifica si la distancia es igual o mayor a 300 (píxeles)
  if (distancia_skills >= 300) {
    // Obtiene  los elementos con la clase "progreso" (los elementos de los skill)
    let habilidades = document.getElementsByClassName("progreso");
    // Agrega clases a cada elemento de skills para aplicar estilos o animaciones
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlCss");
    habilidades[2].classList.add("microsoftOffice");
    habilidades[3].classList.add("react");
    habilidades[4].classList.add("gitHub");
    habilidades[5].classList.add("nodeJs");
    habilidades[6].classList.add("dedicacion");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("Pensamiento");
    habilidades[9].classList.add("adaptabilidad");
    habilidades[10].classList.add("comunicacion");
    habilidades[11].classList.add("problema");
  }
}

//esta funcion decta el scroll  para aplicar la animacion a los skills
window.onscroll = function () {
  efectoHabilidades();
};
//----------------map---------------------------
let map, marker;

async function initMap() {
  const position = { lat: -12.032, lng: -77.091}
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
  });

  marker = new google.maps.Marker({
    map:map,
    position:position,
    title: "Jr. Ayacucho 3816,Av. Perú, SMP-Lima,Perú",
  })
}

initMap();