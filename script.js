var pelos = Boolean()
var mamifero = Boolean()
var agua = Boolean()
var asas = Boolean()
var carnivoro = Boolean()
var noturno = Boolean()
var bando = Boolean()
var velocidade = Boolean()


function startAdvinhador(){
    alert("OLÁ, SEJA BEM VINDO! Lembre-se, digite 0 para não (false) e 1 para sim (true)...")

    var peloPrompt = parseInt(prompt("O animal possui pelos?"))
    if(peloPrompt == 0){
        pelos = false
    }
    else if(peloPrompt == 1){
        pelos = true
    }

    var mamiferoPrompt = parseInt(prompt("É um mamífero?"))
    if(mamiferoPrompt == 0){
        mamifero = false
    }
    else if(mamiferoPrompt == 1){
        mamifero = true
    }

    var aguaPrompt = parseInt(prompt("Vive na água?"))
    if(aguaPrompt == 0){
        agua = false
    }
    else if(aguaPrompt == 1){
        agua = true
    }

    var asasPrompt = parseInt(prompt("Tem asas?"))
    if(asasPrompt == 0){
        asas = false
    }
    else if(asasPrompt == 1){
        asas = true
    }

    var carnivoroPrompt = parseInt(prompt("É Carnívoro?"))
    if(carnivoroPrompt == 0){
        carnivoro = false
    }
    else if(carnivoroPrompt == 1){
        carnivoro = true
    }

    var noturnoPrompt = parseInt(prompt("É Noturno?"))
    if(noturnoPrompt == 0){
        noturno = false
    }
    else if(noturnoPrompt == 1){
        noturno = true
    }

    var bandoPrompt = parseInt(prompt("Vive em bando?"))
    if(bandoPrompt == 0){
        bando = false
    }

    else if(bandoPrompt == 1){
        bando = true
    }

    var velocidadePrompt = parseInt(prompt("É conhecido por sua velocidade/rapidez ?"))
    if(velocidadePrompt == 0){
        velocidade = false
    }
    else if(peloPrompt == 1){
        velocidade = true
    }



    /*Começo dessa desgraçada de código*/
    if(pelos == true && mamifero == true && agua == false && asas == false && carnivoro == true && noturno == true && bando == false && velocidade == true){
        alert("O ANIMAL É UM LEOPARDO!!!")
    }
    else if(pelos == false && mamifero == false && agua == false && asas == true && carnivoro == false && noturno == false && bando == false && velocidade == false){
        alert("O ANIMAL É UM TUCANO!!!")
    }
    else if(pelos == true && mamifero == true && agua == false && asas == false && carnivoro == false && noturno == true && bando == false && velocidade == false){
        alert("O ANIMAL É UM COALA!!!")
    }
    else if(pelos == true && mamifero == true && agua == false && asas == false && carnivoro == true && noturno == true && bando == true && velocidade == true){
        alert("O ANIMAL É UM LOBO!!!")
    }
    else if(pelos == true && mamifero == false && agua == false && asas == true && carnivoro == true && noturno == false && bando == false && velocidade == true){
        alert("O ANIMAL É UM ÁGUIA!!!")
    }
    else if(pelos == false && mamifero == true && agua == true && asas == false && carnivoro == false && noturno == true && bando == true && velocidade == true){
        alert("O ANIMAL É UM HIPOPÓTAMO!!!")
    }
    else if(pelos == true && mamifero == true && agua == true && asas == false && carnivoro == true  && noturno == true && bando == true && velocidade == false){
        alert("O ANIMAL É UM FOCA!!!")
    }
    else if(pelos == false && mamifero == false && agua == false && asas == false && carnivoro == true && noturno == true && bando == false && velocidade == false){
        alert("O ANIMAL É UM COBRA-CORAL!!!")
    }
    else if(pelos == true && mamifero == true && agua == false && asas == false && carnivoro == false && noturno == false && bando == true && velocidade == false){
        alert("O ANIMAL É UM SURICATO!!!")
    }
    else if(pelos == true && mamifero == true && agua == false && asas == false && carnivoro == false && noturno == false && bando == true && velocidade == true){
        alert("O ANIMAL É UM GIRAFA!!!")
    }

    else{
        alert("Esse animal não está na LISTADO !!!")
    }
}