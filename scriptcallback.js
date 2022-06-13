/* Callback = utilizar como um atributo uma função. Serve para fazer algo que não é em tempo real (assíncrono) = só queremos executar depois que algo acontecer*/
/*
let usuarios = ["Adriano", "Márcia", "José"];

function inserirUsuario(nome, callback){

    setTimeout(() => {usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Lucas", listarUsuarios);
*/

/* ---- PROMISE ----- */

let usuarios = ["Adriano", "Márcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject))}

        setTimeout(() => {
            usuarios.push(nome);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "Erro de qualquer coisa" 
            }
        }, 1000);
    })
return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Lucas").then();


