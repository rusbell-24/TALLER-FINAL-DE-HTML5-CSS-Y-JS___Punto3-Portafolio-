let menuVisible = false;

const mostrarOcultarMenu = () => {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
};

const seleccionar = () => {
  document.getElementById("nav").classList = "";
  menuVisible = false;
};

const animacionHabilidades = () => {
  let skills = document.getElementById("skills");
  let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("bootstrap");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("elementor");
    habilidades[5].classList.add("empatia");
    habilidades[6].classList.add("creatividad");
    habilidades[7].classList.add("trabajoequipo");
    habilidades[8].classList.add("disciplina");
    habilidades[9].classList.add("enfocado");
  }
};

window.onscroll = () => {
  animacionHabilidades();
};
