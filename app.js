//Instanciar github

const github = new Github;

//Instanciar perfil

const ui = new UI

// Procurar input

const buscarUsuario = document.getElementById('buscarUsuario');

//Adicionando event listener

buscarUsuario.addEventListener('keyup', (e) => {
    //Capturar texto digitado
    const textoUsuario = e.target.value;

    //verificando se algo foi digitado - se o valor for diferente de vazio, chamar a API
    if(textoUsuario !== ''){
        //console.log(textoUsuario)
   
    //chamar http
    github.buscarUser(textoUsuario)
        .then(data =>{
            //verificando  se o usuário existe -- Alerta
            if(data.perfil.message === 'Not Found') {
            //Mostrar mensagem de alerta
            ui.mostrarAlerta('Usuário não encontrado', 'alert alert-danger')
            }else{
            //Mostrar perfil
            ui.mostrarPerfil(data.perfil);
            ui.mostrarRepos(data.repos);
            }
        })
    } else {
        //limpar perfil
        ui.limparPerfil()
    } 

});
