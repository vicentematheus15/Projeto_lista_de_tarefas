let tarefasPendentes = [
{
    descricao:"Exemplo de descrição 1",
    status:"Pendente"
}
]
let tarefasFeitas = [
{
    descricao:"Exemplo de descrição 1",
    status:"Feito"
}
]

function adicionarTarefa(){
    let descricao = document.getElementById("novaTarefa").value
    tarefasPendentes.push(
        {
            descricao: descricao,
            status: "Pendente"
        }
    )

    // mostrarTarefas()
}

function mostrarTarefas(){
    tarefasPendentes.forEach((tarefa, index) => {
        let div = document.createElement("div")
        div.setAttribute("class", "tarefa")

        div.innerHTML = `
            <input type="checkbox" id="${index}" class="tarefasPendentes">${tarefa.descricao}
            <button class="excluirTarefa">Excluir</button>`

    })
    mostrarTarefas()
}