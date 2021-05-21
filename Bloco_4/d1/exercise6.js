let xadrez = "Escravo"
let peça = xadrez . toLowerCase ();

switch (peça) {
    case "bispo":
        console.log("Diagonal");
        break;
    
    case "cavalo": 
        console.log("Em L");
        break;

    case "torre":
        console.log("vertical ou horizontal");
        break;
    
    case "peão":
        console.log("uma casa para frente");
        break;

    case "rainha":
        console.log("todas as direções");
        break;
    
    case "rei":
        console.log("todas as direções somente uma casa");
        break;

    default:
        console.log("inválida");
}   