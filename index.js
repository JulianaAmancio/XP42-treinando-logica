// exercício 1

var nomeCompleto = "Juliana Amancio"

console.log(nomeCompleto);


//exercício 2

let numeroA = 15;
let numeroB = 5;
let resultado = 0;

resultado = numeroA * numeroB;
console.log(resultado);

//exercício 3

function saudacao (){
    console.log("Oi eu sou o Goku!")
}
saudacao();

//exercício 4

function multiplica (num1, num2){
    console.log(num1 * num2)

}
multiplica(5, 10)

//exercício 5

function podeDirigir (idade){
    if ( idade >= 18){
        return"Você pode dirigir"

    }else{
        return"Você não pode dirigir"
    }
}

    console.log (podeDirigir (22));
    console.log (podeDirigir(12));

// exercício 6

for( let i=0; i<=20; i++){
    console.log (i);
}


//exercício 7

for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }

  //exercício 8 

function tabuada(numeral) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numeral} x ${i} = ${numeral*i}`);
  }
}
tabuada(9)

//exercício 9 
const converterEmHoras = (minutes) => {
    return minutes / 60;
  };
  
  console.log(converterEmHoras(250), " hora(s)");