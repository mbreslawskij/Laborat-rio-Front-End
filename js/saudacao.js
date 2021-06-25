const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome_usuario');
const sobrenome = document.getElementById('sobrenome_usuario');

let texto = "Olá" + nome.value + "seja bem vindo";

formulario.onsubmit = function (event){
    event.preventDefault();

    console.log(nome.value);
    console.log(sobrenome.value);

}