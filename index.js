let vilao = document.querySelector('.partevilao');
let vilaoantes = vilao.innerHTML;
let vilaoapareceu = false;
let direcionado = false;
function timeout(ms, callback){
    setTimeout(callback, ms)
}
timeout(7000, function(){
    document.querySelector('.partevilao').style = `
    position: relative;
    margin-top:20vh;
    margin-left: 70vw;
    max-width: 20vw;
    display: flex;
    animation: iniciovilao 4s;
    position: fixed;
    `
    console.log("Deu certo!")
    vilaoapareceu = true;
})
if(vilaoapareceu = true){
    timeout(12000, function(){
        document.querySelector('.partevilao').style = `
        border: 2px solid black;
        animation: fimvilao 6s;
        position: fixed;
        display: flex;
        border: none;
        `
    })
    timeout(14000, function(){
        document.querySelector('.parteheroi').style = `
        border: 2px solid black;
        animation: fimheroi 3s;
        position: fixed;
        `
    })
    timeout(15000, function(){
        document.querySelector('.parteheroi').style = `
        display: none;
        `
    })
    timeout(13000, function(){
        document.querySelector('.partevilao').style = `
        display: none;
        `
    })
}
timeout(16000, function(){
    window.location.href = "/lobby.html"
    direcionado = true;
    if(direcionado == true){

    }
})