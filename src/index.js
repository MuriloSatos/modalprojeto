
let tipoPerfil = localStorage.getItem('perfil');

new Notification('Voce logou!',{
    body: `bem vindo ${tipoPerfil}`
})