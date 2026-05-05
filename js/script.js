//Exercício 1
const exercicio1 = () => {
    // Capturar o elemento "Resposta"
    let resposta = document.getElementById("resposta");

    // Variável para armazenar o resultado
    let resultadoHTML = " # ";
    
    // Loop de 1 até 10 usando o laco for
    for (let i = 1; i <= 10; i++) {
        resultadoHTML += i + " # ";
    }
    
    // Exibir o resultado
    resposta.innerHTML = resultadoHTML;
};

//exercicio 2
const exercicio2 = () => {
    // Pegar o número digitado
    let num = document.getElementById("num").value;

    // Elementos de saída
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // Limpar conteúdo anterior
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Validação: se vazio ou menor que zero
    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    let limite = parseInt(num);
    let respostaTexto = " # ";

    // Laço for pegando apenas pares de 0 até o limite
    for (let i = 0; i <= limite; i += 2) {
        respostaTexto += i + " # ";
    }

    // EXIBIR O RESULTADO (estava faltando no seu!)
    resultado.innerHTML = respostaTexto;
};

//exercicio 3
const exercicio3 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = parseInt(document.getElementById("num").value);

    // Limpar saídas
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Validação inicial
    if (isNaN(numero) || numero <= 0) {
        erro.innerHTML = 'Digite um número maior que 0';
        return;
    }

    // O número 1 não é primo por definição
    if (numero === 1) {
        resultado.innerHTML = `O número 1 não é primo`;
        return;
    }

    // Variável Booleana
    let primo = true;

    // Loop para verificar se existe algum divisor além de 1 e ele mesmo
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break; // Se achou um divisor, para o loop aqui
        }
    }

    // Verificação Final
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
    let palavra = document.getElementById("palavra").value;
    let erro = document.getElementById("erro");
    let resultado = document.getElementById("resultado");

    erro.innerHTML = "";
    resultado.innerHTML = "";

    // tirar espaços e deixar minúsculo
    palavra = palavra.trim().toLowerCase();

    if (palavra === "") {
        erro.innerHTML = "Digite aqui";
        return;
    }

    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    if (palavra === invertida) {
        resultado.innerHTML = "É um palíndromo ";
    } else {
        resultado.innerHTML = "Não é um palíndromo ";
    }
};

//exercicio 9

const exercicio9 = () => {
    // Capturar o elemento "Resposta"
    let resposta = document.getElementById("resposta");

    // Variável para armazenar o resultado
    let resultado = " # ";
    
    // Loop de 1 até 100 usando o laco for
    for (let i = 1; i <= 100; i++) {
        resultado += i + " # ";
    }
    
    // Exibir o resultado
    resposta.innerHTML = resultado;
};

//exercicio 10
function exercicio10(){
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = document.getElementById("num").value;

}
//exercicio 10
function exercicio10(){
    let soma = 0;
    let contador = 0;
    let numero;

    while (true) {
        numero = Number(prompt("Digite um número (0 para parar):"));

        if (numero === 0) {
            break; // sai do loop
        }

        soma += numero;
        contador++;
    }

    let resposta = document.getElementById("resposta");

    if (contador === 0) {
        resposta.innerHTML = "Nenhum número foi digitado.";
    } else {
        let media = soma / contador;
        resposta.innerHTML = "Média: " + media;
    }
};
//exercicio 11
function exercicio11() {
    let resposta = document.getElementById("resposta");

    let resultado = "<h2>Resposta da Atividade</h2>";

    for (let i = 3; i <= 100; i += 3) {
        resultado += i + " ";
    }

    resposta.innerHTML = resultado;
}
//exercicio 12
function exercicio12() {
    let num = document.getElementById("num").value;
    let erro = document.getElementById("erro");
    let resultado = document.getElementById("resultado");

    erro.innerHTML = "";
    resultado.innerHTML = "";

    // Validação simples
    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    let soma = 0;

    // Percorre cada dígito
    for (let i = 0; i < num.length; i++) {
        soma += parseInt(num[i]);
    }

    resultado.innerHTML = "Soma dos dígitos: " + soma;
}

//exercicio 13
function exercicio13() {
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

    // Percorre o intervalo
    for (let i = num1; i <= num2; i++) {

        let ePrimo = true;

        if (i < 2) {
            ePrimo = false;
        } else {
            // Testa divisores
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
function exercicio14() {
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
    // Pegar elementos da tela
    let palavra = document.getElementById("palavra").value;
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // Limpar mensagens anteriores
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Validação
    if (palavra === "") {
        erro.innerHTML = "Digite uma palavra!";
        return;
    }

    // Converter para minúsculo
    palavra = palavra.toLowerCase();

    // Vogais
    let vogais = "aeiou";

    // Loop para percorrer cada letra
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

    // Limpar saídas
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (numero <= 0 || numero === "") {
        erro.innerHTML = "Digite um número positivo";
    } else {
        // Cálculo da circunferência: 2 * PI * raio
        let calculo = 2 * parseFloat(numero) * Math.PI;
        // fixed(2) para não ficar um número gigante na tela
        resultado.innerHTML = `Circunferência: ${calculo.toFixed(2)}`;
    }
};

//exercicio 17
const exercicio17 = () => {
    // Capturar os valores digitados
    let base = document.getElementById("num1").value;
    let altura = document.getElementById("num2").value;

    // Converter para número
    base = Number(base);
    altura = Number(altura);

    // Capturar onde vai mostrar o resultado
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // Limpar mensagens
    erro.innerHTML = "";
    resultado.innerHTML = "";

    // Validação simples
    if (base <= 0 || altura <= 0) {
        erro.innerHTML = "Digite valores válidos para base e altura!";
        return;
    }

    // Cálculo da área
    let area = (base * altura) / 2;

    // Exibir resultado
    resultado.innerHTML = "Área do triângulo: " + area;
};
const exercicio18 = () => {
    let baseMaior = document.getElementById("num1").value;
    let baseMenor = document.getElementById("num2").value;
    let altura = document.getElementById("num3").value;

    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Converter
    baseMaior = Number(baseMaior);
    baseMenor = Number(baseMenor);
    altura = Number(altura);

    // Validação
    if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
        erro.innerHTML = "Digite valores válidos!";
        return;
    }

    // Cálculo
    let area = ((baseMaior + baseMenor) * altura) / 2;

    // Resultado
    resultado.innerHTML = "Área do trapézio: " + area;
};