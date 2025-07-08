let listaTarefas = [];


function adicionarTarefa() {
  let tarefa = prompt("Digite sua tarefa");
  listaTarefas.push({
    descricao: tarefa,
  });

  mostrarTarefas();
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
function mostrarTarefas() {
  tarefas.innerHTML = "";

  listaTarefas.forEach((tarefa, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tarefas");

    div.innerHTML = `
      <input type="checkbox" id="${index}" >${tarefa.descricao}
      <button class="btExcluirTarefa" onclick="excluirTarefa(${index})">Excluir</button>`;


    tarefas.appendChild(div);
  });
}

function excluirTarefa(index) {
  let idParaRemover = `${index}`;
  listaTarefas.splice(idParaRemover, 1);
  nenhumaTarefa()
}

function contagemTarefas(){
  statusTarefa.innerHTML = ""
  let tarefasPendentes = document.createElement("tarefasPendentes")
  tarefasPendentes.setAttribute("class", "statusTarefa")
}