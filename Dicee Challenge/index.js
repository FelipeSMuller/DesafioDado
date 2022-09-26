var numeroAleatorio = Math.floor(Math.random() * 6) +1 ;

var dadoAleatorio = "dice" + numeroAleatorio + ".png";

var imageSource = "images/" + dadoAleatorio;

var primeiraImagem=  document.querySelectorAll("img")[0]

primeiraImagem.setAttribute("src", imageSource)


var numero_aleatorio =  Math.floor(Math.random() * 6) +1 ;

var dadoAleatorioDois = "dice" + numero_aleatorio + ".png";

var imageSourceDois = "images/" + dadoAleatorioDois;

document.querySelectorAll("img")[1].setAttribute("src" , imageSourceDois);

if(numeroAleatorio > numero_aleatorio){
    document.querySelector("h1").innerHTML = " 👏 Player 1 Wins!!"
}
    else if(numero_aleatorio>numeroAleatorio){
        document.querySelector("h1").innerHTML = " 🏁 Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML = " 📢 Empate !!"

}
