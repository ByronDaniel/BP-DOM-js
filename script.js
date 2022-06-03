const CONTENT_FORM = document.getElementsByClassName('content__form')[0];
const CONTENT_BUTTON = document.getElementById('contentButton');
const CONTENT_INPUT = document.getElementById('contentInput');
const CONTENT_FOR = document.getElementsByClassName('content__for')[0];
let contador = 0;
CONTENT_BUTTON.addEventListener('click', (e)=>{
    if(!isNaN(parseInt(CONTENT_INPUT.value))){
        imprimirForm(parseInt(CONTENT_INPUT.value))
    }else{
        alert(CONTENT_INPUT.value);
    }
});

function imprimirForm(cantidad){
    let nuevoForm;
    for(let i = 0; i < cantidad; i++){
        nuevoForm = CONTENT_FORM.cloneNode(true);
        nuevoForm.children[0].value = '';
        nuevoForm.children[0].id = nuevoForm.children[0].id+=contador;
        nuevoForm.children[1].id = nuevoForm.children[1].id+=contador;
        contador++;
        CONTENT_FOR.appendChild(nuevoForm);

    }
}