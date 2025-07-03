let listaTarefas = [
  {
    descricao: "Exemplo de descrição 1",
  },
];

function adicionarTarefa() {
  let tarefa = prompt("Digite sua tarefa");
  listaTarefas.push({
    descricao: tarefa,
  });

  mostrarTarefas();
}

function mostrarTarefas() {
  let nenhumaTarefa = document.getElementById("nenhumaTarefa");

  nenhumaTarefa.innerHTML = "";


  listaTarefas.forEach((tarefa, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tarefas");

    div.innerHTML = `
            <input type="checkbox" id="${index}" >${tarefa.descricao}
            <button class="btExcluirTarefa" onclick="excluirTarefa()">Excluir</button>`;

    tarefas.appendChild(div);
  });
  
}
