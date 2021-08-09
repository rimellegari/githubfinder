//criar class UI

class UI {
    constructor() {
        this.profile = document.getElementById('perfil');
    
    }
    //criação da estutura para disponibilizar informação do usuário
    mostrarPerfil(usuario) {
        this.profile.innerHTML = `
        <section class ="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class= "img-fluid mb-2" src="${usuario.avatar_url}"> 
                <a href="${usuario.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Ver Perfil</a>
                </div>
                <div class="col-md-9">
                <span class= "badge badge-primary">Repositórios Publicos :${usuario.public_repos}</span>
                <span class= "badge badge-success">Seguidores:${usuario.followers}</span>
                <span class= "badge badge-success">Seguindo:${usuario.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Empresa: ${usuario.company} </li>
                    <li class="list-group-item">Site/Blog: ${usuario.blog} </li>
                    <li class="list-group-item">Localização: ${usuario.location} </li>
                    <li class="list-group-item">Membro desde: ${usuario.created_at} </li>
                </ul>
                </div>

            </div>
        </section>
        <h3 class = "page-heading mb-3">Últimos Projetos</h3>
        <div id="repos"></div>     
        `

    }
    //mostrar lisat de repositorios
    mostrarRepos(repos) {
        let output = "";

        repos.forEach(function(repo) {
            output += `
            <section class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class= "badge badge-primary">Estrelas :${repo.stargazers_count}</span>
                        <span class= "badge badge-success">Watchers:${repo.watchers_count}</span>
                        <span class= "badge badge-success">Forks:${repo.forks_count}</span>
                    
                    </div>
                </div>
            </section>
            
            `
            
        });

        document.getElementById('repos').innerHTML = output;
    }




    //função para mostrar alerta quando usuario nao for encontrado.
    mostrarAlerta(aviso, classe){
        this.limparAlerta();

        //criar elemento

        const section = document.createElement('section');
        //adicionar classe
        section.className = classe;
        //adicionar texto

        section.appendChild(document.createTextNode(aviso));

        //selecionar elemento-pai

        const container = document.querySelector('.searchContainer');

        //selecionar campo de busca

        const busca = document.querySelector('.search');

        //inserir alerta
        container.insertBefore(section, busca);

        //Sumir depois de 3 sec

        setTimeout(()=> {
            this.limparAlerta();
        }, 3000);

    }

    //Limpar mensagem de alerta

    limparAlerta() {
        const alertaAtual = document.querySelector('.alert');
        
        if(alertaAtual){
            alertaAtual.remove()
        }
    }
        

    //nao mostrar perfil enquanto estiver digitando
    limparPerfil() {
        this.profile.innerHTML = '';
    }

}