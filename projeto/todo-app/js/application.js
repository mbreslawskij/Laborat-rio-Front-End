const tarefaInput = document.getElementById('tarefa-input');
const tarefaForm = document.getElementById('tarefa-form');
const concluidoTarefa = document.getElementById('concluido-btn');
const tarefas = document.getElementById('tarefas');

let contador = 0;

tarefaForm.addEventListener('submit', function (event){
    event.preventDefault();
    contador++;
    const tarefaTexto = `
    <li class="list-group-item">
    <div class="form-check">
        <input type="checkbox" id="tarefa-${contador}" class="form-check-input">
        <label for="tarefa-${contador}" class="form-check-label d-block">
            ${tarefaInput.value}
        </label>
    </div>
    </li>
    `;
    
    console.log(tarefaInput.value);
    tarefas.innerHTML += tarefaTexto;
    tarefaInput.value = '';

});

concluidoTarefa.onclick = () =>{
    const checks = document.querySelectorAll('#tarefas imput:checked');
    console.log();
}