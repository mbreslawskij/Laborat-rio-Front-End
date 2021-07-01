const tarefaInput = document.getElementById('tarefa-input');
const tarefaForm = document.getElementById('tarefa-form');
const concluidoTarefa = document.getElementById('concluido-btn');
const tarefas = document.getElementById('tarefas');

let contador = 0;

fetch('https://jsonplaceholder.typicode.com/todos')
//neste momento convertemos json em objeto/array em javascript
.then(response => response.json())
.then(json => {
    json.forEach(todo => addTarefa(todo.completed, todo.title));
});

tarefaForm.addEventListener('submit', function (event){
    event.preventDefault();

    if(tarefaInput.value.length <=3){
        tarefaInput.classList.add('is-invalid');
        console.log('Caiu no IF');
        tarefaInput.focus();

        const feedback = tarefaInput.parentNode.querySelector('.invalid-feedback');
        const totalDigitado = tarefaInput.value.length;

        feedback.innerText = `Você Digitou  ${totalDigitado} , favor digitar 4 ou mais caracteres.`;

        return false;
    }
    tarefaInput.classList.remove('is-invalid');

        addTarefa(false, tarefaInput.value);

   
});

function addTarefa(status,tarefaDigitada){
    contador++;

    const checkedString = status ? 'checked' : '';

    const tarefaTexto = `
    <li class="list-group-item">
                        <div class="form-check d-flex justify-content.betweem align-items-center">
                            <input type="checkbox" id ="tarefa=${contador}" class="form-check-input" ${checkedString}>
                            <label for="tarefa-${contador}" class="form-check-label flex-grow-1 ms-3">
                                ${tarefaDigitada} 
                            </label>
                            <button class="btn btn-danger" onclick="deletar(this);">Deletar</button>
                        </div>

                    </li>
    `;
    
    tarefas.innerHTML += tarefaTexto;
}

concluidoTarefa.onclick = () =>{
    // querySelector está pegando todos os input marcado como checked
    const checks = document.querySelectorAll('#tarefas input:checked');
    //elemento.remove()
    // console.log();
    //estamos andando sobre os elementos dentro da variavel - checks
    checks.forEach(elemento => {
        elemento.parentNode.parentNode.remove();

    });
}
function deletar(elemento) {
    elemento.parentNode.parentNode.remove();
}
