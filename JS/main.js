function menuAparecer() {
    let criarMenu = document.querySelector ('.menu-mobile') 
    if(criarMenu.classList.contains('aberto')) {
        criarMenu.classList.remove('aberto')
        document.querySelector('.icone-menu').src = "/img/menu1.png"
    } else {
        criarMenu.classList.add('aberto') 
        document.querySelector('.icone-menu').src = "/img/fechar.png"
    }
}


let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    passandoImagem()
}, 3000)

function passandoImagem() {
    count++
    if (count > 4) {
        count = 1
                  
    }
    document.getElementById("radio"+count).checked = true
   
}






