numero = prompt("Digite um valor");
function fatorial (numero){
    if (numero===0){
        return 1;
    }
    else if(numero<0  || numero%1!==0){
        return "Insira um numero inteiro positivo";
    }
      return numero*fatorial(numero-1);
}

alert(Number(fatorial(numero)));