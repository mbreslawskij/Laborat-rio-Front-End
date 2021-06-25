const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome_usuario');
const sobrenome = document.getElementById('sobrenome_usuario');
const retorno = document.getElementById('retorno');

const primeiroH1 = document.querySelector('h1');
primeiroH1.style.fontFamily = 'verdana';
primeiroH1.style.color = 'green';

let texto = "Olá" + nome.value + "seja bem vindo";

formulario.onsubmit = function (event){
    event.preventDefault();

    console.log(nome.value);
    console.log(sobrenome.value);

    const texto = "Oi " + nome.value + " " + sobrenome.value + ", seja(a) bem vindo!!!";

    retorno.innerHTML = texto;


}

