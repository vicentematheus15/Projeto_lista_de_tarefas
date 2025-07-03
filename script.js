let listaTarefas = [];

function adicionarTarefa() {
  let tarefa = prompt("Digite sua tarefa");
  listaTarefas.push({
    descricao: tarefa,
  });

  mostrarTarefas();
}

function mostrarTarefas() {
  if (listaTarefas.length == 1) {
    let nenhumaTarefa = document.getElementById("nenhumaTarefa");
    nenhumaTarefa.innerHTML = "";
  }
  tarefas.innerHTML = "";

  listaTarefas.forEach((tarefa, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tarefas");

    div.innerHTML = `
            <input type="checkbox" id="${index}" >${tarefa.descricao}
            <button class="btExcluirTarefa" onclick="excluirTarefa(${index})">Excluir</button>`;

    // console.log(listaTarefas)
    // console.log(listaTarefas.length);

    tarefas.appendChild(div);
  });
}

function excluirTarefa(index) {
  let idParaRemover = `${index}`;
  console.log(idParaRemover);
  listaTarefas.splice(idParaRemover, 1);
  mostrarTarefas();
}
