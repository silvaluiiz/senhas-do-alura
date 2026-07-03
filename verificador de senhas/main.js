const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 5;
numerosenha.textContent = tamanhosenha;
const letrasmaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasminusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '?/!@#$%&*+_<>'
const botoes = document.querySelectorAll('.parametro-senha__botao')
const camposenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcasenha =document.querySelector('.forca');
botoes[0].onclick = diminuitamanho
botoes[1].onclick = aumentatamanho;

function diminuitamanho(){
    if (tamanhosenha >1){
        //tamanhosenha = tamanhosenha -1;
        tamanhosenha--;
    }
    numerosenha.textContent = tamanhosenha;
    gerasenha();
}
function aumentatamanho(){
    if (tamanhosenha < 20){
        //tamanhosenha = tamanhosenha +1;
        tamanhosenha++;
    }
    numerosenha.textContent = tamanhosenha;
    gerasenha();
}

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = gerasenha;
}

gerasenha();
function gerasenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasmaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto  + letrasminusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }

    let senha = '';
    for (let i =0; i < tamanhosenha;i++){
        let numeroaleatorio = Math.random()*alfabeto.length;
        numeroaleatorio = Math.floor(numeroaleatorio);
        senha = senha + alfabeto[numeroaleatorio];

    }
    camposenha.value = senha;
    classificasenha(alfabeto.length);
}

function classificasenha(tamanhoalfabeto){
    let entropia = tamanhosenha * Math.log2(tamanhoalfabeto);
    console.log(entropia);
    forcasenha.classList.remove('remove','media','forte');
    if (entropia > 57){
        forcasenha.classList.add('forte');
    } else if (entropia > 40 && entropia < 57 ) {
        forcasenha.classList.add('media');
    }else if (entropia <= 40){
        forcasenha.classList.add('fraca');
    }
    const valrorEntropia = document.querySelector('.entropia');
    valrorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " Dias para quebrar essa sennha";
}




