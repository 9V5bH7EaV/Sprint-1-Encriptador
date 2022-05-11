const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringparaencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringparaencriptar = stringparaencriptar.toLowerCase();
    for (let i = 0; i<matrizCodigo.length; i++){
        if(stringparaencriptar.includes(matrizCodigo[i][0])){
            stringparaencriptar = stringparaencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringparaencriptar;
}
