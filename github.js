//criando classes

class Github {
    constructor() {
        this.client_id = '8b9a73178cfdf25b9d6a';
        this.client_secret = '52177dd42d2bcfc9e202016f491106cdd1d889e8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

//criando método para buscar usuários e repos

    async buscarUser(usuario) {

        const respPerfil = await fetch(`https://api.github.com/users/${usuario}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const respRepos = await fetch(`https://api.github.com/users/${usuario}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const perfil = await respPerfil.json();

        const repos = await respRepos.json();
        //nome dos resultados dos fetchAPI
        return {
            perfil,
            repos
        }
    }
}