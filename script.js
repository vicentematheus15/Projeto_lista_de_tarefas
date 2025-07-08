let listaTarefas = [];
let listaTarefasFeitas = [];
let id = 1;

function adicionarTarefa() {
  let tarefa = prompt("Digite sua tarefa");
  listaTarefas.push({
    id: id++,
    descricao: tarefa,
    checked: false,
  });

  mostrarTarefas();
  contagemTarefas();
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

function isCheck(index) {
  // 1) Trocar o valor de 'checked'
  // a) Pego o objeto pelo id
  // b) Troca o checked utilizando '!checked'
  // console.log(listaTarefas)
  let check = document.getElementById(`${index}`);
  listaTarefas[index].checked = check.checked;
  // c) se for true, foi concluída e inclui nao array de listaTarefasFeitas
  // o método .filter() espera uma função que retorna true ou false. Ele só inclui no novo array os elementos para os quais essa função retorna true.
  // Quando checked for true, subtraia de tarefas pendentes: tarefas - tarefasFeitas = tarefasPendentes, ou exclui de tarefasPendentes e inclui em tarefasConcluídas
  listaTarefasFeitas = listaTarefas.filter((tarefa) => tarefa.checked);
  // 2) Sublinhar a descrição se check for true e voltar ao normal se checked for false
  
  // trocaClasse(index)
  check.addEventListener("click", contagemTarefas());
}

function trocaClasse(tarefa){
  let mudarClasse = document.getElementsByClassName(tarefa)
  if(listaTarefasFeitas[index].checked == true){
    mudarClasse.classList.replace(tarefaPendente, tarefasFeitas)
  }else{
    mudarClasse.classList.replace(tarefasFeitas, tarefaPendente)
  }
}

function mostrarTarefas() {
  tarefas.innerHTML = "";

  listaTarefas.forEach((tarefa, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "tarefas");

    div.innerHTML = `
      <label class="tarefa" onclick="isCheck(${index})"><input type="checkbox" id="${index}" >${tarefa.descricao}</label>
      <button class="btExcluirTarefa" onclick="excluirTarefa(${index})">Excluir</button>`;

    tarefas.appendChild(div);
  });
  // console.log(listaTarefas);
}

function excluirTarefa(index) {
  let idParaRemover = `${index}`;
  listaTarefas.splice(idParaRemover, 1);
  nenhumaTarefa();
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
