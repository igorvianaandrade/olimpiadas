function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou o esporte.</p>"
        
        return;

    }
    
    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = ""; // Inicializa uma string vazia para concatenar os resultados da pesquisa
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) { // Itera sobre cada dado da lista de dados
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            // Concatena o HTML de cada resultado à string 'resultados'
            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>  
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

