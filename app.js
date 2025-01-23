let amigos = [];


function adicionarAmigo(){
    let nomes = document.querySelector('input').value;
    
    if(nomes != ''){
        amigos.push(nomes);
        console.log(amigos);
        listaAmigos(amigos);
        limparCampo();
    }else{
        alert( "Por favor, insira um nome.");
    }
}


function limparCampo(){
    nomes = document.querySelector('input');
    nomes.value = '';
}


function listaAmigos(amigos){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i=0; i < amigos.length; i++){
        let nome = document.createElement('li');
        nome.textContent = amigos[i];
        lista.appendChild(nome);
    }
}

function sortearAmigo(){
    if(amigos.lenght === 0){
        alert('Não há amigos disponíveis para sortear');
        return;
    }

    let inidiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[inidiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    
}


function reiniciar(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
}