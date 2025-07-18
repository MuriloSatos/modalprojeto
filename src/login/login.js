const login = document.getElementById('nome');
const senha = document.getElementById('senha');
const btn_acessar = document.getElementById('acessar');
const msg = document.getElementById('msg');



btn_acessar.addEventListener('click', validarLogin)



async function validarLogin() {
    let retorno = await window.todosAPI.validarLogin(login.value.toLowerCase(), senha.value)

    if (retorno && retorno.perfil == 'adm') {
        localStorage.setItem('perfil', retorno.perfil)
        msg.textContent = 'deu bom, adm'
        msg.style.color = 'green'
        await window.janelaAPI.abrirJanelaPrincipal()
        //console.log(retorno.perfil)
    }

    else if (retorno && retorno.perfil == 'cliente') {
        localStorage.setItem('perfil', retorno.perfil)
        msg.textContent = 'deu bom, user'
        await window.janelaAPI.abrirJanelaPrincipal()
        //console.log(retorno.perfil)
    }

    else {
        msg.textContent = 'Login inválido'
        msg.style.color = 'red'
    }
}



