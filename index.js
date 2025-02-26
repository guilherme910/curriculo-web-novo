const role = document.querySelector(".role");
const roles = ["Análise e Desenvolvimento de Sistemas", "Java", "HTML", "CSS", "JAVASCRIPT", "Python", "Hardware", "Banco de Dados"];
let index = 0;

function changeText() {
    role.textContent = roles[index] + " |";
    index = (index + 1) % roles.length;
}

setInterval(changeText, 2000);

