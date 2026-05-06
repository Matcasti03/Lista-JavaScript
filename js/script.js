//Exercício 1
const exercicio1 = () => {

    let resposta = document.getElementById("resposta");

    let resultado = " ★ ";
    
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ★ ";
    }
    
  
    resposta.innerHTML = resultado;
};

//exercicio 2
const exercicio2 = () => {
   
    let num = document.getElementById("num").value;


    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    let limite = parseInt(num);
    let respostaTexto = " ★ ";

  
    for (let i = 0; i <= limite; i += 2) {
        respostaTexto += i + " ★ ";
    }


    resultado.innerHTML = respostaTexto;
};

//exercicio 3
const exercicio3 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = parseInt(document.getElementById("num").value);

    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (isNaN(numero) || numero <= 0) {
        erro.innerHTML = 'Digite um número maior que 0';
        return;
    }

    if (numero === 1) {
        resultado.innerHTML = `O número 1 não é primo`;
        return;
    }

  
    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break; 
        }
    }

    if (primo) {
        resultado.innerHTML = `O número ${numero} é primo`;
    } else {
        resultado.innerHTML = `O número ${numero} não é primo`;
    }
};

//exercicio 4
const exercicio4 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        resultado.innerHTML = "<h3>Tabuada do " + num + "</h3>";

        for (let i = 0; i <= 10; i++) {
            resultado.innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
        }
    }
}

//exercicio 5
const exercicio5 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        resultado.innerHTML = "<h3>Números ímpares até " + num + "</h3>";

        let i = 0;

        while (i <= num) {
            if (i % 2 != 0) {
                resultado.innerHTML += i + "<br>";
            }
            i++;
        }
    }
}

//exercicio 6
const exercicio6 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        let i = 0;
        let soma = 0;

        while (i <= num) {
            if (i % 2 == 0) {
                soma += i;
            }
            i++;
        }

        resultado.innerHTML = "<h3>Soma dos números pares até " + num + "</h3>";
        resultado.innerHTML += "Resultado: " + soma;
    }
} 

//exercicio 7
const exercicio7 = () => {
    let resposta = document.getElementById("resposta");

    let resultado = "";

    let i = 10;

    while (i >= 1) {
        resultado += i + " ";
        i--; 
    }

    resposta.innerHTML = "<h2>Result</h2>" + resultado;
};

//exercicio 8
const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  // Limpar os campos da tela, caso tenha alguma coisa.
  resultado.innerHTML = "";
  erro.innerHTML = "";

  // Variavel para armazenar a palavra invertida
  let palavraInvertida = "";

  //Loop de 1 até o "tamanho" da palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // Exibir a palavra invertida no resultado
  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  erro.innerHTML = "";

  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br/> A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br/> A palavra não é um palíndromo";
  }
};


//exercicio 9

const exercicio9 = () => {

    let resposta = document.getElementById("resposta");


    let resultado = " ★ ";
    
    for (let i = 1; i <= 100; i++) {
        resultado += i + " ★ ";
    }

    resposta.innerHTML = resultado;
};
//exercicio 10
let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  while (numero != "0") {
    soma += parseFloat(numero);
    contador++;
    numero = prompt("Digite um numero");
  }

  if (contador > 0) {
    resultado.innerHTML = `Total de números digitados foram ${contador}. A média da soma dos números digitados é: ${soma / contador}`;
    erro.innerHTML = "";
  }

  soma = 0;
  contador = 0;

};


//exercicio 11
const exercicio11 = () => {
    let resposta = document.getElementById("resposta");

    let resultado = "<h2>Resposta da Atividade</h2>";

    for (let i = 3; i <= 100; i += 3) {
        resultado += i + " ★ ";
    }

    resposta.innerHTML = resultado;
}

//exercicio 12
const exercicio12 = () => {
    let num = document.getElementById("num").value;
    let erro = document.getElementById("erro");
    let resultado = document.getElementById("resultado");

    erro.innerHTML = "";
    resultado.innerHTML = "";

    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    let soma = 0;
    for (let i = 0; i < num.length; i++) {
        soma += parseInt(num[i]);
    }

    resultado.innerHTML = "Soma dos dígitos: " + soma;
}

//exercicio 13
const exercicio13 = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let erro = document.getElementById("erro");
    let resultado = document.getElementById("resultado");

    erro.innerHTML = "";
    resultado.innerHTML = "";

    if (num1 > num2) {
        erro.innerHTML = "O primeiro número deve ser menor que o segundo!";
        return;
    }

    let primos = "";

    for (let i = num1; i <= num2; i++) {

        let ePrimo = true;

        if (i < 2) {
            ePrimo = false;
        } else {
    
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    ePrimo = false;
                    break;
                }
            }
        }

        if (ePrimo) {
            primos += i + " ";
        }
    }

    resultado.innerHTML = "Números primos: " + primos;
}
//exercicio 14
const exercicio14 = () => {
    let erro = document.getElementById("erro");
    let resultado = document.getElementById("resultado");

    erro.innerHTML = "";
    resultado.innerHTML = "";

    let area = document.getElementById("num1").value * document.getElementById("num2").value;

    if (area <= 0) {
        erro.innerHTML = "Digite valores maiores que zero!";
        return;
    }

    resultado.innerHTML = "Área do retângulo: " + area;
}
//exercicio 15

const exercicio15 = () => {
    let palavra = document.getElementById("palavra").value;
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (palavra === "") {
        erro.innerHTML = "Digite uma palavra!";
        return;
    }

    palavra = palavra.toLowerCase();


    let vogais = "aeiou";


    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];

        if (vogais.includes(letra)) {
            resultado.innerHTML += letra + " → Vogal <br>";
        } else {
            resultado.innerHTML += letra + " → Consoante <br>";
        }
    }
};


//exercicio 16
const exercicio16 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = document.getElementById("num1").value;

    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (numero <= 0 || numero === "") {
        erro.innerHTML = "Digite um número positivo";
    } else {

        let calculo = 2 * parseFloat(numero) * Math.PI;
     
        resultado.innerHTML = `Circunferência: ${calculo.toFixed(2)}`;
    }
};

//exercicio 17
const exercicio17 = () => {

    let base = document.getElementById("num1").value;
    let altura = document.getElementById("num2").value;

  
    base = parseInt(base);
    altura = parseInt(altura);

  
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    erro.innerHTML = "";
    resultado.innerHTML = "";


    if (base <= 0 || altura <= 0) {
        erro.innerHTML = "Digite valores válidos para base e altura!";
        return;
    }

    let area = (base * altura) / 2;

    resultado.innerHTML = "Área do triângulo: " + area;
};
const exercicio18 = () => {
    let basemaior = document.getElementById("num1").value;
    let basemenor = document.getElementById("num2").value;
    let altura = document.getElementById("num3").value;

    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    resultado.innerHTML = "";
    erro.innerHTML = "";

    basemaior = parseInt(basemaior);
    basemenor = parseInt(basemenor);
    altura = parseInt(altura);

    if (basemaior <= 0 || basemenor <= 0 || altura <= 0) {
        erro.innerHTML = "Digite valores válidos!";
        return;
    }
    let area = ((basemaior + basemenor) * altura) / 2;
    resultado.innerHTML = "Área do trapézio: " + area;
};