const boton_arco = document.querySelector(".boton_demo_arco");
const boton_demo_soft_tkd = document.querySelector(".boton_demo_tkd");
const boton_repo_soft_tkd = document.querySelector(".boton_repo_tkd")

boton_arco.addEventListener('click', () => {
    alert("No hay demo en línea porque Python y Tkinter son para aplicaciones de escritorio. Consulta el repositorio para más información.");
});

boton_demo_soft_tkd.addEventListener('click', () => {
    alert("No hay demo en línea porque Python y Tkinter son para aplicaciones de escritorio.");
});

boton_repo_soft_tkd.addEventListener('click', () => {
    alert("Este programa es un producto comercial, por lo que no puedo compartir el código fuente.");
});