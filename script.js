function calcularIdade() {
    let age = +document.getElementById("age").value;
    let year = Math.floor(age / 365);   
    let month = Math.floor((age % 365) / 30);
    let day = Math.floor(age % 365) % 30;

    document.querySelector('[data-js="year"]').innerHTML = year + " ano(s)";
    document.querySelector('[data-js="month"]').innerHTML = month + " mes(es)";
    document.querySelector('[data-js="day"]').innerHTML = day + " dia(s)";
}
