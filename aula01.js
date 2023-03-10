/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados: 
- A maior e a menor altura do grupo; 
- A média de altura dos homens; 
- O número de mulheres. */

var i;
var altura;
var sexo;
var maioralt = 0;
var menoralt = 0;
var mulh = 0;
var hom = 0;
var mediahom = 0;
var contamulh = 0;
var contahom = 0;

            for(i = 1; i <= 15; i++) {        
                altura = parseFloat(prompt("Informe sua altura["+i+"]:"));
                sexo = prompt("Sexo: M ou F:").toUpperCase();


                if(i == 1) {
                    menoralt = altura;
                } if(altura > maioralt) { 
                    maioralt = altura;
                } if(altura < menoralt) { 
                    menoralt = altura;
                } if(sexo == "M") {
                    hom += altura;
                    contahom++;
                } else if(sexo == "F") {
                    contamulh++;
                }
            }
            
            mediahom = hom/contahom;

            alert("A maior altura é: " + maioralt); 
            alert("A menor altura é: " + menoralt);
            alert("A média dos homens é: " + mediahom);
            alert("O número de mulheres é: " + contamulh);