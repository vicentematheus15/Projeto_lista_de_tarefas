let listaTarefas = [];
let listaTarefasFeitas = [];
let id = 1;

function adicionarTarefa() {
  let tarefa = prompt("Digite sua tarefa");
  if(tarefa.trim() == "" || tarefa === null){
    alert("Preencha o campo para criar uma tarefa!")
    return
  }else{ 
    listaTarefas.push({
      id: id++,
      descricao: tarefa,
      checked: false,
    });
    mostrarTarefas();
  }
}

function nenhumaTarefa() {
  if (listaTarefas.length < 1) {
    tarefas.innerHTML = "";
    let nenhumaTarefa = document.createElement("nenhumaTarefa");
    nenhumaTarefa.setAttribute("class", "tarefas");
    nenhumaTarefa.innerHTML = `<h3>Nenhuma tarefa criada</h3>`;
    tarefas.appendChild(nenhumaTarefa);
  } else {
    mostrarTarefas();
  }
}

function isCheck(id) {
  // 1) Trocar o valor de 'checked'
  // a) Pego o objeto pelo id
  // b) Troca o checked utilizando '!checked'
  let check = document.getElementById(`${id}`);
  let index = listaTarefas.findIndex(tarefa => tarefa.id === id)
  listaTarefas[index].checked = check.checked;
  // c) se for true, foi concluída e inclui nao array de listaTarefasFeitas
  // o método .filter() espera uma função que retorna true ou false. Ele só inclui no novo array os elementos para os quais essa função retorna true.
  listaTarefasFeitas = listaTarefas.filter((tarefa) => tarefa.checked);
  check.addEventListener("click", trocaClasse(check));
  check.addEventListener("click", contagemTarefas());
  
}

function trocaClasse(check) {
  let label = check.parentElement;
   if (check.checked) {
    label.classList.replace("pendente", "concluida");
  } else {
    label.classList.replace("concluida", "pendente");
  }
}

function mostrarTarefas() {
  tarefas.innerHTML = "";

  listaTarefas.forEach((tarefa) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tarefas");

    div.innerHTML = `
    <label for="${tarefa.id}" class="pendente"><input type="checkbox" id="${tarefa.id}" ${
      tarefa.checked ? "checked" : ""
    } onclick="isCheck(${tarefa.id})">${tarefa.descricao}</label>
    <button class="btExcluirTarefa" onclick="excluirTarefa(${tarefa.id})">Excluir</button>`;
    tarefas.appendChild(div);
  });
  contagemTarefas();
}

function contagemTarefas() {
  statusTarefa.innerHTML = "";
  let tarefasPendentes = document.createElement("tarefasPendentes");
  tarefasPendentes.setAttribute("class", "statusTarefa");
  tarefasPendentes.innerHTML = `<h5>Tarefas Pendentes: ${
    listaTarefas.length - listaTarefasFeitas.length
  }</h5>`;
  statusTarefa.appendChild(tarefasPendentes);

  let tarefasFeitas = document.createElement("tarefasFeitas");
  tarefasFeitas.setAttribute("class", "statusTarefa");
  tarefasFeitas.innerHTML = `<h5>Tarefas Feitas: ${listaTarefasFeitas.length} de ${listaTarefas.length}</h5>`;
  statusTarefa.appendChild(tarefasFeitas);
}

function excluirTarefa(id) {
  let indexTarefa = listaTarefas.findIndex(tarefa => tarefa.id === id)
  let tarefaRemovida = listaTarefas[indexTarefa]
  listaTarefas.splice(indexTarefa, 1)

  if (tarefaRemovida.checked) {
    let indexTarefaFeita = listaTarefasFeitas.findIndex(tarefa => tarefa.id ===id)
    listaTarefasFeitas.splice(indexTarefaFeita, 1)
  }
  contagemTarefas();
  nenhumaTarefa();
}