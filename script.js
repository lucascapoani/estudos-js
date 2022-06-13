
/*escopo LOCAL, insere a variável dentro da função, sem declarar VAR*/
/*escopo GLOBAL é quando a variável está no nível do programa, e não apenas de uma função*/
/*Toda variável LOCAL pode ser acessada apenas no escopo que ela foi criada, uma função, por exemplo. Toda variável GLOBAL, pode ser acessada de qualquer lugar do programa*/

/* "use strict" : faz ser obrigatório declarar toda variável que você for utilizar*/

function imprimir(){
    x = 7;
    console.log(x)
}

imprimir();
console.log(window);