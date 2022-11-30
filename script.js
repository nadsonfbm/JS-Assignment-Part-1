while(true){
    jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura");
    jogador2 = prompt("Jogador 2: Digite pedra, papel ou tesoura");

if (jogador1 == "pedra") {
     if (jogador2 == "tesoura") {
        alert ("Pedra quebra tesoura");
    } else if (jogador2 == "papel"){
        alert ("Papel envolve a Pedra");
    } else if (jogador2 == "pedra") {
        alert ("Empate");
    }

}
 else if (jogador1 == "tesoura") {
    if (jogador2 == "pedra") {
        alert ("Pedra quebra tesoura");
    } else if (jogador2 == papel){
        alert ("tesoura corta papel");
    } else if (jogadoe2 == "tesoura") {
        alert ("Empate");
    }
}

 else if (jogador1 == "papel"){
    if (jogador2 == "pedra") {
        alert ("Papel envolve pedra");
    }else if (jogador2 == tesoura) {
        alert ("Tesoura corta papel");
    }else if (jogador2 == "papel")  {
        alert ("Empate");
    }

}

}