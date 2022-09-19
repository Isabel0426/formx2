const users = [
    {user1:"user",passw:"1234"}
];
document.write
function validar_login(){
    var user=document.getElementById("usuario").value;
    var pass=document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if(user=="" || pass==""){
            alert("Por favor Ingrese los datos");
            return;
        }else{
            if (usuario==users[i].user1 && contraseña==users[i].passw) {
                alert("Bienvenido user");
                return;
            }
        }
    }
    alert(" Usuario No Registrado");
    return;
}
//mostrar: 
//[0]

//Asociarlo:
// name = user
// pass = 1234

// let datos = { 
// user : "usuario",
// pass : 1234};
//  //document.write(datos[1])
// let user = datos ["usuario"];
// let pass = datos [1234];
 
 

// CREAR RAMA DEVELOP

 

// SACAR UNA FEATURE LLAMADA

 

// FEATURE/NOMBRE_APELLIDO 
// alert ("ingrese x dato");

// if (){
// }
// else{
// alert("")
// }

// funtion datos(){

// }
// datos()

// git flow da flujo de forma ordenada 
// main en ambiente productivo
// hotfix rama donde se descarga lo de la rama master
// Release ambiente de calidad
// Develop para desarrollo :se usa principal 
// Rama feature: cada que se hace desarrollo desde 0 se va a rama feature
// Feature/boton_login

// Ambientes o servidores 
// app desplegada en un servidor 
// la app es un paquete de binarios 
// cuando se desplega 

// servidor por ambiente, cada uno para desarrollo 
// servidor para test y produccion 
// push se mergea a develop 
// se desplega en el desarrollo 

// QA o tester: calidad 

// rama basada en develop 
// estando en develop 
// git checkout main 
// git branch develop rama basada en la otra 
// siempre desarrollar en feature 

