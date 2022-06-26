var botaoAdicionar = document.querySelector("#adiciona-tarefa");

// configuração dos dados recebidos ao clicar no botão

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var descricao = form.descricao.value;
    var data = form.data.value;
    // var situacao = form.situacao.value;

    var tarefaTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var descricaoTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var situacaoTd = document.createElement("td");

    nomeTd.textContent = nome;
    descricaoTd.textContent = descricao;
    dataTd.textContent = data;
    // situacaoTd.textContent = situacao;

    tarefaTr.appendChild(nomeTd);
    tarefaTr.appendChild(descricaoTd);
    tarefaTr.appendChild(dataTd);
    // tarefaTr.appendChild(situacaoTd);

    var tabela = document.querySelector("#tabela-tarefas");

    tabela.appendChild(tarefaTr);
    
})






