const users = [
    {user:"user", password:"1234"}
];
console.log(users)

 
function validarlogin(evento){
    evento.preventDefault()  

    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    
    for (let i = 0; i < users.length; i++) {
   
        if(usuario.value==0 && contraseña.value==0){
            alert ("Por favor Ingrese los datos");
            return false;
        }else{
            if (usuario==users[i].user && contraseña==users[i].password) {
                alert("Bienvenido" + users[i].user);
                return false;
                 }
             }
        }
        alert("Usuario y/o contraseña invalidos o Usuario No Registrado");
        return true;
        }
    const boton_login = document.getElementById("boton_login")
    boton_login.addEventListener( "click", validarlogin)

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

